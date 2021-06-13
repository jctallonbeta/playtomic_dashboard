import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name?: string;
  email: string;
  userId: string;
  authTime: number;
}

export interface SessionState {
  token?: string;
  user: User | null;
}

export const initialState: SessionState = {
  user: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateSession(_, action: { payload: SessionState }) {
      return action.payload;
    },
  },
});

export const { updateSession } = sessionSlice.actions;
export default sessionSlice.reducer;
