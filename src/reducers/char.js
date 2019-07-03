const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
  }
  
  const char = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_CHAR_REQUEST') {
      return {
        isFetching: true,
        data: [],
        error: false
      }
    }
    if (action.type === 'LOAD_DATA_CHAR_SUCCESS') {
      return {
        isFetching: false,
        data: action.data,
        error: false
      }
    }
    if (action.type === 'LOAD_DATA_CHAR_FAILURE') {
      return {
        isFetching: false,
        data: [],
        error: true
      }
    }
    return state
  }
  
  export default char
  