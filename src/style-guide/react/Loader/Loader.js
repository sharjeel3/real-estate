import React from 'react'
import styles from './Loader.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

Loader.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
}

export default Loader
