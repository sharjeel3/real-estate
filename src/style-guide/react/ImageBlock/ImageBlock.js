import React from 'react'
import styles from './ImageBlock.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ImageBlock = ({ ...props }) => {
    const { className, aspectRatio = '75%', image, children } = props
    const style = {
        backgroundImage: image ? `url(${image})` : `none`,
        paddingTop: aspectRatio
    }

    return (
        <div style={style} className={classnames(styles.root, {
            [className]: className
        })}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

ImageBlock.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    aspectRatio: PropTypes.string,
    image: PropTypes.string,
}

export default ImageBlock
