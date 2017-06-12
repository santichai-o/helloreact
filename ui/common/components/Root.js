import React from 'react'
import { Provider } from 'react-redux'

import { browserHistory } from 'react-router'
import configureStore from '../store/configureStore'
import routes from '../routes'

export default class Root extends React.Component  {
  render() {
    const { history, initialState } = this.props
    const store = configureStore(history, initialState)

    return (
      <Provider store={store} key='provider'>
        {routes(store, history)}
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