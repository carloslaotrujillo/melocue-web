import "../styles/globals.css";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
