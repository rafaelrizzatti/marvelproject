const INITIAL_STATE = {
    search: ""
  }
  
  const search = (state = INITIAL_STATE, action) => {
    if (action.type === 'CHANGE_SEARCH') {
      return {
        search: action.data
      }
    }
    return state
  }
  
  export default search
  