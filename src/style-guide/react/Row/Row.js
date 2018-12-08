import React from 'react'
import styles from './Row.module.scss'
import classnames from 'classnames'

const Row = ({ ...props }) => {
    const { className, children } = props

    return (
        <div className={classnames(styles.root, 'row', {
            [className]: className
        })}>
            {children}
        </div>
    )
}

export default Row
