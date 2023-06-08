/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    setTokens,
    removeAuthData,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
} from '../../../shared/lib/localstorage.service'
import { authService } from '../api/auth.service'

const defaultAvatarUrl = `https://avatars.dicebear.com/api/avataaars/${(
    Math.random() + 1
)
    .toString(36)
    .substring(7)}.svg`

export const signUp = createAsyncThunk(
    'auth/signup',
    async (payload, thunkAPI) => {
        try {
            const { data } = await authService.signUp({
                ...payload,
                avatar: defaultAvatarUrl,
            })
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
    removeAuthData()
})

const initialState = {
    accessToken: getAccessToken(),
    exporesIn: getTokenExpiresDate(),
    refreshToken: getRefreshToken(),
    userId: getUserId(),
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

export const isLoggedInSelector = () => (store) =>
    Boolean(store.auth.accessToken)
export const getUserIdSelector = () => (store) => {
    return store.auth?.userId
}

export default authReducer
