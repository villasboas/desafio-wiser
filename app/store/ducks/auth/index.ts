import { createActions, createReducer } from "reduxsauce";
import { AuthState } from "./_types";
import { HYDRATE } from "next-redux-wrapper";

export const INITIAL_STATE: AuthState = {
  loading: false,
};

const { Types, Creators } = createActions({
  logInStarted: [],
  logInFinished: [],
  logInSuccess: ["token"],
  logInFailed: ["error"],
});

const logInStarted = (state) => state.merge({ loading: true });
const logInFinished = (state) => state.merge({ loading: false });
const hydrate = (state, action) => action.payload.auth;

export default createReducer(INITIAL_STATE, {
  [Types.LOG_IN_STARTED]: logInStarted,
  [Types.LOG_IN_FINISHED]: logInFinished,
  [HYDRATE]: hydrate,
});
