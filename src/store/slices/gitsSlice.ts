import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface Gist {
  id: string;
  fileNames: string[];
  description: string;
  url: string;
}

export interface GistsState {
  gists: Gist[];
  error: null | AxiosError;
  isFetching: boolean;
}

export const initialState: GistsState = {
  gists: [],
  error: null,
  isFetching: false,
};

const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {
    setIsFetching(state) {
      return { ...state, error: initialState.error, isFetching: true };
    },
    addGists(_, action: { payload: Gist[] }) {
      return { error: null, gists: action.payload, isFetching: false };
    },
    setFetchingError(_, action: { payload: AxiosError }) {
      return { error: action.payload, gists: [], isFetching: false };
    },
  },
});

export const { addGists, setIsFetching, setFetchingError } = gistsSlice.actions;
export default gistsSlice.reducer;
