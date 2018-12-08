import React from 'react'
import styles from './Container.module.scss'
import classnames from 'classnames'

const Container = ({ ...props }) => {
    const { className, children } = props

    return (
        <div className={classnames(styles.root, 'container', {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default Container
