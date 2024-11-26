import { Metadata } from "next";
import { FC } from "react";

import portfolioData from "./portfolio.json";

// Images
import ProsoftWeb from "@/public/assets/images/prosoft-web-min.png";
import AtoBWeb from "@/public/assets/images/atob-web-min.png";
import DWBWeb from "@/public/assets/images/dwbuilders-web.png";
import HHGWeb from "@/public/assets/images/hartshollergraphics-web-min.png";
import XPRTHomeWeb from "@/public/assets/images/xprt-web-min.png";
import ConcrecalWeb from "@/public/assets/images/concrecal-web-min.png";
import OlokunWeb from "@/public/assets/images/olokun-web.webp";

// Logos
import AtoBLogo from "@/public/assets/logos/atob.svg";
import ConcrecalLogo from "@/public/assets/logos/concrecal-logo.svg";
import DictumSquareLogo from "@/public/assets/logos/dictum-square-logo.png";
import ElevatorLogo from "@/public/assets/logos/elevator.png";
import FourSquareCalcLogo from "@/public/assets/logos/foursquare.svg";
import GladiatorLogo from "@/public/assets/logos/gladiator-logo.png";
import TidalSitesLogo from "@/public/assets/logos/logo.svg";
import PlanetLogo from "@/public/assets/logos/planet.svg";
import SunriseLogo from "@/public/assets/logos/sunrise.svg";
import XPRTHomeLogo from "@/public/assets/logos/xprt-logo.png";

// Components
import AdsTag from "@/components/AdsTag";
import AnalyticsTag from "@/components/AnalyticsTag";
import Image from "next/image";
import { PortfolioCard } from "./PortfolioCard";

export const metadata: Metadata = {
  title: "Tidal Sites Portfolio",
  description:
    "Discover our success stories at Tidal Sites' Portfolio. Explore a diverse collection of accomplished projects showcasing our web design, development, and branding expertise. Witness how we've empowered businesses to thrive online.",
};

function getImage(imgName: string) {
  switch (imgName) {
    case "olokun":
      return OlokunWeb;
    case "concrecal":
      return ConcrecalWeb;
    case "xprt":
      return XPRTHomeWeb;
    case "atob":
      return AtoBWeb;
    case "prosoft":
      return ProsoftWeb;
    case "hhg":
      return HHGWeb;
    case "dwb":
      return DWBWeb;
    default:
      return OlokunWeb;
  }
}

