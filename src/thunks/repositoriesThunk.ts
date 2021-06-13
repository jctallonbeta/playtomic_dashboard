import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { github } from "../services/github/api";
import {
  addRepositories,
  Repository,
  setFetchingError,
  setIsFetching,
} from "../store/slices/repositoriesSlice";

export const getRepositories =
  () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(setIsFetching());

    await github
      .get("/repositories")
      .then((response) => {
        const repositories: Repository[] = response.data.map((obj: any) => {
          return {
            id: obj.id,
            name: obj.name,
            description: obj.description,
            url: obj.html_url,
          };
        });

        dispatch(addRepositories(repositories));
      })
      .catch((e) => {
        dispatch(setFetchingError(e));
      });
  };
