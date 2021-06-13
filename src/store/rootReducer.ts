import { combineReducers } from "redux";

import session from "./slices/sessionSlice";
import repositories from "./slices/repositoriesSlice";
import gists from "./slices/gitsSlice";

export const rootReducer = combineReducers({
  session,
  repositories,
  gists,
});
