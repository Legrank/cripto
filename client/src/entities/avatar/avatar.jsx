import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const defaultAvatarUrl = `https://avatars.dicebear.com/api/avataaars/${(
    Math.random() + 1
)
    .toString(36)
    .substring(7)}.svg`

function Avatar({ avatarUrl = defaultAvatarUrl, classNames }) {
    return (
        <img
            src={avatarUrl}
            alt="user avatar"
            className={cn('rounded-full', classNames)}
        />
    )
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string,
    classNames: PropTypes.string,
}

export default Avatar
