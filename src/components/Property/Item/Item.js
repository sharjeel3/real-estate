import React, { Component } from 'react'
import Card from '../../../style-guide/react/Card/Card'
import ImageBlock from '../../../style-guide/react/ImageBlock/ImageBlock'
import propertyHelper from '../helper/helper'
import styles from './Item.module.scss'
import Button from '../../../style-guide/react/Button/Button'
import classnames from 'classnames'
import { CONSTANTS } from '../../../global'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
    handleMouseEnter = () => {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            hover: false
        })
    }

    render() {
        const { item, onClick, savedProperty, action } = this.props
        if (!item) {
            return ''
        }

        const { price, mainImage, agency, id } = item
        const { image, color } = propertyHelper.getAgencyAssets(agency)
        const { hover } = this.state
        const isSaved = propertyHelper.getIsSaved(id, savedProperty)
        const actionText = action === CONSTANTS.ADD ? 'Add' : 'Remove'
        const buttonText = isSaved ? 'Saved...' : `${actionText} Property`
        const buttonDisabled = isSaved ? true : false
        const handleClick = typeof onClick === 'function' ? onClick(action, item) : null

        return (
            <Card
                className={styles.root}
                onMouseLeave={this.handleMouseLeave}
                onMouseEnter={this.handleMouseEnter}>
                <div style={{ backgroundColor: color }}>
                    <img className={styles.agencyImage} src={image} alt='' />
                </div>
                <ImageBlock image={mainImage} />
                <div className={styles.content}>
                    <div className={styles.price}>{price}</div>
                </div>
                <div className={classnames(styles.overlay, {
                    [styles.overlay_isVisible]: hover === true && action
                })}>
                    <Button disabled={buttonDisabled} onClick={handleClick}>
                        {buttonText}
                    </Button>
                </div>
            </Card>
        )
    }
}

export default Item
