import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/Section.module.scss'

function Section({ children }) {
    return <div className={styles.root}>{children}</div>
}

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
}

export default Section
