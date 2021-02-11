import { call, put, takeLatest } from "redux-saga/effects";
import { Types } from "app/store/ducks/auth";

export function* logIn(action) {
  try {
    const user = yield call(
      function (email, password) {
        return new Promise(function (resolve) {
          console.log(email, password);
          setTimeout(() => resolve(true), 5000);
        });
      },
      action.email,
      action.password
    );
    yield put({ type: Types.LOG_IN_SUCCESS, token: user });
  } catch (e) {
    console.log(e);
    yield put({ type: Types.LOG_IN_FAILED, message: e.message });
  }
}

export default function* authSaga() {
  yield takeLatest(Types.LOG_IN, logIn);
}