const Portfolio: FC = () => {
  const { portfolio } = portfolioData;
  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      <div className="mt-[--navbar-height]">
        <div className="py-6 px-4 bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover bg-center text-[--white] mb-20">
          <div className="mx-auto max-w-page">
            <h1 className="text-4xl">Portfolio</h1>
            <span>Check out our work</span>
            <p className="text-center my-6 text-xl max-w-prose px-9 py-4 mx-auto relative before:absolute before:border-t-2 before:border-l-2 before:border-[--white] before:w-12 before:h-12 before:top-0 before:left-0 after:absolute after:border-b-2 after:border-r-2 after:border-[--white] after:w-12 after:h-12 after:bottom-0 after:right-0">
              Tidal Sites is dedicated to ensuring your designs are unique,
              beautiful, and functional across any device.
            </p>
          </div>
        </div>

        <section className="sm:px-4">
          <div className="py-4 px-4 sm:px-0 mb-10 max-w-page mx-auto">
            <h2 className="text-2xl">WEBSITES</h2>
          </div>
          <div className="grid sm:grid-cols-portfolio grid-rows-[300px_auto_auto_auto] gap-y-20 place-items-center">
            {portfolio.map((item, i) => {
              const { title, imgSrc, alt, description, tags, link } = item;
              const position = i % 2 === 0 ? "left" : "right";

              const img = getImage(imgSrc);
              return (
                <PortfolioCard
                  title={title}
                  imgSrc={img}
                  alt={alt}
                  description={description}
                  tags={tags}
                  position={position}
                  link={link}
                  key={`PortfolioCard_${title}`}
                />
              );
            })}
            {/* <div>
              <div className="text-xl py-4 my-4">Olokun</div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Image
                  src={OlokunWeb}
                  alt="Olokun LLC"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  priority
                />
                <p className="max-w-scale">
                  Olokun LLC sought to improve their website in order to stand
                  out amongst their competition. Tidal Sites provided a
                  comprehensive design strategy to improve their digital
                  presence. Not only did Tidal Sites improve their mobile
                  responsiveness and overall design asthetic, but we also
                  improved the User Experience by strategically placing content
                  across pages and sections. The resulting website provides a
                  great visual and intuitive experience for Olokuns clientelle.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 justify-start">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">Concrecal</div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Image
                  src={ConcrecalWeb}
                  alt="Concrecal"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="454"
                />
                <p className="max-w-scale">
                  Concrecal Proyectos, based in the Dominican Republic, sought
                  to enhance their digital presence. Tidal Sites stepped in,
                  crafting a captivating website that beautifully showcases
                  their services. We also took their existing logo to the next
                  level, ensuring a polished and refined brand image. Witness
                  how Tidal Sites brought a touch of professionalism and
                  aesthetic finesse to Concrecal Proyectos&apos; online
                  identity.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 justify-start">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Branding - Logo</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">XPRT Home</div>
              <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center">
                <Image
                  src={XPRTHomeWeb}
                  alt="XPRT Home"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="455"
                />
                <p className="max-w-prose">
                  XPRT Home, specializing in home renovation and building
                  services, recognized the importance of a strong online
                  presence. Tidal Sites stepped in to create a compelling
                  website that not only attracts additional clients but also
                  establishes a solid foundation for this new company. Our
                  services extended to crafting a brand new logo, ensuring XPRT
                  Home is impeccably represented.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 md:justify-center xl:justify-end">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Branding - Logo</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Graphic Design</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">AtoB Towing</div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Image
                  src={AtoBWeb}
                  alt="AtoB Towing"
                  className="border-2 border-[--white] rounded-lg shadow-lg"
                  width="768"
                  height="388"
                />
                <p className="max-w-prose">
                  AtoB Towing, a local towing company in the Hampton Roads area
                  of Virginia, sought to distinguish themselves in a competitive
                  market. Tidal Sites embarked on a website redesign mission,
                  delivering not only a modern and functional layout but also
                  integrating a unique &apos;find-me&apos; service on their
                  homepage. Now, potential tow clients can effortlessly send
                  their exact coordinates to AtoB Towing, ensuring swift
                  assistance.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 justify-start">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">Prosoft</div>
              <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center">
                <Image
                  src={ProsoftWeb}
                  alt="Prosoft Engineering"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="388"
                />
                <p className="max-w-prose">
                  Prosoft Engineering, a provider of engineering services,
                  recognized the importance of a modern online presence to
                  showcase their capabilities. Tidal Sites answered the call,
                  delivering a revamped website designed for a seamless user
                  experience. Our touch extended to ensuring mobile
                  responsiveness, providing a dynamic platform that adapts to
                  various devices.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 md:justify-center xl:justify-end">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">Harts Holler Graphics</div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                <Image
                  src={HHGWeb}
                  alt="Harts Holler Graphics"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="454"
                />
                <p className="max-w-prose">
                  Harts Holler Graphics, a go-to for sublimation and printing
                  excellence, envisioned a digital showcase that matched the
                  creativity they infused into every project. Tidal Sites
                  responded with more than just a stellar website - we
                  seamlessly hosted their platform, ensuring not only an
                  impressive online display of their work but also a reliable
                  and accessible hub for clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 px-4 justify-start">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl py-4 my-4">D.W. Builders</div>
              <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center">
                <Image
                  src={DWBWeb}
                  alt="D.W. Builders"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="388"
                />
                <p className="max-w-prose">
                  D.W. Builders, a prominent General Contracting company in
                  Virginia Beach, sought a straightforward yet impactful website
                  to enhance their online visibility. Tidal Sites responded with
                  a simple and effective design that not only facilitates easy
                  discovery for customers but also showcases their impressive
                  portfolio. Our solution ensures D.W. Builders&apos;
                  information is readily available online, reflecting their
                  commitment to transparency and excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 md:justify-center xl:justify-end">
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--theme] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--theme] text-2xl" />
                  <span>Hosting</span>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="px-4 bg-[url(/assets/images/section-bg.svg)] bg-no-repeat bg-cover">
          <div className="mt-20 py-10 px-4 mx-auto max-w-page">
            <h2 className="text-2xl text-[--white]">LOGOS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center mx-auto mt-10 text-sm w-fit">
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#0d7eab] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Concrecal Proyectos
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image src={ConcrecalLogo} alt="Concrecal" />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#897500] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  XPRT Home
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={XPRTHomeLogo}
                    alt="XPRT Home"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[--black] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Tidal Sites
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={TidalSitesLogo}
                    alt="Tidal Sites"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[--black] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Elevator
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image src={ElevatorLogo} alt="Elevator AI" />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#008900] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Four Square
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={FourSquareCalcLogo}
                    alt="Four Square ROI"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#ca3d00] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Sunrise Kitchen & Bath
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={SunriseLogo}
                    alt="Sunrise"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[--black] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Planetary Association
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={PlanetLogo}
                    alt="Planetary Association"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-red-600 text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  AtoB Towing
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={AtoBLogo}
                    alt="A to B Towing"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#a66731] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Gladiator
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={GladiatorLogo}
                    alt="Gladiator Home Services"
                  />
                </div>
              </div>
              <div className="shadow-lg flex flex-col w-full max-w-[200px] aspect-square rounded-lg relative">
                <p className="bg-[#d21c86] text-[--white] p-2 text-center rounded-lg w-fit outline outline-[1px] outline-[--white] absolute -mt-4 -ml-2 hidden sm:block">
                  Dictum
                </p>
                <div className="grid place-content-center p-4 h-full w-full bg-white rounded-lg outline outline-[1px] outline-[--white]">
                  <Image
                    height="100"
                    width="100"
                    src={DictumSquareLogo}
                    alt="Dictum Labs"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
