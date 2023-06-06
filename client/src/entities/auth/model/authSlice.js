import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setTokens } from '../../../shared/lib/localstorage.service'
import { authService } from '../api/auth.service'

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, thunkAPI) => {
        try {
            const { data } = await authService.signUp(payload)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (payload, thunkAPI) => {
        try {
            const { data } = await authService.login(payload)
            setTokens(data)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const logOut = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

const initialState = {
    accessToken: null,
    exporesIn: null,
    refreshToken: null,
    userId: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            return { ...state, ...action.payload }
        },
        [signUp.rejected]: (state) => {},
        [login.fulfilled]: (state, action) => {
            return { ...state, ...action.payload }
        },
        [login.rejected]: (state) => {},
        [logOut.fulfilled]: (state) => {
            state.accessToken = null
            state.exporesIn = null
            state.refreshToken = null
            state.userId = null
        },
    },
})

const { reducer: authReducer } = authSlice

export const getIsLogIn = () => (state) => state.users.isLoggedIn

export default authReducer
