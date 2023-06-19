import { createSlice } from "@reduxjs/toolkit";

// Action Creator
//export const setLanguage = (obj) => (dispatch) => {
export const setLanguage = (str) => (dispatch) => {
  try {
    //return dispatch(setLanguageAction(obj));
    return dispatch(setLanguageAction(str));
  } catch (e) {
    return dispatch(errorLanguageAction(e.message));
  }
};

// Action Creator
export const initLanguage = () => async (dispatch) => {
  try {
    return dispatch(initLanguageAction());
  } catch (e) {
    return dispatch(errorLanguageAction(e.message));
  }
};

// Slice
const languageDuck = createSlice({
  name: "languageDuck",
  initialState: {
    language: "en",
    error: null,
  },
  reducers: {
    setLanguageAction: (state, action) => {
      state.language = action.payload;
    },
    initLanguageAction: (state) => {
      state.language = null;
      state.error = null;
    },
    errorLanguageAction: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export default languageDuck.reducer;

// Actions
const { setLanguageAction, initLanguageAction, errorLanguageAction } =
  languageDuck.actions;
