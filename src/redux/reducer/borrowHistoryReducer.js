import {
    GET_BORROWED_LIST_BEGIN,
    GET_BORROWED_LIST_SUCCESS,
    GET_BORROWED_LIST_FAIL,
  } from "../action/borrowHistoryAction";
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  }; 
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_BORROWED_LIST_BEGIN:
        return {
          loading: true,
          error: null,
        };
      case GET_BORROWED_LIST_SUCCESS:
        return {
          loading: false,
          data: action.payload.data,
        };
      case GET_BORROWED_LIST_FAIL:
        return {
          loading: false,
          error: action.payload.error.response.data,
        };
      default:
        return state;
    }
  };
  