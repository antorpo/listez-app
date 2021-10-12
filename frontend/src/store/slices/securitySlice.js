import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    open: false,
    type: "",
    message: "",
  },
  loading: false,
  modal: {
    open: true,
    content: null
  },
  user: {
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    documento_identidad: '',
    roles: [],
    accessToken: ''
  }
};

const securitySlice = createSlice({
  name: "securityReducer",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
    showLoading(state, action) {
      state.loading = action.payload;
    },
    showAlert(state, action) {
      state.alert = action.payload;
    },
    showModal(state, action) {
      state.modal = action.payload;
    }
  },
});

export const { showLoading, showAlert, showModal, loginUser } = securitySlice.actions;

export default securitySlice.reducer;
