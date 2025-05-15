import { createSlice } from "@reduxjs/toolkit";

const playerslice = createSlice({
  name: "player",
  initialState: {
    isPlayerDiv: false,
    songPath: "",
    img: "",
  },
  reducers: {
    setDiv(state) {
      state.isPlayerDiv = true;
    },
    closeDiv(state) {
      state.isPlayerDiv = false;
    },
    changeSong(state, action) {
      state.songPath = action.payload;
    },
    changeImage(state, action) {
      state.img = action.payload;
    },
  },
});

export const playerActions = playerslice.actions;
export default playerslice.reducer;
