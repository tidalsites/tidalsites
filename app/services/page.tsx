import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { LuCheckCircle } from "react-icons/lu";

import consultImg from "@/public/assets/images/services-consultation.png";
import brandingImg from "@/public/assets/images/services-branding.png";
import hostingImg from "@/public/assets/images/services-hosting.png";
import designImg from "@/public/assets/images/services-design.png";
import developmentImg from "@/public/assets/images/services-development.png";
import maintenanceImg from "@/public/assets/images/services-maintenance.png";

export const metadata: Metadata = {
  title: "Tidal Sites Services",
  description:
    "Explore our comprehensive suite of top-tier web solutions at Tidal Sites. From web design and development to branding, hosting, and maintenance services, discover how we elevate your online presence. Uncover tailored strategies for your digital success!",
};

const Services: FC = () => {
  return (
    <div className="mt-[--navbar-height]">
      <div className="py-20 px-4 bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover bg-center text-[--white] mb-20">
        <div className="mx-auto max-w-page">
          <h1 className="text-4xl">Services</h1>
          <span>What can we do for you?</span>
        </div>
        <p className="max-w-[50ch] px-9 py-4 mx-auto mt-10 font-bold text-xl relative before:absolute before:border-t-2 before:border-l-2 before:border-[--white] before:w-12 before:h-12 before:top-0 before:left-0 after:absolute after:border-b-2 after:border-r-2 after:border-[--white] after:w-12 after:h-12 after:bottom-0 after:right-0">
          We love the web and we love helping people improve their online
          profile! Tidal Sites offers a variety of services to get you noticed
          online.
        </p>
      </div>
      <div className="mx-auto max-w-page">
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Branding
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
            <Image
              src={brandingImg}
              alt="Woman with branding notes"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
              priority
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Building a brand can be challenging to new businesses. There is a
              lot to think about. Let Tidal Sites guide you through the process.
              Whether you are starting from scratch or need a new facelift, we
              can help. We offer logo design, iconography, color palletes,
              company naming, slogans, and anything else you might need to
              establish your brand. <br />
              <br /> Branding is your identity. Make it known who you are and
              get your message out to your audience. Building a brand is all
              about marketing and bringing in more customers.
            </p>
          </div>

          <div className="text-center mt-8">
            <span className="text-[--white]">
              Branding can include any of the following:
            </span>
            <ul className="flex flex-wrap justify-center gap-4 py-8">
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Logo Design
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Company Naming
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Slogans, Mottos, Catchphrases
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Color Pallete Choices
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Iconography
              </li>
            </ul>
          </div>
        </section>
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Web Design
          </h2>
          <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-10 py-8">
            <Image
              src={designImg}
              alt="Notebook with layouts drawn on it"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Web Design is all about making your audience happy. Tidal Sites
              designs combine functionality with a visually appealing user
              interface. We specialize in custom web design to help you stand
              apart from the competition. We always design every site to match
              your brand. You are welcome, and we encourage you, to be hands-on
              during the design process. We always value our customers input and
              feedback.
            </p>
          </div>
        </section>
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Web Development
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 py-8">
            <Image
              src={developmentImg}
              alt="Computer with code"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Tidal Sites offers secure and reliable web development. We always
              use the latest web technologies to stay ahead of the curve. Every
              website developed by us is coded by hand. Though this process may
              take a bit longer, it allows the freedom to add custom
              functionality at any time in the development process. We are never
              limited by a specific platform or methodology. Anything is
              possible!
            </p>
          </div>
        </section>
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Hosting
          </h2>
          <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-10 py-8">
            <Image
              src={hostingImg}
              alt="Server rack"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Web Hosting from Tidal Sites is secure, reliable, and affordable.
              We do not lock ourselves into a single hosting platform, as every
              website has different requirements. We offer web hosting in a
              variety of options that match your needs.
            </p>
          </div>
        </section>
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Maintenance
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
            <Image
              src={maintenanceImg}
              alt="Hand plugging in computer component"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Maintaining a website shouldn&apos;t be your burden to bear. Let
              Tidal Sites provide website maintenance so that you can focus on
              your business. We provide constant updates to make sure your
              website is secure and always online. <br />
              <br />
              We implement a PRO-active approach to website maintenance and
              always try to mitigate issues before they arise. Rest assured that
              your website will be highly available.
            </p>
          </div>
          <div className="text-center mt-8">
            <span className="text-[--white]">Maintenance items include:</span>
            <ul className="flex flex-wrap justify-center gap-4 py-8">
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Security Updates
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Content Updates
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Color Modifications
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Font Modifications
              </li>
            </ul>
          </div>
        </section>
        <section className="mx-4 mb-20 bg-gradient-to-bl from-purple-900 via-[--purple] to-purple-900 border-2 border-[--black] rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl bg-white translate-y-4 py-4 border-2 border-t-[--black] border-b-[--black] border-l-0 border-r-0 uppercase pl-4">
            Consulting
          </h2>
          <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-10 pt-8">
            <Image
              src={consultImg}
              alt="Hands pointing at data on graph"
              width="512"
              height="512"
              className="rounded-lg shadow-md"
            />
            <p className="max-w-[50ch] px-4 text-[--white]">
              Sometimes, you just need some advice. If your question is
              technical, it is likely that Tidal Sites can help. Web advice is
              our specialty, but we have experience in a number of fields. Check
              the list below. If you are unsure about a technical issue you are
              having, just give us a call. We will let you know if we are able
              to help.
            </p>
          </div>
          <div className="text-center mt-8">
            <span className="text-[--white]">
              Our consultations can include any of the following:
            </span>
            <ul className="flex flex-wrap justify-center gap-4 py-8">
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Website Management
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Project Management
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Cloud Management
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                UI/UX Design
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Mobile Apps
              </li>
              <li className="px-4 py-2 rounded-full border-2 border-[--purple] flex gap-2 items-center bg-[--white]">
                <LuCheckCircle className="text-2xl text-[--purple]" />
                Automation Services
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
