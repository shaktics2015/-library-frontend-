import {
    ADD_TO_BORROWED_LIST_BEGIN,
    ADD_TO_BORROWED_LIST_SUCCESS,
    ADD_TO_BORROWED_LIST_FAIL,
    } from "../action/borrowHistoryAction";
    
    const initialState = {
      loading: false,
      data: null,
      error: null,
    }; 
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case ADD_TO_BORROWED_LIST_BEGIN:
          return {
            loading: true,
            error: null,
          };
        case ADD_TO_BORROWED_LIST_SUCCESS:
          return {
            loading: false,
            data: action.payload.data,
          };
        case ADD_TO_BORROWED_LIST_FAIL:
          return {
            loading: false,
            error: action.payload.error.response.data,
          };
        default:
          return state;
      }
    };
    