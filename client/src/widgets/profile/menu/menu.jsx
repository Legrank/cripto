import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles/menu.module.scss'
import { CloseButton, SmallArrow } from '../../../shared/ui'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../entities'
import { useLogout } from '../../../features/hooks'
import { useSelector } from 'react-redux'
import { getUserIdSelector } from '../../../entities/auth'
import { useUser } from '../../../entities/user'

function Menu() {
    const [openMenu, setOpenMenu] = useState(false)
    const logOut = useLogout()
    const handleLogOut = () => {
        setOpenMenu(false)
        logOut()
    }
    const userId = useSelector(getUserIdSelector())
    const user = useUser(userId)
    return (
        <div
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
        >
            <div className={styles.menu}>
                <Avatar classNames="w-12 h-12" avatarUrl={user?.avatar} />
                <nav
                    className={cn(styles.list, {
                        [styles.listhover]: openMenu,
                    })}
                >
                    <div className="flex items-center pb-6 border-b-2 border-b-neutral7">
                        <Avatar
                            classNames="w-20 h-20"
                            avatarUrl={user?.avatar}
                        />
                        <div>
                            <p className="text-neutral1 text-2xl">
                                {user?.name}
                            </p>
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
                                to="/collections/my"
                                onClick={() => setOpenMenu(false)}
                            >
                                <p className="text-neutral4">Мои коллекции</p>
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
