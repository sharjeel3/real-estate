import React from 'react'
import styles from './Card.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Card
