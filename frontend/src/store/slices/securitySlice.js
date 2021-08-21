import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    open: false,
    type: "",
    message: "",
  },
  loading: false,
};

const securitySlice = createSlice({
  name: "securityReducer",
  initialState,
  reducers: {
    showLoading(state, action) {
      state.loading = action.payload;
    },
    showAlert(state, action) {
      state.alert = action.payload;
    },
  },
});

export const { showLoading, showAlert } = securitySlice.actions;

export default securitySlice.reducer;
