import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './styles/arrowButton.module.scss'

function ArrowButton({ className }) {
    return (
        <button className={cn(styles.root, className)}>
            <img src="/img/icon/Arrow.svg" />
        </button>
    )
}

ArrowButton.propTypes = {
    className: PropTypes.string,
}

export default ArrowButton
