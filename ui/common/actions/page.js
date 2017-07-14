import fetch from 'isomorphic-fetch'
import { API_ROOT } from '../components/endpoints'

export const loadPages = () => {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_PAGES_REQUEST'
        })

        //console.log(API_ROOT+'/pages')
        return fetch(API_ROOT+'/pages')
            .then((response) => response.json())
            .then(
                (pages) => dispatch({
                    type: 'LOAD_PAGES_SUCCESS',
                    pages
                }),
                (error) => dispatch({
                    type: 'LOAD_PAGES_FAILURE'
                })
            )
    }
}