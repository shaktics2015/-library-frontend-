import { apiCall } from "../../modules/serverCall";

export const getBooks = () => (dispatch) => {
  dispatch({
    type: GET_BOOKS_BEGIN,
  });
  return apiCall({
    method: "GET",
    url: `/book/all`,
  })
    .then((res) => {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: GET_BOOKS_FAIL,
        payload: { error },
      });
      return error;
    });
};


export const GET_BOOKS_BEGIN = "GET_BOOKS_BEGIN";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAIL = "GET_BOOKS_FAIL";

