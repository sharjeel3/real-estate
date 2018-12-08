import React from 'react'
import Item from '../Item/Item'

const List = ({ ...props }) => {
    const { items, ...restProps } = props
    if (!items || !items.length) {
        return ''
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <Item key={item.id} {...restProps} item={item} />
                )
            })}
        </div>
    )
}

export default List
