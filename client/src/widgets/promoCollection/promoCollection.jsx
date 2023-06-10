import React, { useEffect } from 'react'
import {
    ArrowButton,
    Button,
    Circle,
    ImgCard,
    SmallArrow,
} from '../../shared/ui'
import { FullPriceView } from '../fullPriceView'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchCollection,
    selectCollectionIds,
    useCollection,
} from '../../entities/collection'
import config from '../../shared/lib/config.json'
import { Link } from 'react-router-dom'

function PromoCollection() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCollection(1))
    }, [])
    const collectionIds = useSelector(selectCollectionIds)
    const collection = useCollection(collectionIds[0])
    const baseUrl = config.API_URL
    return (
        <>
            <div className="flex px-20 py-10">
                <h1 className="flex-1 text-8xl font-extrabold ">
                    Curated Artwork.
                </h1>
                <ArrowButton className="mt-4" />
            </div>
            <div className="flex flex-col px-20 py-10 justify-between items-start">
                <p></p>
                <p className="pl-8 text-neutral5">
                    We are laying the groundwork for web3 — the next generation
                    of the internet full of limitless possibilities.
                </p>
                <Button border={false}>
                    <p>{'start your search'.toUpperCase()}</p>
                    <Circle />
                </Button>
            </div>

            <div className="h-[800px]">
                {collection && (
                    <ImgCard
                        imgUrl={`${baseUrl}/${collection.bgImg}`}
                        className="h-[800px]"
                    />
                )}
            </div>
            <div className="p-20 flex flex-col justify-between bg-[#DBFF73]">
                <FullPriceView name={collection?.name} />
                <div>
                    <h2 className="text-7xl font-extrabold mb-10">
                        The creator network.
                    </h2>
                    <div className="flex gap-3">
                        <Link to={`/collections/${collection?.id}`}>
                            <Button>
                                <p>VIEW NFT</p> <SmallArrow />
                            </Button>
                        </Link>
                        <Button className="text-white bg-black border-black">
                            PLICE A BID
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromoCollection
