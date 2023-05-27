import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './гserPreviewCard.module.scss'
import { Avatar } from '../../entities'

function UserPreviewCard({ position = 'left', isActive }) {
    const className =
        'flex justify-center items-center w-1/2 flex-col border border-[e1e2e3]'
    return (
        <div
            className={cn(className, {
                [styles.left]: position === 'left',
                [styles.right]: position === 'right',
            })}
        >
            <Avatar classNames="mb-8 w-24 h-24" />
            <p className="text-2xl">User tag</p>
            <p className="text-base">
                <span className="text-second">Total sale</span>
            </p>
        </div>
    )
}

UserPreviewCard.propTypes = {
    position: PropTypes.string,
    isActive: PropTypes.bool,
}

export default UserPreviewCard
