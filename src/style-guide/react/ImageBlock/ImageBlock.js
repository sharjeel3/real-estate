import React from 'react'
import styles from './ImageBlock.module.scss'
import classnames from 'classnames'

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

export default ImageBlock
