import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PreviewCollectionCard from '../../features/previewCollectionCard'
import { useSelector } from 'react-redux'
import { selectCollectionById } from '../../entities/collection'
import { useUser } from '../../entities/user'
import config from '../../shared/lib/config.json'
import { Button, SpinnerLoader } from '../../shared/ui'
import { selectNftByIds } from '../../entities/nft/model/nftSlice'

function PreviewCollection({ collectionId }) {
    const collection = useSelector((state) =>
        selectCollectionById(state, collectionId)
    )
    const nfts = useSelector(selectNftByIds(collection.nft || null)).map(
        (nft) => nft.imgUrl
    )
    const owner = useUser(collection.owner)
    const creator = useUser(collection.creator)
    return (
        <div className="w-[448px] px-6 py-10">
            <div
                className="relative mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25  bg-no-repeat bg-cover bg-center h-32 mb-3"
                style={{
                    backgroundImage: `url(${config.API_URL}/${collection?.bgImg})`,
                }}
            >
                <div className="bg-slate-100 bg-opacity-50 p-4 rounded-md">
                    <h3>{collection.name}</h3>
                    <h4>Создатель {creator?.name}</h4>
                    <h4>Владелеть {owner?.name}</h4>
                </div>
            </div>
            <div>
                {nfts.length ? (
                    <PreviewCollectionCard imgsUrls={nfts} />
                ) : (
                    <SpinnerLoader className="w-[400px]" />
                )}
            </div>
            <Link to={`/collections/${collection.id}`}>
                <Button className="mt-4">Изменить коллекцию</Button>
            </Link>
        </div>
    )
}

PreviewCollection.propTypes = {
    collectionId: PropTypes.string,
}

export default PreviewCollection
