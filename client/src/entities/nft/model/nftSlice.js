/* eslint-disable no-unused-vars */
import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { nftService } from '../api/nft.service'

export const nftCreate = createAsyncThunk(
    'nft/create',
    async (payload, thunkAPI) => {
        try {
            const { data } = await nftService.createNFT(payload)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const fetchNftByIds = createAsyncThunk(
    'nft/biIds',
    async (nftIds, thunkAPI) => {
        try {
            const { data } = await nftService.getNftByIds(nftIds)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const nftUpdate = createAsyncThunk(
    'nft/update',
    async (payload, thunkAPI) => {
        try {
            const { data } = await nftService.updateNft(payload)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)
export const nftDelete = createAsyncThunk(
    'nft/delete',
    async (payload, thunkAPI) => {
        try {
            const { data } = await nftService.deleteNft(payload)
            return data.id
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }
    }
)

const nftAdapter = createEntityAdapter()

const initialState = nftAdapter.getInitialState()
const collectionSlice = createSlice({
    name: 'nft',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(nftCreate.fulfilled, nftAdapter.addOne)
            .addCase(fetchNftByIds.fulfilled, nftAdapter.upsertMany)
            .addCase(nftUpdate.fulfilled, nftAdapter.upsertOne)
            .addCase(nftDelete.fulfilled, nftAdapter.removeOne)
    },
})

const { reducer: nftReducer } = collectionSlice

export const {
    selectAll: selectAllNft,
    selectById: selectNftById,
    selectIds: selectNftIds,
} = nftAdapter.getSelectors((state) => state.nft)

export const selectNftByIds = (ids) => (store) => {
    if (!ids) return []
    return ids.reduce((res, id) => {
        if (!store.nft.entities[id]) return res
        res = [...res, store.nft.entities[id]]
        return res
    }, [])
}

export default nftReducer
