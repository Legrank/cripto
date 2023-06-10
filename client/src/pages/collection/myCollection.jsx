import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PreviewCollection } from '../../widgets'
import { getUserIdSelector } from '../../entities/auth/model/authSlice'
import { fetchMyCollection, getMyCollection } from '../../entities/collection'

function MyCollection() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMyCollection())
    }, [])
    const userId = useSelector(getUserIdSelector())
    const collection = useSelector((state) => getMyCollection(state, userId))
    return (
        <div>
            {collection.map((id) => (
                <PreviewCollection collectionId={id} key={id} />
            ))}
        </div>
    )
}

export default MyCollection
