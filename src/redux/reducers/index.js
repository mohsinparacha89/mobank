import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";


export default combineReducers({
  transaction: transactionReducer // this will be the name we use to access this reducer
});