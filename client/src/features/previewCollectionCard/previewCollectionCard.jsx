import React from 'react'
import PropTypes from 'prop-types'

import style from './previewCollectionCard.module.css'
import { ImgCard } from '../../shared/ui'
import config from '../../shared/lib/config.json'

function PreviewCollectionCard({ imgsUrls }) {
    const [mainImgUrl, ...imgsUrl] = imgsUrls
    const baseUrl = config.API_URL
    return (
        <div className={style.root}>
            <ImgCard
                imgUrl={`${baseUrl}/${mainImgUrl}`}
                className={style.mainImg}
            />

            {!!imgsUrl.length &&
                imgsUrl.map((imgUrl) => (
                    <ImgCard
                        key={imgUrl}
                        imgUrl={`${baseUrl}/${imgUrl}`}
                        className={style.img}
                    />
                ))}
        </div>
    )
}

PreviewCollectionCard.propTypes = {
    imgsUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PreviewCollectionCard
