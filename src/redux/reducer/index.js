import { combineReducers } from "redux";
import books from "./bookReducer";
import borrowHistory from "./borrowHistoryReducer"; 
import update from "./updateBorrowHistoryReducer"; 


export default combineReducers({
  books,
  borrowHistory, 
  update
 });
