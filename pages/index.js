import Head from "next/head";

// Components
import { Hero } from "../components/Home/Sections/Hero";
import { Services } from "../components/Home/Sections/Services";
import { Highlights } from "../components/Home/Sections/Highlights";
import { Process } from "../components/Home/Sections/Process";
import { Portfolio } from "../components/Home/Sections/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico?" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Enhance your web experience with a premium website from Tidal Sites. We offer branding, web design, web development, hosting, web maintenance, and consulting. Call today"
        />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
        <title>Tidal Sites</title>
      </Head>
      <div className="Home">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Highlights />
      </div>
    </>
  );
}