import React from 'react'
import styles from './Row.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Row
