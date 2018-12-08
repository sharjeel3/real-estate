import React from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'

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

export default Button
