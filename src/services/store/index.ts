import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../reducers/posts";
import thunk from 'redux-thunk'

/* declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

 const rootReducer = combineReducers({
  posts: postsReducer
});

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enchancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enchancer);  */

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  middleware: [thunk],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
