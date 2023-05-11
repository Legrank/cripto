import React from 'react'
import styles from './styles/fullPriceView.module.scss'
import FullPriceItem from '../../entities/fullPriceItem'

export function FullPriceView() {
    return (
        <div className={styles.root}>
            <FullPriceItem label="Collection" text="Escape II" />
            <FullPriceItem label="Buy now" text="10.00 ETH" />
            <FullPriceItem label="Reserve" text="2.38 ETH" />
        </div>
    )
}
