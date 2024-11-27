"use client";

import { FC, useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   MdFingerprint,
//   MdWeb,
//   MdCode,
//   MdCloud,
//   MdBuild,
//   MdContactSupport,
//   MdEast,
// } from "react-icons/md";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

type Service =
  | "Branding"
  | "Web Design"
  | "Web Development"
  | "Hosting"
  | "Maintenance"
  | "Consulting";

export const Services: FC = () => {
  const [activeService, setActiveService] = useState<Service>("Branding");
  const [autoPlayServices, setAutoPlayServices] = useState<boolean>(true);

  const switchViewWithTransition = (service: Service) => {
    if (!document.startViewTransition) {
      console.warn("View Transitions API is not supported in this browser.");
      return setActiveService(service);
    }
    document.startViewTransition(() => {
      setActiveService(service);
    });
  };

  const services: Service[] = [
    "Branding",
    "Web Design",
    "Web Development",
    "Hosting",
    "Maintenance",
    "Consulting",
  ];

  type ServiceContent = {
    [key in Service]: string;
  };

  const ServiceContent = {
    Branding: `Branding is the bedrock of your business identity, encompassing the creation of a distinctive and memorable presence in your industry. Our comprehensive branding service ensures strategic communication of your story, values, and essence, fostering recognition and trust to boost your online visibility and business success.`,
    "Web Design": `Our web design service merges creativity and functionality, crafting visually captivating and user-centric digital experiences. We prioritize seamless navigation, aesthetic appeal, and responsive design, creating websites that captivate visitors and enhance your online presence.`,
    "Web Development": `Our web development service is the force behind your online success, translating your vision into robust, high-performance websites using cutting-edge technology. From seamless functionality to efficient coding, our development ensures a powerful online presence, fostering user engagement for long-term success.`,
    Hosting: `Our hosting service provides the digital infrastructure for a seamless online presence. With reliable servers, top-tier security, and unmatched support, we ensure your website remains fast, secure, and accessible 24/7. Experience worry-free hosting, optimizing your site's performance and reliability.`,
    Maintenance: `Cultivating a thriving online presence requires consistent care and upkeep. Our maintenance service ensures your website remains at its peak performance. From regular updates, security checks, to technical optimizations, we safeguard your online investment, guaranteeing a seamless and reliable user experience.`,
    Consulting: `Our consultation services are your gateway to unlocking digital potential. With tailored strategies, we offer expert guidance, analyzing your specific needs and goals. Gain actionable insights and a roadmap for success, empowering your online presence and business growth.`,
  };

  const handleServiceClick = (service: Service) => {
    switchViewWithTransition(service);
    // Temporarily disable auto-play functionality
    setAutoPlayServices(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (autoPlayServices) {
      interval = setInterval(() => {
        const currentIndex = services.indexOf(activeService);
        const nextIndex =
          currentIndex === services.length - 1 ? 0 : currentIndex + 1;
        switchViewWithTransition(services[nextIndex]);
      }, 4000);
    } else {
      timeout = setTimeout(() => {
        setAutoPlayServices(true);
      }, 12000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeService, autoPlayServices]);

  return (
    <section className="px-4 mb-20 relative isolate">
      <div className="max-w-page mx-auto py-10">
        <div className="">
          {/* <h2 className="text-2xl">Services</h2> */}
          {/* <p className="text-4xl uppercase pt-10 mb-10 border-b-2 border-[--theme]">
            Find out how our services can help you
          </p> */}
          {/* <div className="absolute top-0 bg-[radial-gradient(ellipse_at_25%_50%,var(--theme)_2px,transparent_50%)] z-[-1] overflow-visible"></div> */}
          {/* <h2 className="text-4xl text-[--white]">SERVICES</h2>
          <Link
            className="flex items-center gap-2 rounded-full outline outline-2 -outline-offset-2 outline-[--white] py-2 px-4 bg-[--theme] text-[--white] hover:outline-offset-2 focus:outline-offset-2 focus:bg-[--white] focus:text-[--black] transition-all"
            href="/services"
          >
            <span>View all services</span>
            <MdEast className="text-2xl" />
          </Link> */}
        </div>
        {/* <div className="text-[--black]">
          <ul className="flex flex-wrap gap-4 justify-center">
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Branding
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-[--black]">
                  <MdFingerprint className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Branding is the bedrock of your business identity, encompassing
                the creation of a distinctive and memorable presence in your
                industry. Our comprehensive branding service ensures strategic
                communication of your story, values, and essence, fostering
                recognition and trust to boost your online visibility and
                business success.
              </p>
            </li>
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Web Design
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                  <MdWeb className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Our web design service merges creativity and functionality,
                crafting visually captivating and user-centric digital
                experiences. We prioritize seamless navigation, aesthetic
                appeal, and responsive design, creating websites that captivate
                visitors and enhance your online presence.
              </p>
            </li>
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Web Development
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                  <MdCode className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Our web development service is the force behind your online
                success, translating your vision into robust, high-performance
                websites using cutting-edge technology. From seamless
                functionality to efficient coding, our development ensures a
                powerful online presence, fostering user engagement for
                long-term success.
              </p>
            </li>
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Hosting
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                  <MdCloud className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Our hosting service provides the digital infrastructure for a
                seamless online presence. With reliable servers, top-tier
                security, and unmatched support, we ensure your website remains
                fast, secure, and accessible 24/7. Experience worry-free
                hosting, optimizing your site&apos;s performance and
                reliability.
              </p>
            </li>
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Maintenance
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                  <MdBuild className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Cultivating a thriving online presence requires consistent care
                and upkeep. Our maintenance service ensures your website remains
                at its peak performance. From regular updates, security checks,
                to technical optimizations, we safeguard your online investment,
                guaranteeing a seamless and reliable user experience.
              </p>
            </li>
            <li className="max-w-[450px] bg-[--white] p-4 rounded-lg shadow-lg border-2 border-black/10">
              <div className="flex justify-between w-full py-4">
                <span className="border-b-2 border-[--black] w-full py-4 text-2xl">
                  Consulting
                </span>
                <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                  <MdContactSupport className="text-[--theme] text-4xl w-20" />
                </div>
              </div>
              <p className="py-8 text-[--black] rounded">
                Our consultation services are your gateway to unlocking digital
                potential. With tailored strategies, we offer expert guidance,
                analyzing your specific needs and goals. Gain actionable
                insights and a roadmap for success, empowering your online
                presence and business growth.
              </p>
            </li>
          </ul>
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <ul className="text-3xl flex flex-col gap-2">
            {services.map((service) => (
              <ServiceItem
                key={service}
                service={service}
                active={service === activeService}
                handleServiceClick={handleServiceClick}
              />
            ))}
          </ul>
          <div className="w-full h-full box-border p-4 rounded-lg grid content-center bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%)] shadow-[2px_2px_8px_0px_rgba(255,255,255,.125)]">
            <p className="text-lg max-w-[40ch] mx-auto ">
              {ServiceContent[activeService]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

type ServiceItemProps = {
  service: Service;
  active: boolean;
  handleServiceClick: (service: Service) => void;
};

const ServiceItem: FC<ServiceItemProps> = ({
  service,
  active,
  handleServiceClick,
}) => {
  return (
    <li
      className={`transition-all relative py-4 dark:border-[--white] max-w-[30ch] flex items-center rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,.5)] hover:px-4 ${
        active
          ? "bg-[rgba(0,0,0,.5)] outline outline-1 outline-[rgba(0,200,255,.25)] px-4"
          : ""
      }`}
      onClick={() => handleServiceClick(service)}
    >
      {active && <FaForward className="text-3xl transition-all" />}

      <p
        className={
          active
            ? "[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] px-4"
            : ""
        }
      >
        {service}
      </p>
      <FaRegArrowAltCircleRight className="text-4xl hover:text-5xl transition-all md:hidden" />
    </li>
  );
};
