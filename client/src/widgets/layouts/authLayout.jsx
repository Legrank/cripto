import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="px-20 h-full pt-32 flex flex-col justify-center">
                    <p className="text-second">
                        We are laying the groundwork for web3 — the next
                        generation of the internet full of limitless
                        possibilities. Join the millions of creators,
                        collectors, and curators who are on this journey with
                        you.
                    </p>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default AuthLayout
