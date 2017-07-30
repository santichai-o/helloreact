import axios from 'axios'
import { API_ROOT } from '../endpoints'

export const loadPages = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_REQUEST'
        })

        return axios.post(API_ROOT,  {
            query: '{ contents {id, title} }'
        })
        .then(response => { 
            let result = response.data

            dispatch({ type: 'LOAD_SUCCESS' })
            return dispatch({ type: 'LOAD_PAGES_SUCCESS', value: result.data.contents })
        })
        .catch(err => dispatch({
            type: 'LOAD_FAILURE',
            value: err.message
        }))
    }
}