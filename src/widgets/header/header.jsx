import React from 'react'
import Button from '../../shared/card/button/button'
import styles from './styles/header.module.scss'

function Header() {
    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <img src="/img/logo.svg" />
            </div>
            <nav className={styles.nav}>
                <Button border={false}>DISCOVER</Button>
                <Button border={false}>FEED</Button>
                <Button>CONNECT WALLET</Button>
            </nav>
        </div>
    )
}

export default Header
