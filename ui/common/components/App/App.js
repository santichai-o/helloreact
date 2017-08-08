import React from 'react'
import axios from 'axios'

import Header from './Header'
import '../../theme/main.scss';

const App = (props) => {
  
  axios.defaults.headers.common['Authorization'] = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibWV0YSI6ImhlbGxvIn0.8Z2cmaOLParuFfPO9pDFSMMeXkPkOLcrebZgpcSLnsQ'
  
  return (
    <div id="wrap">
      <Header pathname={props.location.pathname} />
      <div className='container'>
          {props.children}
      </div>
    </div>
  )
}

export default App 