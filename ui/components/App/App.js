import React, { Component } from 'react'
import Header from './Header'

const App = (props) => {

    return (
      <div>
        <Header />
        <div className='container'>
          <h1>Hello Mao Mao</h1>
          <div>
            {props.children}
          </div>
        </div>
      </div>
    )

}

export default App 