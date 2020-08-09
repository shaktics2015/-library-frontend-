import { apiCall } from "../../modules/serverCall";

export const getBorrowedList = (userToken) => (dispatch) => {
  dispatch({
    type: BORROW_LIST_BEGIN,
  });
  return apiCall({
    method: "GET",
    url: `/borrow/get/${userToken}`,
  })
    .then((res) => {
      dispatch({
        type: BORROW_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: BORROW_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
}; 

export const BORROW_LIST_BEGIN = "BORROW_LIST_BEGIN";
export const BORROW_LIST_SUCCESS = "BORROW_LIST_SUCCESS";
export const BORROW_LIST_FAIL = "BORROW_LIST_FAIL";


export const removeBorrowedBook = (userToken, data) => (dispatch) => {
  dispatch({
    type: UPDATE_BORROW_LIST_BEGIN,
  });
  return apiCall({
    method: "PUT",
    url: `/borrow/return/${userToken}`,
    data: data,
  })
    .then((res) => {
      dispatch({
        type: UPDATE_BORROW_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_BORROW_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
}; 

export const addToBorrowedList = ( data) => (dispatch) => {
  dispatch({
    type: UPDATE_BORROW_LIST_BEGIN,
  });
  return apiCall({
    method: "POST",
    url: `/borrow/add`,
    data: data,
  })
    .then((res) => {
      dispatch({
        type: UPDATE_BORROW_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_BORROW_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
}; 


export const UPDATE_BORROW_LIST_BEGIN = "UPDATE_BORROW_LIST_BEGIN";
export const UPDATE_BORROW_LIST_SUCCESS = "UPDATE_BORROW_LIST_SUCCESS";
export const UPDATE_BORROW_LIST_FAIL = "UPDATE_BORROW_LIST_FAIL";
