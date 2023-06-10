import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isLoggedInSelector } from '../../entities/auth/model/authSlice'

const ProtectedLayout = () => {
    const isLoggedIn = useSelector(isLoggedInSelector())
    const location = useLocation()
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ referrer: location }} />
    }

    return <Outlet />
}

export default ProtectedLayout
