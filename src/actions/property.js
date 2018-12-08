import fetchHelper from './helpers/fetchHelper'
import { CONSTANTS } from '../global'

const refreshProperty = (error, response) => ({
    type: CONSTANTS.REFRESH_PROPERTY,
    response: response,
    isFetching: false,
    error
})

const refreshIsFetching = isFetching => ({
    type: CONSTANTS.REFRESH_IS_FETCHING,
    isFetching
})

const refreshSavedProperty = payload => ({
    type: CONSTANTS.REFRESH_SAVED_PROPERTY,
    payload
})

const addSavedProperty = payload => {
    return refreshSavedProperty(payload)
}

const removeSavedProperty = id => ({
    type: CONSTANTS.REMOVE_SAVED_PROPERTY,
    id
})

const updateSavedPropertyContent = response => {
    const { saved = [] } = response || {}
    if (!saved || saved.length === 0) {
        return
    }
    const payload = Object.assign({}, ...saved.map(item => {
        return {
            [item.id]: { ...item }
        }
    }))
    return refreshSavedProperty(payload)
}

const fetchPropertyCb = dispatch => (error, response) => {
    const success = error === null
    if (success) {
        dispatch(updateSavedPropertyContent(response))
    }
    return refreshProperty(success ? '' : 'Something went wrong', response)
}

const requestProperty = props => dispatch => {
    const url = '/api/property.json'
    dispatch(refreshIsFetching(true))
    return dispatch(fetchHelper.fetch({
        url,
        cb: fetchPropertyCb,
        params: props ? props : {}
    }))
}

export default {
    requestProperty,
    refreshIsFetching,
    refreshProperty,
    refreshSavedProperty,
    addSavedProperty,
    removeSavedProperty
}
