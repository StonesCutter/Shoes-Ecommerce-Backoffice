import { createSlice } from "@reduxjs/toolkit";

//actionCreator
export const setToken = (obj) => (dispatch) => {
  try {
    return dispatch(setTokenAction(obj));
  } catch (err) {
    return console.log(err);
  }
};

export const removeToken = () => (dispatch) => {
  try {
    return dispatch(removeTokenAction());
  } catch (err) {
    return console.log(err);
  }
};

// Slice
const tokenDuck = createSlice({
  name: "tokenDuck",
  initialState: {
    token: null,
    refreshToken: null,
  },
  reducers: {
    setTokenAction: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    removeTokenAction: (state) => {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export default tokenDuck.reducer;

// Actions
const { setTokenAction, removeTokenAction } = tokenDuck.actions;
