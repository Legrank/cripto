import React from 'react'
import { Button } from '../../shared/ui'
import { NavLink } from 'react-router-dom'
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

                <NavLink to={'/sungup'}>
                    <Button> CONNECT WALLET </Button>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
