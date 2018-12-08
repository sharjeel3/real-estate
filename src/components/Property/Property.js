import React from 'react'
import styles from './Property.module.scss'
import Loader from '../../style-guide/react/Loader/Loader'

const Property = ({ ...props }) => {
    const { isFetching } = props

    if (isFetching) {
        return <Loader />
    }

    return (
        <div className={styles.root}>
            Views will be here
        </div>
    )
}

export default Property
