import {
  GET_BOOKS_BEGIN,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
} from "../action/booksAction";

const initialState = {
  loading: false,
  data: null,
  error: null,
}; 
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_BEGIN:
      return {
        loading: true,
        error: null,
      };
    case GET_BOOKS_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
      };
    case GET_BOOKS_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data,
      };
    default:
      return state;
  }
};
