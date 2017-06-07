import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'

import rootReducer from './reducers'

export default () => {
  const middlewares = [thunk]
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    System.import('./reducers').then(nextRootReducer =>
      store.replaceReducer(nextRootReducer.default)
    )
  }

  return store
}