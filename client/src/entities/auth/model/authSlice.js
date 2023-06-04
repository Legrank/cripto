import { createAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as localstorageService from '../../../shared/lib/localstorage.service'
import { authService } from '../api/auth.service'

export const signUp = createAsyncThunk(
    'auth/signup',
    async (data, thunkAPI) => {
        try {
            const response = await authService.signUp(data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue()
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await authService.login(username, password)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue()
        }
    }
)
export const logOut = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

const initialState = {
    userID: null,
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authRequestedSuccess: (state, action) => {
            state.userID = action.payload
        },
        authRequestedFiled: (state, action) => {
            state.error = action.payload
        },
        loggedOut: (state) => {
            state.userID = null
        },
    },
})

const { reducer: authReducer } = authSlice

const authRequested = createAction('auth/authRequested')

export default authReducer
