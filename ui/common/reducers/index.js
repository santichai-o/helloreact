import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import page from './page'
import pages from './pages'
import status from './status'

export default combineReducers({
  status,
  pages,
  page,
  routing: routerReducer,
})