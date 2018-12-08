import React from 'react'
import styles from './Property.module.scss'
import Loader from '../../style-guide/react/Loader/Loader'
import Container from '../../style-guide/react/Container/Container'
import Row from '../../style-guide/react/Row/Row'
import List from './List/List'
import { CONSTANTS } from '../../global'
import SavedProperty from './SavedProperty/SavedProperty'

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
                        <h2 style={{ margin: 10 }} className='h2'>
                            All properties
                        </h2>
                        <List
                            items={results}
                            action={CONSTANTS.ADD}
                            savedProperty={savedProperty}
                            onClick={onClick}
                        />
                    </div>
                    <div className="col-lg">
                        <h2 style={{ margin: 10 }} className='h2'>
                            Saved properties
                        </h2>
                        <SavedProperty
                            action={CONSTANTS.REMOVE}
                            savedProperty={savedProperty}
                            onClick={onClick}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Property
