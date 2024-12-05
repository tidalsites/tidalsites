"use client";

/**
 *
 * TODO:
 * Fix view transition to only apply to the content section
 * Currently the entire page transitions, causing screen flicker
 */

import Link from "next/link";
import { FC, useEffect, useMemo, useState } from "react";

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

  // const switchViewWithTransition = (service: Service) => {
  //   if (!document.startViewTransition) {
  //     console.warn("View Transitions API is not supported in this browser.");
  //     return setActiveService(service);
  //   }
  //   document.startViewTransition(() => {
  //     setActiveService(service);
  //   });
  // };

  const services: Service[] = useMemo(() => {
    return [
      "Branding",
      "Web Design",
      "Web Development",
      "Hosting",
      "Maintenance",
      "Consulting",
    ];
  }, []);

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

  // const handleServiceClick = (service: Service) => {
  //   switchViewWithTransition(service);
  //   // Temporarily disable auto-play functionality
  //   setAutoPlayServices(false);
  // };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    // If window is resized, disable auto-play functionality
    window.addEventListener("resize", () => setAutoPlayServices(false));

    // If window is less than 820px, disable auto-play functionality
    if (window.innerWidth < 820) {
      setAutoPlayServices(false);
    }

    if (autoPlayServices) {
      interval = setInterval(() => {
        const currentIndex = services.indexOf(activeService);
        const nextIndex =
          currentIndex === services.length - 1 ? 0 : currentIndex + 1;
        // switchViewWithTransition(services[nextIndex]);
        setActiveService(services[nextIndex]);
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
  }, [activeService, autoPlayServices, services]);

  return (
    <section className="px-4 mb-20 relative isolate">
      <div className="max-w-page mx-auto py-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <ul className="text-3xl flex lg:flex-col justify-center flex-wrap gap-8 lg:gap-2 [&>*:nth-child(odd)]:lg:bg-none [&>*:nth-child(even)]:lg:bg-none [&>*:nth-child(odd)]:bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%),linear-gradient(45deg,transparent,rgba(0,200,255,.125),rgba(0,0,0,.5),transparent)] [&>*:nth-child(even)]:bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%),linear-gradient(135deg,transparent,rgba(0,200,255,.125),rgba(0,0,0,.5),transparent)]">
            {services.map((service) => (
              <li
                key={service}
                className="w-fit lg:w-full px-4 sm:px-20 rounded-2xl lg:bg-transparent lg:bg-none shadow-[0_0_12px_-6px_rgba(255,255,255,.5)] lg:shadow-none outline-1 outline outline-[rgba(0,200,255,.25)] lg:outline-none"
              >
                <ServiceItem
                  service={service}
                  active={service === activeService}
                  handleServiceClick={setActiveService}
                />
                <p className="xs:text-lg text-base max-w-[40ch] lg:hidden pb-8">
                  {ServiceContent[service]}
                </p>
              </li>
            ))}
          </ul>
          <div className="hidden w-full h-full box-border p-4 rounded-lg lg:grid content-center bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%)] shadow-[2px_2px_8px_0px_rgba(255,255,255,.125)]">
            <p className="text-lg max-w-[40ch] mx-auto ">
              {ServiceContent[activeService]}
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center py-10">
          <Link
            href="/services"
            className="transition-all w-fit rounded-full px-4 hover:px-6 py-2 outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
          >
            Explore All Services
          </Link>
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
    <div
      className={`transition-all relative py-4 dark:border-[--white] max-w-[30ch] flex items-center rounded-lg cursor-pointer hover:lg:bg-[rgba(0,0,0,.5)] hover:lg:px-4 ${
        active
          ? "lg:bg-[rgba(0,0,0,.5)] lg:outline lg:outline-1 lg:outline-[rgba(0,200,255,.25)] lg:px-4"
          : ""
      }`}
      onClick={() => handleServiceClick(service)}
    >
      {active && (
        <FaForward className="hidden lg:block text-3xl transition-all" />
      )}

      <p
        className={
          active
            ? "lg:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] lg:px-4 border-b-2 border-[rgba(0,200,255,.5)] pr-8 lg:border-none"
            : "border-b-2 border-[rgba(0,200,255,.5)] pr-8 lg:border-none"
        }
      >
        {service}
      </p>
    </div>
  );
};
