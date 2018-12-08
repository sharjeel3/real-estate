import { CONSTANTS } from '../../global'
import propertyReducer, { defaultState } from '../property'
import { propertyActionCreator } from '../../actions'

describe('>>> REDUCER TEST - PROPERTY STATE ', () => {
    test('+++ REFRESH_IS_FETCHING', () => {
        const isFetching = true
        const action = propertyActionCreator.refreshIsFetching(isFetching)
        const state = propertyReducer(null, action)
        expect(state).toEqual({
            isFetching
        })
    })

    test('+++ REFRESH_SAVED_PROPERTY', () => {
        const savedProperty = { 115: { id: 115 }}
        const action = propertyActionCreator.refreshSavedProperty(savedProperty)
        const state = propertyReducer(defaultState, action)
        expect(state).toEqual({
            ...defaultState,
            savedProperty
        })
    })

    test('+++ REMOVE_SAVED_PROPERTY', () => {
        const id = 554
        const savedProperty = { [id]: { id }}
        const saveAction = propertyActionCreator.refreshSavedProperty(savedProperty)
        const saveState = propertyReducer(defaultState, saveAction)
        expect(saveState).toEqual({
            ...defaultState,
            savedProperty
        })

        const removeAction = propertyActionCreator.removeSavedProperty(id)
        const removeState = propertyReducer(defaultState, removeAction)
        expect(removeState).toEqual({
            ...defaultState
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
