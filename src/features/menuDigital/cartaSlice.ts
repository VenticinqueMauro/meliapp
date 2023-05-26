import { ICartaState, ICategoria } from '@/interfaces';
import { db } from '@/main';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import type { RootState } from '../../app/store';



const initialState: ICartaState = {
    data: [],
    loading: false,
    resultadosBusqueda: [],
    precioHasta: [],
    populares: [],
    promociones: [],
    vegetarianos: [],
    sinTacc: [],
    filtroActual: 'ninguno',
    adminLogged: false
}

export const fetchMenuData = createAsyncThunk(
    'carta/fetchMenuData',
    async () => {
        try {
            const docRef = doc(db, "Meli", "catalogo");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data().menus;
            }
        } catch (error) {
            throw error;
        }
    }
);

export const cartaSlice = createSlice({
    name: 'carta',
    initialState,
    reducers: {
        buscarMenu: (state, { payload }: { payload: string }): void => {
            if (!payload) {
                state.filtroActual = 'ninguno';
                state.resultadosBusqueda = [];
                return;
            }
            const newState = state.data
                .map((categoria) => {
                    const menus = categoria.menus.filter((menu) => menu.nombre.toLowerCase().includes(payload.toLowerCase()));
                    if (menus.length > 0) {
                        return { ...categoria, menus };
                    }
                    return null;
                })
                .filter((categoria) => categoria !== null) as ICategoria[];
            state.resultadosBusqueda = newState;
            state.filtroActual = 'busqueda';
        },
        eliminarMenu: (state, { payload }: { payload: { categoria: string, nombre: string } }): ICartaState => {
            const categoriaIndex = state.data.findIndex(categoria => categoria.categoria === payload.categoria);
            if (categoriaIndex === -1) {
                return state;
            }
        
            const categoria = state.data[categoriaIndex];
            const newMenus = categoria.menus.filter(menu => menu.nombre !== payload.nombre);
        
            if (newMenus.length === categoria.menus.length) {
                return state;
            }
        
            const newCategoria = { ...categoria, menus: newMenus };
            const newData = [...state.data];
            newData[categoriaIndex] = newCategoria;
        
            if (newMenus.length === 0) {
                newData.splice(categoriaIndex, 1);
            }
        
            return { ...state, data: newData };
        },
        filtroPrecioHasta: (state, { payload }: { payload: number }) => {
            if (!payload) {
                return initialState
            }
            const result: ICategoria[] = state.data.map(categoria => {
                const menus = categoria.menus.filter(menu => menu.precio <= payload)
                if (menus.length > 0) {
                    return { ...categoria, menus }
                }
                return null
            }).filter((categoria) => categoria !== null).map((categoria) => categoria as ICategoria)

            return { ...state, precioHasta: result, filtroActual: 'hasta' }
        },
        filtroMenorPrecio: (state) => {
            const newState: ICategoria[] = state.data.map((categoria) => ({
                ...categoria,
                menus: [...categoria.menus].sort((a, b) => a.precio - b.precio),
            }));
            return { ...state, data: newState };
        },
        filtroMayorPrecio: (state) => {
            const newState: ICategoria[] = state.data.map((categoria) => ({
                ...categoria,
                menus: [...categoria.menus].sort((a, b) => b.precio - a.precio),
            }));
            return { ...state, data: newState };
        },
        filtroPopulares: (state) => {
            const newState: ICategoria[] = state.data
                .map((m) => {
                    const menus = m.menus.filter((m) => m.esPopular === true);
                    if (menus.length > 0) {
                        return { ...m, menus };
                    }
                    return null;
                })
                .filter((categoria) => categoria !== null)
                .map((categoria) => categoria as ICategoria);
            return { ...state, populares: newState, filtroActual: 'popular' };
        },
        filtroPromos: (state) => {
            const newState: ICategoria[] = state.data
                .map((m) => {
                    const menus = m.menus.filter((m) => m.esPromo === true);
                    if (menus.length > 0) {
                        return { ...m, menus };
                    }
                    return null;
                })
                .filter((categoria) => categoria !== null)
                .map((categoria) => categoria as ICategoria);

            return { ...state, promociones: newState, filtroActual: 'promos' };
        },
        filtroVegetarianos: (state) => {
            const newState: ICategoria[] = state.data
                .map((m) => {
                    const menus = m.menus.filter((m) => m.esVegetariano === true);
                    if (menus.length > 0) {
                        return { ...m, menus };
                    }
                    return null;
                })
                .filter((categoria) => categoria !== null)
                .map((categoria) => categoria as ICategoria);

            return { ...state, vegetarianos: newState, filtroActual: 'vegetariano' };
        },
        filtroSinTacc: (state) => {
            const newState: ICategoria[] = state.data
                .map((m) => {
                    const menus = m.menus.filter((m) => m.esSinTac === true);
                    if (menus.length > 0) {
                        return { ...m, menus };
                    }
                    return null;
                })
                .filter((categoria) => categoria !== null)
                .map((categoria) => categoria as ICategoria);

            return { ...state, sinTacc: newState, filtroActual: 'sinTacc' };
        },
        removeFilter: (state) => {
            state.filtroActual = 'ninguno'
            return;
        },
        loginAdmin: (state) => {
            state.adminLogged = true
            localStorage.setItem('isLogged', 'true');
        },
        logOutAdmin: (state) => {
            state.adminLogged = false
            localStorage.removeItem("isLogged");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenuData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMenuData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload || [];
        });
        builder.addCase(fetchMenuData.rejected, (state, action) => {
            state.loading = false;
        });
    }
})

export const { buscarMenu, eliminarMenu, filtroPrecioHasta, filtroMenorPrecio, filtroMayorPrecio, filtroPopulares, filtroPromos, filtroVegetarianos, filtroSinTacc, loginAdmin, logOutAdmin, removeFilter } = cartaSlice.actions

export const selectCarta = (state: RootState) => state.carta

export default cartaSlice.reducer