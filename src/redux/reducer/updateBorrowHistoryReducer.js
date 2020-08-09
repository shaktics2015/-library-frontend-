import {
  UPDATE_BORROW_LIST_BEGIN,
  UPDATE_BORROW_LIST_SUCCESS,
  UPDATE_BORROW_LIST_FAIL,
  } from "../action/borrowHistoryAction";
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  }; 
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_BORROW_LIST_BEGIN:
        return {
          loading: true,
          error: null,
        };
      case UPDATE_BORROW_LIST_SUCCESS:
        return {
          loading: false,
          data: action.payload.data,
        };
      case UPDATE_BORROW_LIST_FAIL:
        return {
          loading: false,
          error: action.payload.error.response.data,
        };
      default:
        return state;
    }
  };
  