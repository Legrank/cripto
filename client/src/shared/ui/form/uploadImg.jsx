import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

function UploadImg({
    value = '',
    label,
    name,
    error,
    onChange,
    className,
    ...rest
}) {
    const [dragActive, setDragActive] = useState(false)
    const [imgUrl, setImgUrl] = useState(false)
    const imgToUrl = (img) => {
        const reader = new FileReader()
        reader.addEventListener(
            'load',
            () => {
                setImgUrl(reader.result)
            },
            { once: true }
        )
        reader.readAsDataURL(img)
    }

    const handleDrag = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = function (e) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            imgToUrl(e.dataTransfer.files[0])
            // onChange(e.dataTransfer.files[0])
        }
    }

    const handleChange = function (e) {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            imgToUrl(e.target.files[0])
            // onChange(e.target.files[0])
        }
    }
    return (
        <div
            className="relative mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-no-repeat bg-cover bg-center h-96"
            onDragEnter={handleDrag}
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="text-center flex flex-col justify-center">
                <svg
                    className={cn('mx-auto h-12 w-12 text-gray-300', {
                        invisible: imgUrl,
                    })}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                    />
                </svg>

                <div className="bg-slate-50/80 rounded-lg p-1">
                    <div className="flex text-sm leading-6 text-gray-600 ">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleChange}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                    </p>
                </div>
            </div>
            {dragActive && (
                <div
                    className="absolute inset-0 rounded-lg"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                ></div>
            )}
        </div>
    )
}

UploadImg.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

export default UploadImg
