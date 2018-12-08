import React from 'react'
import styles from './Loader.module.scss'
import classnames from 'classnames'

const Loader = ({ ...props }) => {
    const { size = 50, className } = props
    const style = {
        width: size,
        height: size
    }

    return (
        <div className={classnames(styles.root, {
            [className]: className
        })}>
            <div style={style} className={styles.loader}></div>
        </div>
    )
}

export default Loader
