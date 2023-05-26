import React from 'react'
import Main from '../../pages/main'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
])
