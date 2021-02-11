import { createActions, createReducer } from "reduxsauce";
import { AuthState } from "./_types";
import { HYDRATE } from "next-redux-wrapper";

export const INITIAL_STATE: AuthState = {
  fetching: false,
  error: null,
  token: null,
};

export const { Types, Creators } = createActions({
  logIn: ["email", "password"],
  logInSuccess: ["token"],
  logInFailed: ["error"],
});

const logIn = (state) => ({ ...state, fetching: true });

const logInSuccess = (state, { token }) => ({
  ...state,
  token,
  error: null,
  fetching: false,
});

const logInFailed = (state, { error }) => ({
  ...state,
  error,
  token: null,
  fetching: false,
});

const hydrate = (state, action) => action.payload.auth;

export default createReducer(INITIAL_STATE, {
  [Types.LOG_IN]: logIn,
  [Types.LOG_IN_SUCCESS]: logInSuccess,
  [Types.LOG_IN_FAILED]: logInFailed,
  [HYDRATE]: hydrate,
});
