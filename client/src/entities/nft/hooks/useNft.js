import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchNftByIds, selectNftById } from '../model/nftSlice'

export const useNft = (Id) => {
    const dispatch = useDispatch()
    const nft = useSelector((state) => selectNftById(state, Id))

    useEffect(() => {
        if (!nft && Id) {
            dispatch(fetchNftByIds([Id]))
        }
    }, [nft, Id])
    return nft
}
