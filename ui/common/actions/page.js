import axios from 'axios'
import { API_ROOT } from '../components/endpoints'

export const loadPage = (page) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_PAGE_REQUEST'
        })

        return axios.post(API_ROOT,  {
            query: `{ content(id:${page.id}) {id, title, description} }`
        })
        .then(response => { 
            let result = response.data

            return dispatch({
                type: 'LOAD_PAGE_SUCCESS',
                page: result.data.content
            })
        })
        .catch(err => dispatch({
            type: 'LOAD_PAGE_FAILURE'
        }))
    }
}