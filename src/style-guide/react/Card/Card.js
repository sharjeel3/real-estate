import React from 'react'
import styles from './Card.module.scss'
import classnames from 'classnames'

const Card = ({ ...props }) => {
    const { className, children, ...restProps } = props

    return (
        <div {...restProps} className={classnames(styles.root, {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default Card
