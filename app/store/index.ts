import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./ducks";

const makeStore = () => {
  return createStore(reducers, composeWithDevTools());
};

// export an assembled wrapper
export default createWrapper(makeStore, { debug: false });
