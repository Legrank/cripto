import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    fetchCollectionById,
    selectCollectionById,
} from '../model/collectionSlice'

export const useCollection = (Id) => {
    const dispatch = useDispatch()
    const collection = useSelector((state) => selectCollectionById(state, Id))
    useEffect(() => {
        if (!collection && Id) {
            dispatch(fetchCollectionById(Id))
        }
    }, [collection, Id])
    return collection
}
