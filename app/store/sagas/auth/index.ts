import { call, put, takeLatest } from "redux-saga/effects";
import { Types } from "app/store/ducks/auth";

export function* logIn(action) {
  try {
    console.log("chamou dentro do sage");
    const user = yield call(function ({ email, password }) {
      return new Promise(function (resolve) {
        console.log(email, password);
        setTimeout(() => resolve(true), 5000);
      });
    }, action.payload);
    yield put({ type: Types.LOG_IN_SUCCESS, token: user });
  } catch (e) {
    yield put({ type: Types.LOG_IN_FAILED, message: e.message });
  }
}

export default function* () {
  yield takeLatest(Types.LOG_IN, logIn);
}
