import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/fullPriceView.module.scss'
import FullPriceItem from '../../entities/fullPriceItem'

function FullPriceView({ name }) {
    return (
        <div className={styles.root}>
            <FullPriceItem label="Collection" text={name || ''} />
            <FullPriceItem label="Buy now" text="10.00 ETH" />
            <FullPriceItem label="Reserve" text="2.38 ETH" />
        </div>
    )
}

FullPriceView.propTypes = {
    name: PropTypes.string,
}

export { FullPriceView }
