import { CONSTANTS } from '../../global'
import { propertyActionCreator } from '../index'

describe('>>> ACTION CREATOR TEST - PROPERTY ACTIONS ', () => {
    test('+++ REFRESH_IS_FETCHING', () => {
        const isFetching = true
        const action = propertyActionCreator.refreshIsFetching(isFetching)
        expect(action).toEqual({
            type: CONSTANTS.REFRESH_IS_FETCHING,
            isFetching
        })
    })

    test('+++ REFRESH_SAVED_PROPERTY', () => {
        const payload = { 55: { id: 55 }}
        const action = propertyActionCreator.refreshSavedProperty(payload)
        expect(action).toEqual({
            type: CONSTANTS.REFRESH_SAVED_PROPERTY,
            payload
        })
    })

    test('+++ ADD_SAVED_PROPERTY', () => {
        const payload = { 11: { id: 11 }}
        const action = propertyActionCreator.addSavedProperty(payload)
        expect(action).toEqual({
            type: CONSTANTS.REFRESH_SAVED_PROPERTY,
            payload
        })
    })

    test('+++ REMOVE_SAVED_PROPERTY', () => {
        const id = 56
        const action = propertyActionCreator.removeSavedProperty(id)
        expect(action).toEqual({
            type: CONSTANTS.REMOVE_SAVED_PROPERTY,
            id
        })
    })

    test('+++ REFRESH_PROPERTY FAIL', () => {
        const isFetching = false
        const error = 'Something went wrong'
        const response = null
        const action = propertyActionCreator.refreshProperty(error, response)
        expect(action).toEqual({
            type: CONSTANTS.REFRESH_PROPERTY,
            isFetching,
            response,
            error
        })
    })

    test('+++ REFRESH_PROPERTY SUCCESS', () => {
        const isFetching = false
        const error = ''
        const response = { saved: [{ id: 5 }], result: [{ id: 3 }]}
        const action = propertyActionCreator.refreshProperty(error, response)
        expect(action).toEqual({
            type: CONSTANTS.REFRESH_PROPERTY,
            isFetching,
            response,
            error
        })
    })
})
