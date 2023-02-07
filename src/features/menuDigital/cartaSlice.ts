import { carta3 } from '@/mock/mock3';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';


const initialState = carta3

export const cartaSlice = createSlice({
    name: 'carta',
    initialState,
    reducers: {
        mostrarState: (state) => {
            state.map(menu => console.log(menu.categoria))
        },
    },
})

export const { mostrarState } = cartaSlice.actions

export const selectCarta = (state: RootState) => state.carta

export default cartaSlice.reducer