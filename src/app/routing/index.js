import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export default function Routing() {
    return <RouterProvider router={router} />
}
