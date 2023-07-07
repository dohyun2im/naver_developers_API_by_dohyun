import { createSlice } from "@reduxjs/toolkit";

export interface NaverState {
  list: any[];
}

const initialState: NaverState = {
  list: [],
};

export const naverSlice = createSlice({
  name: "naver",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setList } = naverSlice.actions;
export default naverSlice.reducer;
