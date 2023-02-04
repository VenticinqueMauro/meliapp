import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface CounterState {
    value: number
    name: string
    fecha: boolean
}

const initialState: CounterState = {
    value: 0,
    name: 'Mauro',
    fecha: true
}

export const cartaSlice = createSlice({
    name: 'carta',
    initialState,
    reducers: {
        mostrarNombre: (state, { payload }: PayloadAction<string>) => {
            console.log(payload, state.name);

        },
    },
})

export const { mostrarNombre } = cartaSlice.actions

export const selectCarta = (state: RootState) => state.carta

export default cartaSlice.reducer