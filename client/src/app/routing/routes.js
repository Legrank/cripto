import React from 'react'
import Main from '../../pages/main'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../../pages/auth/login'
import { SingUp } from '../../pages/auth/sungup'
import { AuthLayout, ProtectedLayout } from '../../widgets'
import App from '../App'
import AddItem from '../../pages/collection/addItem'
import { Profile } from '../../pages/profile'
import { Collection, CreateCollection } from '../../pages/collection'

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
                children: [
                    { index: true, element: <Collection /> },
                    { path: 'create', element: <CreateCollection /> },
                    { path: 'addNFT', element: <AddItem /> },
                ],
            },
            {
                element: <ProtectedLayout />,
                children: [
                    {
                        path: '/profile',
                        element: <Profile />,
                    },
                ],
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
                        element: <SingUp />,
                    },
                ],
            },
        ],
    },
])
