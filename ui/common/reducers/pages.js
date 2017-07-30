
export default (state = [], action) => {
  switch(action.type) {
    case 'LOAD_PAGES_SUCCESS':
      return  action.value
    default:
      return state
  }
}