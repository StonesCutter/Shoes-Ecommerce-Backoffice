// file: todos/todosReducer.ts noEmit
import { combineReducers } from "@reduxjs/toolkit";

// file: store.ts
import { configureStore } from "@reduxjs/toolkit";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

//DUCK
import tokenDuck from "./duck/token/tokenDuck";
import languageDuck from "./duck/language/languageDuck";
import userDuck from "./duck/user/userDuck";

const reducer = combineReducers({
  // here we will be adding reducers
  languageDuck,
  tokenDuck,
  userDuck,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together
