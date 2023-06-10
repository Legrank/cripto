import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './гserPreviewCard.module.scss'
import { Avatar } from '../../entities'
import { SpinnerLoader } from '../../shared/ui'

function UserPreviewCard({ position = 'left', user }) {
    if (!user) {
        return <SpinnerLoader className="w-1/2" />
    }
    const { avatar, name, totalsale } = user
    const className =
        'flex justify-center items-center w-1/2 flex-col border border-[e1e2e3]'
    return (
        <div
            className={cn(className, {
                [styles.left]: position === 'left',
                [styles.right]: position === 'right',
            })}
        >
            <Avatar classNames="mb-8 w-24 h-24" avatarUrl={avatar} />
            <p className="text-2xl">{name}</p>
            <p className="text-base">
                <span className="text-second">Total sale</span>
                <span className="text-neutral7">{totalsale} ETH</span>
            </p>
        </div>
    )
}

UserPreviewCard.propTypes = {
    position: PropTypes.string,
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default UserPreviewCard
