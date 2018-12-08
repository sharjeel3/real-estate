import React, { Component } from 'react'
import { propertyActionCreator } from '../../actions'
import { connect } from 'react-redux'
import PropertyView from '../../components/Property/Property'
import { CONSTANTS } from '../../global'

class Property extends Component {
    componentDidMount() {
        const { onLoad } = this.props
        onLoad()
    }

    addSavedProperty(property) {
        const { onSave } = this.props
        onSave({
            [property.id]: {
                ...property,
                time: new Date().getTime()
            }
        })
    }

    removeSavedProperty(property) {
        const { onRemove } = this.props
        onRemove(property.id)
    }

    handleClick = (action, property) => event => {
        event.preventDefault()
        const isValidAction = action === CONSTANTS.ADD || action === CONSTANTS.REMOVE
        if (!isValidAction || !property) {
            return
        }
        const handler = action === CONSTANTS.ADD ? this.addSavedProperty : this.removeSavedProperty
        handler(property)
    }

    render() {
        const { error, response, savedProperty, isFetching } = this.props
        const viewProps = {
            error,
            response,
            savedProperty,
            isFetching
        }

        return (
            <div>
                <PropertyView {...viewProps} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    property: state.property,
    error: state.property.error,
    response: state.property.response,
    savedProperty: state.property.savedProperty,
    isFetching: state.property.isFetching
})

const mapDispatchToProps = dispatch => ({
    onLoad: props => {
        dispatch(propertyActionCreator.requestProperty(props))
    },
    onSave: payload => {
        dispatch(propertyActionCreator.addSavedProperty(payload))
    },
    onRemove: id => {
        dispatch(propertyActionCreator.removeSavedProperty(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Property)
