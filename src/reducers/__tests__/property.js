import { CONSTANTS } from '../../global'
import propertyReducer from '../property'
import { propertyActionCreator } from '../../actions';

describe('>>> REDUCER TEST - PROPERTY STATE ', () => {
    test('+++ REFRESH_IS_FETCHING', () => {
        const isFetching = true
        const action = propertyActionCreator.refreshIsFetching(isFetching)
        const state = propertyReducer(null, action)
        expect(state).toEqual({
            isFetching
        })
    })

    test('+++ REFRESH_PROPERTY', () => {
        const isFetching = false
        const error = ''
        const response = { saved: [{ id: 5 }], result: [{ id: 3 }]}
        const action = propertyActionCreator.refreshProperty(error, response)
        const state = propertyReducer(null, action)
        expect(state).toEqual({
            isFetching,
            response,
            error
        })
    })
})
