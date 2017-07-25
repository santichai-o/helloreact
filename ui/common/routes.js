import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  Home,
  Pages,
  Page
} from './components'

export default (store, history) => {
  return (
      <Router history={syncHistoryWithStore(history, store)} >
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <route path='pages' component={Pages} />
          <route path='page/:id' component={Page} />
        </Route>
      </Router>
  )
}