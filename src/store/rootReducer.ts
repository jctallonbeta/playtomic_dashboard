import { combineReducers } from "redux";

import session from "./slices/sessionSlice";

export const rootReducer = combineReducers({
  session,
});
