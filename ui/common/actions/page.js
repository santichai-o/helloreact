import fetch from 'isomorphic-fetch'
//import { CALL_API } from 'redux-api-middleware'
import { API_ROOT } from '../components/endpoints'

export const loadPages = () => {
    /*
    [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    method: 'GET',
        types: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGES_FAILURE']
    }
    */
    return (dispatch) => {
        dispatch({
            type: 'LOAD_PAGES_REQUEST'
        })

        fetch(API_ROOT+'/pages')
            .then((response) => response.json())
            .then(
            // เมื่อโหลดเสร็จแล้วก็สร้าง action เพื่อบอกว่าสำเร็จแล้ว
            // พร้อมส่ง pages วิ่งเข้าไปใน reducer
            (pages) => dispatch({
                type: 'LOAD_PAGES_SUCCESS',
                pages
            }),
            // หากเกิดข้อผิดพลาด ใช้ action ตัวนี้
            (error) => dispatch({
                type: 'LOAD_PAGES_FAILURE'
            })
        )
    }
}