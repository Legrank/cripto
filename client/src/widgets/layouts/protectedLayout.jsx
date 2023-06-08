import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedInSelector } from '../../entities/auth/model/authSlice'

const ProtectedLayout = () => {
    const isLoggedIn = useSelector(isLoggedInSelector())
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedLayout
