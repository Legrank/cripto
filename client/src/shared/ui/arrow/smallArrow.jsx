import React from 'react'

function SmallArrow(props) {
    return (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="14" width="28" height="8" rx="4" fill="currentColor" />
            <path
                d="M18 4L33 18L18 33"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SmallArrow
