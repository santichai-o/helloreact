import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import page from './page'
import pages from './pages'

export default combineReducers({
  routing: routerReducer,
  pages,
  page
})