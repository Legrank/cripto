import React, { useEffect } from 'react'
import { PreviewCollection } from '../../widgets'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCollection, selectCollectionIds } from '../../entities/collection'

function Collections() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCollection(5))
    })
    const collectionIds = useSelector(selectCollectionIds)
    return (
        <div className="flex">
            {collectionIds.map((collectionId) => (
                <PreviewCollection
                    collectionId={collectionId}
                    key={collectionId}
                />
            ))}
        </div>
    )
}

export default Collections
