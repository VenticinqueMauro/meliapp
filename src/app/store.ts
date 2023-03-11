import { configureStore } from '@reduxjs/toolkit';
import cartaReducer from '@/features/menuDigital/cartaSlice';

export const store = configureStore({
    reducer: {
        carta: cartaReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
