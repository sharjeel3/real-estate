import React from 'react'
import Card from '../../../style-guide/react/Card/Card'

const Item = ({ ...props }) => {
    const { price } = props
    return (
        <Card>
            {price}
        </Card>
    )
}

export default Item
