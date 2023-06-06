import React from 'react'
import Main from '../../pages/main'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../../pages/auth/login'
import { SungUp } from '../../pages/auth/sungup'
import { AuthLayout } from '../../widgets'
import App from '../App'
import AddItem from '../../pages/collection/addItem'

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/collection',
                element: <AddItem />,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: '/login',
                        element: <Login />,
                    },
                    {
                        path: '/sungup',
                        element: <SungUp />,
                    },
                ],
            },
        ],
    },
])
