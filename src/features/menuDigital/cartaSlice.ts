import { ICategoria } from '@/interfaces';
import { mock } from '@/mock/mock';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';


const initialState = mock

export const cartaSlice = createSlice({
    name: 'carta',
    initialState,
    reducers: {
        buscarMenu: (state, { payload }: { payload: string }): ICategoria[] => {
            if (!payload) {
                return initialState
            }
            let result: ICategoria[] = [];
            state.forEach(categoria => {
                let menus = categoria.menus.filter(m => m.nombre.toLowerCase().includes(payload.toLowerCase()));
                if (menus.length > 0) {
                    result.push({ ...categoria, menus: menus });
                }
            });
            return result;
        },
        filtroPrecioHasta: (state, { payload }: { payload: number }) => {
            if (!payload) {
                return initialState
            }
            let result: ICategoria[] = []
            state.forEach(categoria => {
                let menus = categoria.menus.filter(menu => menu.precio <= payload)
                if (menus.length > 0) {
                    result.push({ ...categoria, menus: menus })
                }
            })
            return result
        },
        filtroPorIngredientes: (state, { payload }: { payload: string }) => {
            if (!payload) {
                return initialState
            }
            let result: ICategoria[] = []
            state.forEach(categoria => {
                let menus = categoria.menus.filter(menu => menu.ingredientes.includes(payload))
                if (menus.length > 0) {
                    result.push({ ...categoria, menus: menus })
                }
            })
            return result
        },
        filtroPopulares: (state) => {
            let populares: ICategoria[] = []
            state.forEach(categoria => {
                let menus = categoria.menus.filter(menu => menu.esPopular === true)
                if (menus.length > 0) {
                    populares.push({ ...categoria, menus: menus })
                }
            })
            return populares
        },
        filtroOfertas: (state) => {
            let populares: ICategoria[] = []
            state.forEach(categoria => {
                let menus = categoria.menus.filter(menu => menu.esOferta === true)
                if (menus.length > 0) {
                    populares.push({ ...categoria, menus: menus })
                }
            })
            return populares
        },
        filtroMenorPrecio: (state) => {
            let newState = [...state];
            newState = newState.map(categoria => {
                let menus = [...categoria.menus];
                menus.sort((a, b) => a.precio - b.precio);
                return { ...categoria, menus };
            });
            return newState;
        },
        filtroMayorPrecio: (state) => {
            let newState = [...state];
            newState = newState.map(categoria => {
                let menus = [...categoria.menus];
                menus.sort((a, b) => b.precio - a.precio);
                return { ...categoria, menus };
            });
            return newState;
        },
        removeFilter: (state) => {
            state = initialState;
            return state
        }
    },
})

export const { buscarMenu, filtroPrecioHasta, filtroMenorPrecio, filtroMayorPrecio, filtroPorIngredientes, filtroPopulares,filtroOfertas, removeFilter } = cartaSlice.actions

export const selectCarta = (state: RootState) => state.carta

export default cartaSlice.reducer