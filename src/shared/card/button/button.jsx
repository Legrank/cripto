import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './styles/button.module.scss'

function Button({ size = 'small', children, border = true, className }) {
    return (
        <button
            className={cn(
                styles[size],
                {
                    [styles.border]: border,
                },
                className
            )}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    size: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf([PropTypes.node]),
    ]).isRequired,
    border: PropTypes.bool,
    className: PropTypes.string,
}

export default Button
