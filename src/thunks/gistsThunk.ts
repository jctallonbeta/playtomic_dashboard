import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { github } from "../services/github/api";
import {
  addGists,
  Gist,
  setFetchingError,
  setIsFetching,
} from "../store/slices/gitsSlice";

export const getGists =
  () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(setIsFetching());

    await github
      .get("/gists/public")
      .then((response) => {
        const gists: Gist[] = response.data.map((obj: any) => {
          return {
            id: obj.id,
            fileNames: Object.keys(obj.files),
            description: obj.description,
            url: obj.html_url,
          };
        });

        dispatch(addGists(gists));
      })
      .catch((e) => {
        dispatch(setFetchingError(e));
      });
  };
