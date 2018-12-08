import { CONSTANTS } from '../global'

export const defaultState = {
    error: '',
    response: null,
    savedProperty: {},
    isFetching: false
}

const property = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.REFRESH_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CONSTANTS.REFRESH_SAVED_PROPERTY:
            return {
                ...state,
                savedProperty: {
                    ...state.savedProperty,
                    ...action.payload
                }
            }
        case CONSTANTS.REMOVE_SAVED_PROPERTY:
            const key = `${action.id}`
            const { [key]: discard, ...restSavedProperty } = state.savedProperty
            return {
                ...state,
                savedProperty: {
                    ...restSavedProperty
                }
            }
        case CONSTANTS.REFRESH_PROPERTY:
            return {
                ...state,
                isFetching: action.isFetching,
                response: action.response,
                error: action.error
            }
        default:
            return state
    }
}

export default property
