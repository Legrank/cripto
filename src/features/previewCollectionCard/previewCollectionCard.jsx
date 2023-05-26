import React from 'react'
import PropTypes from 'prop-types'

import style from './previewCollectionCard.module.css'
import { ImgCard } from '../../shared/ui'

function PreviewCollectionCard({ mainImgUrl, imgsUrl }) {
    return (
        <div className={style.root}>
            <ImgCard imgUrl={mainImgUrl} className={style.mainImg} />

            {imgsUrl.map((imgUrl) => (
                <ImgCard key={imgUrl} imgUrl={imgUrl} className={style.img} />
            ))}
        </div>
    )
}

PreviewCollectionCard.propTypes = {
    mainImgUrl: PropTypes.string.isRequired,
    imgsUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PreviewCollectionCard
