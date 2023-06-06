import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

function TextField({
    value = '',
    label,
    name,
    type = 'text',
    error,
    onChange,
    className,
    ...rest
}) {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    const toggleShowPassword = () => setShowPassword((prev) => !prev)
    const [showPassword, setShowPassword] = useState(false)
    const getInputClasses = () =>
        'block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' +
        (error ? ' border-red-700' : '')
    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="">
                <input
                    type={showPassword ? 'text' : type}
                    className={getInputClasses()}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...rest}
                />
                {type === 'password' && (
                    <button
                        className=""
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                'bi bi-eye' + (showPassword ? '-slash' : '')
                            }
                        ></i>
                    </button>
                )}
                <div
                    className={cn('text-red-700 text-sm min-h-[40px]', {
                        invisible: !error,
                    })}
                >
                    {error}
                </div>
            </div>
        </div>
    )
}

TextField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

export default React.memo(TextField)
