import {
  BORROW_LIST_BEGIN,
  BORROW_LIST_SUCCESS,
  BORROW_LIST_FAIL,
} from "../action/borrowHistoryAction";

const initialState = {
  loading: false,
  data: null,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case BORROW_LIST_BEGIN:
      return {
        loading: true,
        error: null,
      };
    case BORROW_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
      };
    case BORROW_LIST_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data,
      };
    default:
      return state;
  }
};
