import React from 'react'
import Main from '../../pages/main'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../../pages/auth/login'
import { SingUp } from '../../pages/auth/sungup'
import { AuthLayout, ProtectedLayout } from '../../widgets'
import App from '../App'
import AddItem from '../../pages/collection/addItem'
import { Profile } from '../../pages/profile'
import {
    Collection,
    Collections,
    CreateCollection,
    MyCollection,
    UpdateItem,
} from '../../pages/collection'

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/collections',
                children: [
                    { index: true, element: <Collections /> },
                    { path: ':collection', element: <Collection /> },
                    {
                        element: <ProtectedLayout />,
                        children: [
                            { path: 'create', element: <CreateCollection /> },
                            {
                                path: ':collection/addNFT',
                                element: <AddItem />,
                            },
                            { path: 'my', element: <MyCollection /> },
                            { path: 'update/:nftId', element: <UpdateItem /> },
                        ],
                    },
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
