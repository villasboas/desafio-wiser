import store from "app/store";

function _App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default store.withRedux(_App);
