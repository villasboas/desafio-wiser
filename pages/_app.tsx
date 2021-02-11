import store from "app/store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function _App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default store.withRedux(_App);
