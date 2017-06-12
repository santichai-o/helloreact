import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

export default (history, initialState) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
} 