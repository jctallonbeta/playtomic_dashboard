import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
}

export interface RepositoriesState {
  repositories: Repository[];
  error: null | AxiosError;
  isFetching: boolean;
}

export const initialState: RepositoriesState = {
  repositories: [],
  error: null,
  isFetching: false,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setIsFetching(state) {
      return { ...state, error: initialState.error, isFetching: true };
    },
    addRepositories(_, action: { payload: Repository[] }) {
      return { error: null, repositories: action.payload, isFetching: false };
    },
    setFetchingError(_, action: { payload: AxiosError }) {
      return { error: action.payload, repositories: [], isFetching: false };
    },
  },
});

export const { addRepositories, setIsFetching, setFetchingError } =
  repositoriesSlice.actions;
export default repositoriesSlice.reducer;
