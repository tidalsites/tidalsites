import { FC } from "react";
import { Metadata } from "next";

// Images
// import ProsoftWeb from "@/public/assets/images/prosoft-web.png";
import ProsoftWeb from "@/public/assets/images/prosoft-web-min.png";
// import AtoBWeb from "@/public/assets/images/atob-web.png";
import AtoBWeb from "@/public/assets/images/atob-web-min.png";
// import HHGWeb from "@/public/assets/images/hartshollergraphics-web.png";
import HHGWeb from "@/public/assets/images/hartshollergraphics-web-min.png";
import DWBWeb from "@/public/assets/images/dwbuilders-web.png";
// import XPRTHomeWeb from "@/public/assets/images/xprt-web.png";
import XPRTHomeWeb from "@/public/assets/images/xprt-web-min.png";
// import ConcrecalWeb from "@/public/assets/images/concrecal-web.png";
import ConcrecalWeb from "@/public/assets/images/concrecal-web-min.png";

// Logos
import GladiatorLogo from "@/public/assets/logos/gladiator-logo.png";
import DictumSquareLogo from "@/public/assets/logos/dictum-square-logo.png";
import AtoBLogo from "@/public/assets/logos/atob.svg";
import TidalSitesLogo from "@/public/assets/logos/logo.svg";
import XPRTHomeLogo from "@/public/assets/logos/xprt-logo.png";
import FourSquareCalcLogo from "@/public/assets/logos/foursquare.svg";
import SunriseLogo from "@/public/assets/logos/sunrise.svg";
import PlanetLogo from "@/public/assets/logos/planet.svg";
import ConcrecalLogo from "@/public/assets/logos/concrecal-logo.svg";
import ElevatorLogo from "@/public/assets/logos/elevator.png";

// Components
import Image from "next/image";
import { LuCheckCircle } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Tidal Sites Services",
  description:
    "Discover our success stories at Tidal Sites' Portfolio. Explore a diverse collection of accomplished projects showcasing our web design, development, and branding expertise. Witness how we've empowered businesses to thrive online.",
};

