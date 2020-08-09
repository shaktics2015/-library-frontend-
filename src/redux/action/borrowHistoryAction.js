import { apiCall } from "../../modules/serverCall";

export const getBorrowedList = (userToken) => (dispatch) => {
  dispatch({
    type: GET_BORROWED_LIST_BEGIN,
  });
  return apiCall({
    method: "GET",
    url: `/borrow/get/${userToken}`,
  })
    .then((res) => {
      dispatch({
        type: GET_BORROWED_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: GET_BORROWED_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
}; 

export const GET_BORROWED_LIST_BEGIN = "GET_BORROWED_LIST_BEGIN";
export const GET_BORROWED_LIST_SUCCESS = "GET_BORROWED_LIST_SUCCESS";
export const GET_BORROWED_LIST_FAIL = "GET_BORROWED_LIST_FAIL";


export const removeBorrowedBook = (userToken, data) => (dispatch) => {
  dispatch({
    type: UPDATE_BORROWED_LIST_BEGIN,
  });
  return apiCall({
    method: "PUT",
    url: `/borrow/return/${userToken}`,
    data: data,
  })
    .then((res) => {
      dispatch({
        type: UPDATE_BORROWED_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_BORROWED_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
};
 
export const UPDATE_BORROWED_LIST_BEGIN = "UPDATE_BORROWED_LIST_BEGIN";
export const UPDATE_BORROWED_LIST_SUCCESS = "UPDATE_BORROWED_LIST_SUCCESS";
export const UPDATE_BORROWED_LIST_FAIL = "UPDATE_BORROWED_LIST_FAIL";


export const addToBorrowedList = ( data) => (dispatch) => {
  dispatch({
    type: ADD_TO_BORROWED_LIST_BEGIN,
  });
  return apiCall({
    method: "POST",
    url: `/borrow/add`,
    data: data,
  })
    .then((res) => {
      dispatch({
        type: ADD_TO_BORROWED_LIST_SUCCESS,
        payload: res,
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: ADD_TO_BORROWED_LIST_FAIL,
        payload: { error },
      });
      return error;
    });
};
 
export const ADD_TO_BORROWED_LIST_BEGIN = "ADD_TO_BORROWED_LIST_BEGIN";
export const ADD_TO_BORROWED_LIST_SUCCESS = "ADD_TO_BORROWED_LIST_SUCCESS";
export const ADD_TO_BORROWED_LIST_FAIL = "ADD_TO_BORROWED_LIST_FAIL";
 
