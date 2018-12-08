import React from 'react'
import styles from './Container.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Container
