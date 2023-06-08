import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles/menu.module.scss'
import { CloseButton, SmallArrow } from '../../../shared/ui'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../entities'
import { useLogout } from '../../../features/hooks'

function Menu() {
    const [openMenu, setOpenMenu] = useState(false)
    const logOut = useLogout()
    const handleLogOut = () => {
        setOpenMenu(false)
        logOut()
    }
    return (
        <div
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
        >
            <div className={styles.menu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <nav
                    className={cn(styles.list, {
                        [styles.listhover]: openMenu,
                    })}
                >
                    <div className="flex items-center pb-6 border-b-2 border-b-neutral7">
                        <Avatar classNames="w-20 h-20" />
                        <div>
                            <p className="text-neutral1 text-2xl">Имя</p>
                            <p className="text-neutral5 text-sm">Тег</p>
                        </div>
                    </div>
                    <ul>
                        <li className="text-neutral4">
                            <Link
                                className="flex justify-between text-neutral5 hover:text-neutral1 py-6 border-b-2 border-b-neutral7"
                                to="/profile"
                                onClick={() => setOpenMenu(false)}
                            >
                                <p className="text-neutral4">Профиль</p>
                                <SmallArrow />
                            </Link>
                        </li>
                        <li className="text-neutral4">
                            <Link
                                className="flex justify-between text-neutral5 hover:text-neutral1 py-6 border-b-2 border-b-neutral7"
                                to="#"
                            >
                                <p className="text-neutral4">Настройки</p>
                                <SmallArrow />
                            </Link>
                        </li>
                        <li
                            className="flex justify-between text-neutral5 hover:text-neutral1 pt-6 cursor-pointer"
                            onClick={handleLogOut}
                        >
                            <p className="text-neutral4">Выход</p>
                            <SmallArrow />
                        </li>
                    </ul>
                    <CloseButton
                        className="absolute top-6 right-6 text-neutral5 hover:text-neutral1"
                        onClick={() => setOpenMenu(false)}
                    />
                </nav>
            </div>
        </div>
    )
}

export default Menu
