  export const loadDataCharRequest = (string) => {
    return {
      type: 'LOAD_DATA_CHAR_REQUEST',string
    }
  }
  
  export const loadDataCharSuccess = (data) => {
    return {
      type: 'LOAD_DATA_CHAR_SUCCESS',
      data
    }
  }

  export const loadDataCharFailure = () => {
    return {
      type: 'LOAD_DATA_CHAR_FAILURE'
    }
  }
  
  export const changeSearch = (data) => {
    return {
      type: 'CHANGE_SEARCH',
      data
    }
  }