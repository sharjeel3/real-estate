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

const fetchPropertyCb = dispatch => (error, response) => {
    const success = error === null
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
    refreshProperty
}
