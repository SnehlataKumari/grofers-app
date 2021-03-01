import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/itemCounterSlice";
export default configureStore({
  reducer: combineReducers({
    counter: counterReducer
  }),
});
