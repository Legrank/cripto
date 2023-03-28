import React from 'react'
import PreviewCollectionCard from '../../features/previewCollectionCard/previewCollectionCard'
import Header from '../../widgets/header'
import styles from './main.module.scss'

const mockImgUrl = ['/img/frame73.jpg', '/img/frame79.jpg', '/img/frame80.jpg']
const mockMainImgUrl = '/img/frame73.jpg'

export default function Main() {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <Header />
                <PreviewCollectionCard
                    mainImgUrl={mockMainImgUrl}
                    imgsUrl={mockImgUrl}
                />
            </div>
        </div>
    )
}
