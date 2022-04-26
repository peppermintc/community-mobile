import { combineReducers } from "redux";
import communityReducer, { CommunityState } from "./community";

export interface RootState {
  community: CommunityState;
}

const rootReducer = combineReducers({
  community: communityReducer,
});

export default rootReducer;
