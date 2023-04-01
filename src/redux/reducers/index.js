import { combineReducers } from "redux";
import { User } from "./adminReducer";
import { BlogReducer } from "./blogreducer";
import { devotionsreducer } from "./devotionreducer";
// import { setCurrentUser } from "../reducers/accountReducer";

export const reducers = combineReducers({
  // accountDetails: setCurrentUser,
  blogItems: BlogReducer,
  devotions: devotionsreducer,
  user: User,
});
