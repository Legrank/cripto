import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import style from './card.module.css'

function ImgCard({ imgUrl, className }) {
    return (
        <div className={cn(style.root, className)}>
            <img src={imgUrl} className={style.img} />
        </div>
    )
}

ImgCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default ImgCard
