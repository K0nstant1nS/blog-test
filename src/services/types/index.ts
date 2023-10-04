import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store";
import { TPostsActions } from "../actions/posts";

export type TApplicationActions = TPostsActions
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, Action, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;
