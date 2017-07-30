
const initialState = { state: 0, message: '' }

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_SUCCESS':
      return { state: 0 }
    case 'LOAD_REQUEST':
      return { state: 1 }
    case 'LOAD_FAILURE':
      return { state: 2, message: action.value }
    default:
      return state
  }
}