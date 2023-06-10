/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { userService } from '../api/user.service'

export const fetchTopTotalsale = createAsyncThunk(
    'user/totalsale',
    async (payload, thunkAPI) => {
        try {
            const { data } = await userService.getTopUserToatalsale(payload)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    },
    {
        condition: (_, { getState }) => {
            const lastUpdate = getState().user?.lastUpdate
            const time = Date.now()
            if (time < lastUpdate + 5 * 60 * 1000) {
                return false
            }
        },
    }
)
export const fetchUserById = createAsyncThunk(
    'user/byId',
    async (payload, thunkAPI) => {
        const { userId, auth } = payload
        try {
            const { data } = await userService.getUserById(userId, auth)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)

const userAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.totalsale >= a.totalsale,
})

const initialState = userAdapter.getInitialState({
    lastUpdate: 0,
})
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchTopTotalsale.fulfilled, (state, action) => {
                state.lastUpdate = Date.now()
                userAdapter.upsertMany(state, action.payload)
            })
            .addCase(fetchUserById.fulfilled, userAdapter.upsertOne)
    },
})

const { reducer: userReducer } = userSlice

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = userAdapter.getSelectors((state) => state.user)

export const getTopSeller = () => (state) => {
    return Object.values(state.user.entities)
        .sort((a, b) => b.totalsale >= a.totalsale)
        .splice(0, 4)
}

export default userReducer
