import axios from 'axios'
import { API_ROOT } from '../endpoints'

export const loadPage = (page) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_REQUEST'
        })

        return axios.post(API_ROOT,  {
            query: `{ content(id:${page.id}) {id, title, description} }`
        })
        .then(response => { 
            let result = response.data

            dispatch({ type: 'LOAD_SUCCESS' })
            return dispatch({ type: 'LOAD_PAGE_SUCCESS', value: result.data.content })
        })
        .catch(err => dispatch({
            type: 'LOAD_FAILURE',
            value: err.message
        }))
    }
}