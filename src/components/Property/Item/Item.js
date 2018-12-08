import React, { Component } from 'react'
import Card from '../../../style-guide/react/Card/Card'
import ImageBlock from '../../../style-guide/react/ImageBlock/ImageBlock'
import propertyHelper from '../helper/helper'
import styles from './Item.module.scss'
import Button from '../../../style-guide/react/Button/Button'
import classnames from 'classnames'

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
        const { item, onClick } = this.props
        if (!item) {
            return ''
        }

        const { price, mainImage, agency } = item
        const { image, color } = propertyHelper.getAgencyAssets(agency)
        const { hover } = this.state

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
                    [styles.overlay_isVisible]: hover
                })}>
                    <Button>
                        Add Property
                    </Button>
                </div>
            </Card>
        )
    }
}

export default Item
