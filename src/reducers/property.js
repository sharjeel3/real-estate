import { CONSTANTS } from '../global'

const defaultState = {
    error: '',
    response: null,
    savedContent: '',
    isFetching: false
}

const property = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANTS.REFRESH_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
