import axios from 'axios'

const fetchHelper = (() => {
    const getConfig = props => {
        const { url, data, params = {}, headers } = props

        const combinedHeaders = {
            ...headers,
            'Cache-Control': 'no-cache'
        }

        return {
            method: 'GET',
            headers: combinedHeaders,
            url,
            params: params ? params : {},
            data: data ? data : {}
        }
    }

    const fetchFromAPI = props => dispatch => {
        const { cb } = props
        if (typeof cb !== 'function') {
            return false // Have nothing to do
        }

        return axios(getConfig(props))
            .then(response => {
                dispatch(cb(dispatch)(null, response.data))
            })
            .catch(error => {
                dispatch(cb(dispatch)(error, (error.response || {}).data))
            })
            .then(() => {
                // always do something
            })
    }

    return {
        fetch: fetchFromAPI
    }
})()

export default fetchHelper
