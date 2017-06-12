/*
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

const rootEl = document.getElementById('app')

function renderApp() {  
  // We now render `<AppContainer>` instead of our App component. 
  ReactDOM.render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    rootEl
  );
}

renderApp(); // Renders App on init

if (module.hot) {  
  // Renders App every time a change in code happens.
  module.hot.accept('./components/Root', renderApp);
}
*/

import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import Root from '../common/components/Root'

const initialState = window.__INITIAL_STATE__
const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Root
      history={browserHistory}
      initialState={initialState} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('../common/components/Root', () => {
    const NextRootApp = require('../common/components/Root').default

    render(
      <AppContainer>
         <NextRootApp
           history={browserHistory}
           initialState={initialState} />
      </AppContainer>,
      rootEl
    )
  })
}