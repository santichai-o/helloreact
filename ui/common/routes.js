import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  Home,
  Pages
} from './components/index.js'

export default (store, history) => {
  return (
      <Router history={syncHistoryWithStore(history, store)} >
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <route path='pages' component={Pages} />
          <route path='pages/:id' component={Pages} />
        </Route>
      </Router>
  )
}