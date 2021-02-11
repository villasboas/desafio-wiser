import { applyMiddleware, createStore, Middleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./ducks";
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(authSaga);

  return store;
};

// export an assembled wrapper
export default createWrapper(makeStore, { debug: false });
