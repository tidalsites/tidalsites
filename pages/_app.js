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
          content="Welcome to Tidal Sites - Your Premier Web Services Partner in Hampton Roads, Virginia. Explore our top-tier web solutions including design, development, hosting, and branding. Elevate your online presence with our expert strategies and quality-focused services. Contact us today!"
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
