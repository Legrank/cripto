import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/fullPriceItem.module.scss'
import { Circle } from '../../shared/ui'

function FullPriceItem({ label, text }) {
    return (
        <div>
            <p className={styles.label}>{label}</p>
            <div className={styles.textContainer}>
                <Circle /> <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

FullPriceItem.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default FullPriceItem
