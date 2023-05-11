import React from 'react'
import cn from 'classnames'

import PreviewCollectionCard from '../../features/previewCollectionCard/previewCollectionCard'
import styles from './main.module.scss'
import Section from '../../shared/section'
import Button from '../../shared/button'
import ArrowButton from '../../shared/arrowButton'
import Circle from '../../shared/circle'
import { FullPriceView } from '../../widgets/fullPriceView'
import { SmallArrow, SmallArrowButton } from '../../shared/ui'
import { UserPreviewCard } from '../../widgets/userPreviewCard'

const mockImgUrl = ['/img/frame73.jpg', '/img/frame79.jpg', '/img/frame80.jpg']
const mockMainImgUrl = '/img/frame73.jpg'

export default function Main() {
    return (
        <div>
            <Section>
                <div className={styles.heading}>
                    <h1 className={styles.h1}>Curated Artwork.</h1>
                    <ArrowButton className={styles.arrow} />
                </div>
                <div className={styles.search}>
                    <p className={styles.searchText}>
                        We are laying the groundwork for web3 — the next
                        generation of the internet full of limitless
                        possibilities.
                    </p>
                    <Button border={false}>
                        <p>{'start your search'.toUpperCase()}</p>
                        <Circle />
                    </Button>
                </div>

                <div className={styles.bgimg}></div>
                <div className={styles.creatorNetwork}>
                    <FullPriceView />
                    <div>
                        <h2 className={cn(styles.h2, 'mb-10')}>
                            The creator network.
                        </h2>
                        <div className="flex gap-3">
                            <Button>
                                <p>VIEW NFT</p> <SmallArrow />
                            </Button>
                            <Button className="text-white bg-black border-black">
                                PLICE A BID
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="px-20 min-h-[1200px] pt-32 flex flex-col justify-between">
                    <div className="flex">
                        <h2 className={styles.h2}>
                            Hot NFT artists of the month.
                        </h2>
                        <SmallArrowButton />
                    </div>
                    <p className="text-second">
                        We are laying the groundwork for web3 — the next
                        generation of the internet full of limitless
                        possibilities. Join the millions of creators,
                        collectors, and curators who are on this journey with
                        you.
                    </p>
                    <div></div>
                </div>
                <div className="flex flex-wrap">
                    {Array(8)
                        .fill(0)
                        .map((_, i) => (
                            <UserPreviewCard
                                key={i}
                                position={i % 2 ? 'right' : 'left'}
                            />
                        ))}
                </div>
            </Section>
            <PreviewCollectionCard
                mainImgUrl={mockMainImgUrl}
                imgsUrl={mockImgUrl}
            />
        </div>
    )
}
