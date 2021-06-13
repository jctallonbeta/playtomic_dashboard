import { combineReducers } from "redux";

import session from "./slices/sessionSlice";
import repositories from "./slices/repositoriesSlice";

export const rootReducer = combineReducers({
  session,
  repositories,
});
