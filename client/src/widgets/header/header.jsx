import React from 'react'
import { Button } from '../../shared/ui'
import { Link, NavLink } from 'react-router-dom'
import { Menu as ProfileMenu } from '../profile'
import { useSelector } from 'react-redux'
import { isLoggedInSelector } from '../../entities/auth/model/authSlice'

function Header() {
    const isLoggedIn = useSelector(isLoggedInSelector())
    return (
        <div className="flex justify-between my-12">
            <div className="">
                <Link to="/">
                    <img src="/img/logo.svg" />
                </Link>
            </div>
            <nav className="flex">
                <Button border={false} className="text-2xl">
                    <NavLink to="/collection">КОЛЛЕКЦИИ</NavLink>
                </Button>
                <Button border={false} className="text-2xl">
                    FEED
                </Button>

                {isLoggedIn ? (
                    <ProfileMenu />
                ) : (
                    <NavLink to="/login" end>
                        {({ isActive }) => (
                            <Button border={isActive}> Войти </Button>
                        )}
                    </NavLink>
                )}
            </nav>
        </div>
    )
}

export default Header
