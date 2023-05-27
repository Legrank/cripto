import { createAction, createSlice } from '@reduxjs/toolkit'

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

const authRequested = createAction('auth/authRequested')
