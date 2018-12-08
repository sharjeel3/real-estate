import React from 'react'
import List from '../List/List'
import propertyHelper from '../helper/helper'

const SavedPropery = ({ ...props }) => {
    const { savedProperty } = props
    const items = propertyHelper.getSavedItems(savedProperty)

    return (
        <List
            items={items}
            {...props}
        />
    )
}

export default SavedPropery
