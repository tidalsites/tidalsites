import "../styles/globals.css";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // Service Worker setup
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Elevate your digital experience with a premium website from Tidal Sites. We offer branding, web design, web development, hosting, web maintenance, and consulting. Call today"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>
          {process.env.NODE_ENV === "development"
            ? "Tidal Sites - Dev"
            : "Tidal Sites"}
        </title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
