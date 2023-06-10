import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, ImgCard, SpinnerLoader } from '../../shared/ui'
import { useCollection } from '../../entities/collection'
import { useDispatch, useSelector } from 'react-redux'
import { nftDelete, selectNftByIds } from '../../entities/nft'
import { useUser } from '../../entities/user'
import config from '../../shared/lib/config.json'

function Collection() {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(nftDelete(id))
    }
    const { collection: collectionId } = useParams()
    const collection = useCollection(collectionId)
    const nfts = useSelector(selectNftByIds(collection?.nft || []))
    const owner = useUser(collection?.owner)
    const creator = useUser(collection?.creator)
    if (!collection) return <SpinnerLoader className="w-[400px]" />
    return (
        <div className=" px-6 py-10">
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
            <div className="flex justify-center items-center">
                {nfts.length ? (
                    nfts.map((nft) => (
                        <div className="w-1/3 px-4" key={nft.id}>
                            <ImgCard
                                imgUrl={`${config.API_URL}/${nft.imgUrl}`}
                            />
                            <div className="flex justify-between px-4 pt-4">
                                <Link to={`../update/${nft.id}`}>
                                    <Button>Изменить</Button>
                                </Link>

                                <Button
                                    onClick={() => {
                                        handleDelete(nft.id)
                                    }}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <SpinnerLoader className="w-[400px]" />
                )}
                <Link className="w-1/3 flex justify-center" to="addNFT">
                    <Button>Добавить</Button>
                </Link>
            </div>
        </div>
    )
}

export default Collection
