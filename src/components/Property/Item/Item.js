import React from 'react'
import Card from '../../../style-guide/react/Card/Card'
import ImageBlock from '../../../style-guide/react/ImageBlock/ImageBlock'

const Item = ({ ...props }) => {
    const { price, mainImage } = props
    return (
        <Card>
            <ImageBlock image={mainImage} />
            {price}
        </Card>
    )
}

export default Item
