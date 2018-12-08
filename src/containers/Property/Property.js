import React, { Component } from 'react'
import { propertyActionCreator } from '../../actions'
import { connect } from 'react-redux'
import PropertyView from '../../components/Property/Property'

class Property extends Component {
    componentDidMount() {
        const { onLoad } = this.props
        onLoad()
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
