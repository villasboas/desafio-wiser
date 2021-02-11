import { call, put, takeLatest } from "redux-saga/effects";
import { Types } from "app/store/ducks/auth";
import { authService } from "app/services/api.service";

export function* logIn(action) {
  try {
    const { token } = yield call(
      authService.logIn,
      action.email,
      action.password
    );
    yield put({ type: Types.LOG_IN_SUCCESS, token });
  } catch (e) {
    yield put({ type: Types.LOG_IN_FAILED, error: "Algo deu errado..." });
  }
}

export default function* authSaga() {
  yield takeLatest(Types.LOG_IN, logIn);
}
