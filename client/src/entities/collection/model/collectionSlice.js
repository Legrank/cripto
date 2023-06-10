/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
} from '@reduxjs/toolkit'
import { collectionService } from '../api/collection.service'
import { fetchNftByIds } from '../../nft/model/nftSlice'

export const collectionCreate = createAsyncThunk(
    'collection/create',
    async (payload, thunkAPI) => {
        try {
            const { data } = await collectionService.createCollection(payload)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const fetchMyCollection = createAsyncThunk(
    'collection/mycollection',
    async (payload, thunkAPI) => {
        try {
            const { data } = await collectionService.getMyCollection()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const fetchCollection = createAsyncThunk(
    'collection/collection',
    async (limit, thunkAPI) => {
        try {
            const { data } = await collectionService.getCollection(limit)
            const nftIds = data.reduce((res, collection) => {
                res = [...res, ...collection.nft]
                return res
            }, [])
            thunkAPI.dispatch(fetchNftByIds(nftIds))
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const fetchCollectionById = createAsyncThunk(
    'collection/byId',
    async (id, thunkAPI) => {
        try {
            const { data } = await collectionService.getCollectionById(id)
            thunkAPI.dispatch(fetchNftByIds(data.nft))
            return data
        } catch (error) {
            console.log('error', error)
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)

const collectionAdapter = createEntityAdapter()

const initialState = collectionAdapter.getInitialState()
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(collectionCreate.fulfilled, collectionAdapter.addOne)
            .addCase(fetchMyCollection.fulfilled, collectionAdapter.upsertMany)
            .addCase(fetchCollection.fulfilled, collectionAdapter.upsertMany)
            .addCase(fetchCollectionById.fulfilled, collectionAdapter.upsertOne)
    },
})

const { reducer: collectionReducer } = collectionSlice

export const {
    selectAll: selectAllCollection,
    selectById: selectCollectionById,
    selectIds: selectCollectionIds,
} = collectionAdapter.getSelectors((state) => state.collection)

export const getMyCollection = createSelector(
    [selectAllCollection, (state, userId) => userId],
    (collection, userId) =>
        collection
            .filter((item) => item.owner === userId)
            .map((item) => item.id)
)

export default collectionReducer