const Portfolio: FC = () => {
  return (
    <div className="mt-[--navbar-height]">
      <div className="py-20 mx-4">
        <h1 className="text-4xl">Portfolio</h1>
        <span>Check out our work</span>
        <p className="text-center my-10 text-xl max-w-prose px-9 py-4 mx-auto font-bold relative before:absolute before:border-t-2 before:border-l-2 before:border-[--purple] before:w-12 before:h-12 before:top-0 before:left-0 after:absolute after:border-b-2 after:border-r-2 after:border-[--purple] after:w-12 after:h-12 after:bottom-0 after:right-0">
          Tidal Sites is dedicated to ensuring your designs are unique,
          beautiful, and functional across any device.
        </p>
      </div>

      <div className="mx-4">
        <div className="py-4 mb-10">
          <h2 className="text-2xl">WEBSITES</h2>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-br from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              Concrecal
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center p-4">
              <Image
                src={ConcrecalWeb}
                alt="Concrecal"
                className="border-2 border-[--white] rounded-lg shadow-lg"
                width="768"
                height="454"
                priority
              />
              <p className="max-w-scale">
                Concrecal Proyectos, based in the Dominican Republic, sought to
                enhance their digital presence. Tidal Sites stepped in, crafting
                a captivating website that beautifully showcases their services.
                We also took their existing logo to the next level, ensuring a
                polished and refined brand image. Witness how Tidal Sites
                brought a touch of professionalism and aesthetic finesse to
                Concrecal Proyectos&apos; online identity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-2 px-4 justify-start">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Hosting</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Branding - Logo</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-tr from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              XPRT Home
            </div>
            <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center p-4">
              <Image
                src={XPRTHomeWeb}
                alt="XPRT Home"
                className="border-2 border-[--white] rounded-lg shadow-lg"
                width="768"
                height="455"
              />
              <p className="max-w-prose">
                XPRT Home, specializing in home renovation and building
                services, recognized the importance of a strong online presence.
                Tidal Sites stepped in to create a compelling website that not
                only attracts additional clients but also establishes a solid
                foundation for this new company. Our services extended to
                crafting a brand new logo, ensuring XPRT Home is impeccably
                represented.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-2 px-4 justify-end">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Hosting</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Branding - Logo</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-br from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              AtoB Towing
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center p-4">
              <Image
                src={AtoBWeb}
                alt="AtoB Towing"
                className="border-2 border-[--white] rounded-lg shadow-lg"
                width="768"
                height="388"
              />
              <p className="max-w-prose">
                AtoB Towing, a local towing company in the Hampton Roads area of
                Virginia, sought to distinguish themselves in a competitive
                market. Tidal Sites embarked on a website redesign mission,
                delivering not only a modern and functional layout but also
                integrating a unique &apos;find-me&apos; service on their
                homepage. Now, potential tow clients can effortlessly send their
                exact coordinates to AtoB Towing, ensuring swift assistance.
              </p>
            </div>
            <div className="flex gap-4 py-2 px-4 justify-start">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Hosting</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-tr from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              Prosoft
            </div>
            <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center p-4">
              <Image
                src={ProsoftWeb}
                alt="Prosoft Engineering"
                className="border-2 border-[--white] rounded-lg shadow-lg"
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
            <div className="flex flex-wrap gap-4 py-2 px-4 justify-end">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-tl from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              Harts Holler Graphics
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center p-4">
              <Image
                src={HHGWeb}
                alt="Harts Holler Graphics"
                className="border-2 border-[--white] rounded-lg shadow-lg"
                width="768"
                height="454"
              />
              <p className="max-w-prose">
                Harts Holler Graphics, a go-to for sublimation and printing
                excellence, envisioned a digital showcase that matched the
                creativity they infused into every project. Tidal Sites
                responded with more than just a stellar website - we seamlessly
                hosted their platform, ensuring not only an impressive online
                display of their work but also a reliable and accessible hub for
                clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-2 px-4 justify-start">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Hosting</span>
              </div>
            </div>
          </div>
          <div className="border-2 border-[--black] rounded-lg bg-gradient-to-tr from-[--black] via-slate-600 to-[--black] text-white shadow-2xl">
            <div className="text-xl py-4 my-4 bg-[--white] border-l-0 border-r-0 border-t-2 border-b-2 border-[--black] pl-4 text-[--black]">
              D.W. Builders
            </div>
            <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center p-4">
              <Image
                src={DWBWeb}
                alt="D.W. Builders"
                className="border-2 border-[--white] rounded-lg shadow-lg"
                width="768"
                height="388"
              />
              <p className="max-w-prose">
                D.W. Builders, a prominent General Contracting company in
                Virginia Beach, sought a straightforward yet impactful website
                to enhance their online visibility. Tidal Sites responded with a
                simple and effective design that not only facilitates easy
                discovery for customers but also showcases their impressive
                portfolio. Our solution ensures D.W. Builders&apos; information
                is readily available online, reflecting their commitment to
                transparency and excellence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-2 px-4 justify-end">
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Web Design</span>
              </div>
              <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                <LuCheckCircle className="text-[--purple] text-2xl" />
                <span>Hosting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 mx-4">
        <div>
          <h2 className="text-2xl">LOGOS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-10">
          <div className="shadow-lg flex flex-col">
            <p className="bg-[#0d7eab] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Concrecal Proyectos</span>
            </p>
            <div className="grid content-center p-4 aspect-square">
              <Image
                height="100"
                width="100"
                src={ConcrecalLogo}
                alt="Concrecal"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="shadow-lg flex flex-col">
            <p className="bg-[#897500] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">XPRT Home</span>
            </p>
            <div className="grid content-center p-4 aspect-square">
              <Image
                height="100"
                width="100"
                src={XPRTHomeLogo}
                alt="XPRT Home"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[--black] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Tidal Sites</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={TidalSitesLogo}
                alt="Tidal Sites"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[--black] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Elevator</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={ElevatorLogo}
                alt="Elevator AI"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[#008900] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Four Square</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={FourSquareCalcLogo}
                alt="Four Square ROI"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[#ca3d00] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Sunrise Kitchen & Bath</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={SunriseLogo}
                alt="Sunrise"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[--black] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Planetary Association</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={PlanetLogo}
                alt="Planetary Association"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-red-600 text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">AtoB Towing</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={AtoBLogo}
                alt="A to B Towing"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[#a66731] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Gladiator</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={GladiatorLogo}
                alt="Gladiator Home Services"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg aspect-square">
            <p className="bg-[#d21c86] text-[--white] p-2 text-lg text-center">
              <span className="hidden lg:block">Dictum</span>
            </p>
            <div className="grid content-center p-4 aspect-square bg-white">
              <Image
                height="100"
                width="100"
                src={DictumSquareLogo}
                alt="Dictum Labs"
                className="my-auto mx-auto h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
