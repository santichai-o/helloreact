import React from 'react'
import Header from './Header'
import '../../theme/main.scss';

const App = (props) => {
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