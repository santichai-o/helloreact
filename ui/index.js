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