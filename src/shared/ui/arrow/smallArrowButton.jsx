import React from 'react'
import styles from './styles/smallArrowButton.module.scss'
import { SmallArrow } from '../index'

function SmallArrowButton() {
    return (
        <div className={styles.root}>
            <SmallArrow />
        </div>
    )
}

export default SmallArrowButton
