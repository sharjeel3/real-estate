import React from 'react'
import Card from '../../../style-guide/react/Card/Card'
import ImageBlock from '../../../style-guide/react/ImageBlock/ImageBlock'
import propertyHelper from '../helper/helper'
import styles from './Item.module.scss'

const Item = ({ ...props }) => {
    const { price, mainImage, agency } = props
    const { image, color } = propertyHelper.getAgencyAssets(agency)

    return (
        <Card>
            <div style={{ backgroundColor: color }}>
                <img className={styles.agencyImage} src={image} alt='' />
            </div>
            <ImageBlock image={mainImage} />
            <div className={styles.content}>
                <div className={styles.price}>{price}</div>
            </div>
        </Card>
    )
}

export default Item
