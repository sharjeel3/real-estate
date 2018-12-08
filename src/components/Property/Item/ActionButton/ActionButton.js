import React  from 'react'
import propertyHelper from '../../helper/helper'
import Button from '../../../../style-guide/react/Button/Button'
import { CONSTANTS } from '../../../../global'

const ActionButton = ({ ...props }) => {
    const { item, onClick, savedProperty, action } = props
    const isSaved = propertyHelper.getIsSaved(item.id, savedProperty)
    const isAddAction = action === CONSTANTS.ADD
    const actionText = isAddAction ? 'Add' : 'Remove'
    const buttonText = isSaved && isAddAction ? 'Saved...' : `${actionText} Property`
    const buttonDisabled = isSaved === true && isAddAction
    const handleClick = typeof onClick === 'function' ? onClick(action, item) : null

    return (
        <Button disabled={buttonDisabled} onClick={handleClick}>
            {buttonText}
        </Button>
    )
}

export default ActionButton
