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

export const { buscarMenu, filtroPrecioHasta, filtroMenorPrecio, filtroMayorPrecio, filtroPorIngredientes, removeFilter } = cartaSlice.actions

export const selectCarta = (state: RootState) => state.carta

export default cartaSlice.reducer