import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../common/store/configureStore'
import Root from '../common/components/Root'
import getRoutes from '../common/routes'
import { Provider } from 'react-redux'
import { fetchComponent } from './fetchComponent.js'

// แยกส่วนที่ใช้สร้าง HTML ออกมาเป็นฟังก์ชัน
// รับพารามิเตอร์หนึ่งตัวคือ HTML
const renderHtml = (html, initialState) => (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <title>Wiki!</title>
    </head>
    <body>
      <div id='app'>${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script type="text/javascript" src="http://127.0.0.1:8081/public/js/bundle.js"></script>
    </body>
  </html>
`)

/*
export default function(req, res) {
  match({ getRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
fetchData().then(discs => {
        // Compile an initial state
        let preloadedState = {};
        
        // Create a new Redux store instance
        const store = configureStore(preloadedState);
        store.dispatch(getDataSuccess(discs));
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        const html = renderHtml(<Provider store={store}><RouterContext {...renderProps} /></Provider>);
        // Grab the initial state from our Redux store
        const finalState = store.getState();
        // Send the rendered page back to the client
        res.status(200).send(renderHtml(html, finalState));      
      }).catch(error => { 
          res.status(500).send(error.message);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}
*/

export default function(req, res) {
  // สร้าง history ฝั่งเซิร์ฟเวอร์ 
  const memoryHistory = createMemoryHistory(req.originalUrl)
  // สร้าง store โดยส่ง history ที่ได้เป็นอาร์กิวเมนต์
  const store = configureStore(memoryHistory)
  // ยังจำได้ไหมเอ่ย เราต้องการเพิ่มความสามารถให้กับ history
  // เราจึงใช้ react-router-redux ซึ่งเราต้องตั้งค่าผ่าน syncHistoryWithStore
  // เพื่อให้ store รับรู้ถึงการเปลี่ยนแปลงของ history เช่นรู้ว่าตอนนี้อยู่ที่ URL ไหน
  const history = syncHistoryWithStore(memoryHistory, store)

  // ใช้ match เพื่อพิจารณาว่าปัจจุบันเราอยู่ที่ URL ไหนโดยดูจาก req.originalUrl ที่ส่งไปเป็น location
  // match จะเข้าคู่ URL นี้กับ routes ที่เรามีทั้งหมด
  match({
    routes: getRoutes(store, history),
    location: req.originalUrl
  }, (error, redirectLocation, renderProps) => {
    // หากเกิด error ก็ให้โยน HTTP 500 Internal Server Error ออกไป
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      // แต่ถ้าเจอว่าเป็นการ redirect ก็ให้ redirect ไปที่ path ใหม่
      res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`)
    } else if (renderProps) {
      
      const { components, params } = renderProps

      // ดึงข้อมูลจาก API Server เสร็จเมื่อไหร่ค่อยนำไปสร้าง HTML
      fetchComponent(store.dispatch, components, params)
        .then(html => {
          const componentHTML = renderToString(
            <Provider store={store} key='provider'>
              <RouterContext {...renderProps} />
            </Provider>
          )
          
          // เรียก getState เพื่อดึงค่าจาก store ปัจจุบันของฝั่งเซิร์ฟเวอร์
          // state ของเซิร์ฟเวอร์จะอัดฉีดลง store ฝั่ง client ภายหลัง
          const initialState = store.getState()

          res.status(200).send(
            renderHtml(componentHTML, initialState)
          )
        })
        .catch(error => {
          console.log(error)
          res.status(500).send('Internal Server Error')
        })

      /*res.status(200).send(
        // ส่ง RouterContext เข้าไปสร้าง HTML ใน renderHtml
        
        renderHtml(renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>))
      )*/
    } else {
      // ถ้าจับอะไรไม่ได้ซักอย่างก็ 404 Not Found ไปเลย
      res.status(404).send('Not found')
    }
  })
}