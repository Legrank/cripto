import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Avatar } from '../../entities'

function Plank({ styleImg = 'circle', text }) {
    return (
        <div className="rounded-xl bg-neutral7 p-3 flex text-neutral1 justify-center items-center gap-4">
            <Avatar
                classNames={cn('w-10', 'h10', {
                    'rounded-lg': styleImg === 'rectangle',
                })}
            />{' '}
            <p>{text}</p>
        </div>
    )
}

Plank.propTypes = {
    text: PropTypes.string,
    styleImg: PropTypes.string,
    className: PropTypes.string,
}

export default Plank
