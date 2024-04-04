import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import auhReducer from './slices/auth-slice';


export const store = configureStore({
    reducer: {
        // auth: authSlice.reducer
        auth: auhReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>


