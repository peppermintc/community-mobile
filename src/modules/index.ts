import { combineReducers } from "redux";
import communityReducer from "./community";

const rootReducer = combineReducers({
  community: communityReducer,
});

export default rootReducer;
