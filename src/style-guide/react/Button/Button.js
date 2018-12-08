import React from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ ...props }) => {
    const { className, children, ...restProps } = props

    return (
        <button {...restProps} className={classnames(styles.root, 'btn', {
            [className]: className,
            [styles.root_isDisabled]: restProps.disabled === true
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool
}

export default Button
