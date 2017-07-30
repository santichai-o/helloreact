
export default (state = {}, action) => {
  switch(action.type) {
    case 'LOAD_PAGE_SUCCESS':
      return action.value
    default:
      return state
  }
}