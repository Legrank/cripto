import React from 'react'
import cn from 'classnames'

import styles from './main.module.scss'
import { FullPriceView } from '../../widgets/fullPriceView'
import {
    SmallArrow,
    SmallArrowButton,
    ArrowButton,
    Circle,
    Section,
    Button,
} from '../../shared/ui'
import { Plank } from '../../features/plank'
import { TotalSaleUserRaiting, UserPreviewCard } from '../../widgets'
import { PromoCollection } from '../../widgets/promoCollection'

export default function Main() {
    return (
        <div>
            <Section>
                <PromoCollection />

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
                <TotalSaleUserRaiting Card={UserPreviewCard} />
            </Section>
            <div className="flex min-h-[1000px] bg-neutral8 p-20">
                <div className="flex flex-col  justify-center w-[40%]">
                    <div className="flex gap-4 mb-6">
                        <Plank text={'@randomdash'} />
                        <Plank text={'Escape'} styleImg="rectangle" />
                    </div>
                    <h2 className={styles.h2 + ' text-neutral1 mb-28'}>
                        Beyond the Dream.
                    </h2>
                    <p className="text-neutral4 mb-3">Buy now price</p>
                    <div className="flex mb-2">
                        <p className="text-5xl text-neutral1 mr-14 whitespace-nowrap">
                            8.00 ETH
                        </p>
                        <Button className={'mr-5 min-w-[160px] text-neutral1'}>
                            VIEW NFT
                        </Button>
                        <Button className={'bg-neutral1 text-neutral7'}>
                            MAKE OFFER
                        </Button>
                    </div>
                    <p className="text-neutral4 mb-3">$24,635.39</p>
                </div>
                <div className="flex justify-center items-center grow">
                    <div
                        className="h-[700px] w-[700px] bg-no-repeat bg-contain "
                        style={{
                            backgroundImage: 'url(/img/bg/circles.jpg)',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
