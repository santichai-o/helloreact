import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import pages from './pages'

export default combineReducers({
  routing: routerReducer,
  pages
})