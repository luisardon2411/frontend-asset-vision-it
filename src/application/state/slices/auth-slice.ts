import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface AuthState {
    isAuthenticated: boolean;
    username: string;
    name: string;
    lastName: string;
}


const initialState: AuthState = {
    isAuthenticated: false,
    username: '',
    name: '',
    lastName: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string;  }>) {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            
        },
        logout(state) {
            state.isAuthenticated = false;
            state.username = '';
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// Path: src/application/state/store.ts

export const loginAsync = ( credentials: { username: string; password: string } ): AppThunk => async (
    dispatch
) => {
    dispatch(login({ username: credentials.username }));
}