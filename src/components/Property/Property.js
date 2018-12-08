import React from 'react'
import styles from './Property.module.scss'
import Loader from '../../style-guide/react/Loader/Loader'
import Container from '../../style-guide/react/Container/Container'
import Row from '../../style-guide/react/Row/Row'
import List from './List/List'
import { CONSTANTS } from '../../global'

const Property = ({ ...props }) => {
    const { isFetching, response, onClick, savedProperty } = props

    if (isFetching) {
        return <Loader />
    }

    const { results } = response || {}
    if (!results || results.length === 0) {
        return ''
    }

    return (
        <div className={styles.root}>
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <List
                            items={results}
                            action={CONSTANTS.ADD}
                            savedProperty={savedProperty}
                            onClick={onClick}
                        />
                    </div>
                    <div className="col-lg">
                        Saved Properties
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Property
