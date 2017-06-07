import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import {
  App,
  Home,
  Pages
} from './index'

export default class Root extends React.Component  {
  render() {
    return (
      <Provider store={configureStore()} key='provider'>
        <Router history={browserHistory} key={Math.random()}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <route path='pages' component={Pages} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

/*
import React from 'react'
import routes from '../routes'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        {routes()}
      </div>
    )
  }
}*/