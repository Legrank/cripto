import React from 'react'
import styles from './styles/header.module.scss'

function Header() {
    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <img src="/img/logo.svg" />
            </div>
            <nav className={styles.nav}></nav>
        </div>
    )
}

export default Header
