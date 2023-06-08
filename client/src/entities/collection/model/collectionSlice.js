/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { collectionService } from '../api/collection.service'

export const collectionCreate = createAsyncThunk(
    'collection/create',
    async (payload, thunkAPI) => {
        try {
            const { data } = await collectionService.createCollection(payload)
            console.log('data', data)
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

const collectionAdapter = createEntityAdapter()

const initialState = collectionAdapter.getInitialState()
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    extraReducers(builder) {
        builder.addCase(collectionCreate.fulfilled, collectionAdapter.addOne)
    },
})

const { reducer: collectionReducer } = collectionSlice

export const {
    selectAll: selectAllCollection,
    selectById: selectCollectionById,
    selectIds: selectCollectionIds,
} = collectionAdapter.getSelectors((state) => state.collection)

export default collectionReducer
