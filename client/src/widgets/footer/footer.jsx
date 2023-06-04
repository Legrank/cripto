import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="grid grid-cols-2 pt-36 pb-12 px-20">
            <div className="">
                <img src="/img/logo.svg" className="mb-8" />
                <p className="text-neutral5 font-bold">
                    Empower your creativity.
                </p>
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <h5 className="text-neutral7 font-extrabold mb-8">
                        CRYPTER.
                    </h5>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Explorer
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Connect wallet
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Upload
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        How it work
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-neutral7 font-extrabold mb-8">INFO</h5>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Download
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Help center
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Blog
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Jobs
                    </Link>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-neutral7 font-extrabold mb-8">
                        SOCIAL
                    </h5>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Instagram
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Twitter
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Facebook
                    </Link>
                    <Link to="/" className="mb-5 text-neutral5 text-sm">
                        Mirror
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
