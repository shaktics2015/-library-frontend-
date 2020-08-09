import { combineReducers } from "redux";
import books from "./bookReducer";
import borrowHistory from "./borrowHistoryReducer";
import remove from "./updateBorrowHistoryReducer";
import add from "./addToBorrowHistoryReducer";


export default combineReducers({
  books,
  borrowHistory,
  remove,
  add
 });
