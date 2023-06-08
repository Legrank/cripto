/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { userService } from '../api/user.service'

export const getTopTotalsale = createAsyncThunk(
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
                console.log(time < lastUpdate + 5 * 60 * 1000)
                return false
            }
        },
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
        builder.addCase(getTopTotalsale.fulfilled, (state, action) => {
            state.lastUpdate = Date.now()
            userAdapter.upsertMany(state, action.payload)
        })
    },
})

const { reducer: userReducer } = userSlice

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = userAdapter.getSelectors((state) => state.user)

export default userReducer
