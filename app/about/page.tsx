import AdsTag from "@/components/AdsTag";
import AnalyticsTag from "@/components/AnalyticsTag";
import illustration from "@/public/assets/images/about-illustration.png";
import bio from "@/public/assets/images/bio-pic.png";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Tidal Sites",
  description:
    "Discover the story behind Tidal Sites - Your go-to web services partner in Hampton Roads, Virginia. Learn about our commitment to crafting exceptional online experiences, our team's expertise, and our dedication to elevating your digital presence. Explore our journey today!",
};

const About: FC = () => {
  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      <div className="mt-[--navbar-height]">
        <div className="px-4 py-6 bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover bg-center text-[--white]">
          <div className="mx-auto max-w-page">
            <h1 className="text-4xl">About Us</h1>
            <span>Who are we?</span>
            <p className="max-w-[50ch] px-9 py-4 mx-auto mt-6 text-xl relative before:absolute before:border-t-2 before:border-l-2 before:border-[--white] before:w-12 before:h-12 before:top-0 before:left-0 after:absolute after:border-b-2 after:border-r-2 after:border-[--white] after:w-12 after:h-12 after:bottom-0 after:right-0">
              We are passionate about crafting unparalleled web experiences that
              make a lasting impact. Our mission is to enhance your online
              presence, improve user engagement, and drive measurable results
              for your business.
            </p>
          </div>
        </div>
        <section className="px-4 flex flex-col max-w-page mx-auto place-content-center md:flex-row w-full">
          <div className="p-4 flex justify-between flex-col md:w-[50%] border-b-gray-200 border-b-2 relative after:absolute after:w-4 after:h-4 after:bg-gray-200 after:border-2 after:border-gray-300 after:bottom-[-9px] after:left-[50%] after:rotate-45 after:shadow-xl md:border-0 md:border-r-2 md:after:top-[50%] md:after:left-auto md:after:right-[-9px]">
            <h2 className="text-lg italic">Mission</h2>
            <p className="text-xl text-[--black] py-20">
              To craft digital success stories that help businesses thrive.
            </p>
          </div>
          <div className="p-4 grid placeholder-center md:w-[50%]">
            <h2 className="text-lg italic">Values</h2>
            <p className="text-xl text-[--black] py-20 mx-auto">
              Quality, Quality, Quality
            </p>
          </div>
        </section>
        <section className="bg-gray-200">
          <div className="max-w-page mx-auto py-10 flex gap-8 flex-col px-4">
            <p className="max-w-[65ch] mx-auto text-lg">
              Our mission and core values are not mere statements on a website;
              they are the guiding principles that fuel our passion, drive our
              innovation, and ensure that your experience with Tidal Sites is
              nothing short of exceptional. Crafted success and unparalleled
              Quality are not just ideals for us; they are the very fabric of
              who we are and what we offer to businesses seeking to thrive in
              the digital landscape.
            </p>
            <p className="max-w-[65ch] mx-auto text-lg font-bold">
              Welcome to Tidal Sites, where your success story begins.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-8">
          <section className="pt-20 px-4">
            <div className="max-w-page mx-auto flex justify-between gap-8">
              <div className="max-w-[65ch] leading-6">
                <h2 className="w-fit text-xl italic border-b-4 border-b-[--purple] pr-4">
                  The Company
                </h2>
                <div className="py-8">
                  <div>
                    <h3
                      className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                    >
                      What Sets Us Apart?
                    </h3>
                    <p>
                      Our team of skilled designers and developers works
                      tirelessly to bring your vision to life. We understand
                      that every business is unique, and that&apos;s why we
                      offer tailored website design solutions that cater to your
                      specific needs. Whether you&apos;re a startup, small
                      business, or established enterprise, we have the expertise
                      to deliver high-quality designs that showcase your brand
                      in the best light.
                    </p>
                  </div>
                </div>
                <div className="py-8">
                  <h3
                    className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                  >
                    Comprehensive Branding Solutions
                  </h3>
                  <p>
                    Beyond website design, our comprehensive branding services
                    ensure that your brand&apos;s personality shines through
                    every aspect of your online presence. From logo creation to
                    color palettes and visual elements, we meticulously curate
                    your brand&apos;s identity to leave a lasting impression on
                    your audience.
                  </p>
                </div>
                <div className="py-8">
                  <h3
                    className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                  >
                    Seamless Hosting and Maintenance
                  </h3>
                  <p>
                    To ensure your website is always up and running at its best,
                    we offer top-notch hosting and maintenance services. Our
                    team takes care of all the technical aspects, from updates
                    and backups to security monitoring, so you can focus on
                    growing your business with peace of mind.
                  </p>
                </div>
                <div className="py-8">
                  <h3
                    className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                  >
                    SEO-Friendly Web Design
                  </h3>
                  <p>
                    In today&apos;s competitive digital landscape, having a
                    stunning website is not enough. That&apos;s why we implement
                    SEO best practices right from the start. Our SEO-friendly
                    web design ensures that your site is search engine
                    optimized, helping you climb the ranks and reach a wider
                    audience.
                  </p>
                </div>
                <div className="py-8">
                  <h3
                    className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                  >
                    Responsive and User-Centric Designs
                  </h3>
                  <p>
                    With the majority of internet users browsing on mobile
                    devices, responsive design is no longer an option but a
                    necessity. Our team ensures that your website adapts
                    flawlessly to any screen size, providing a smooth and
                    engaging user experience across all devices.
                  </p>
                </div>
                <div className="py-8">
                  <h3
                    className={`text-2xl w-fit py-2 mb-4 font-bold ${rubik.className}`}
                  >
                    Explore Our Web Services
                  </h3>
                  <p>
                    Whether you need a website overhaul, a brand refresh, or an
                    e-commerce platform, Tidal Sites has got you covered. Our
                    array of web services includes e-commerce development,
                    content management systems, and custom application
                    development.
                  </p>
                  <p>
                    Join our growing list of satisfied clients who have
                    experienced the Tidal Sites difference. Discover the power
                    of web design that captivates, converts, and stands out in
                    the digital sea. Partner with us today and let&apos;s embark
                    on a journey towards web excellence together.
                  </p>
                  <a
                    href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
                    target="_blank"
                    className="flex gap-2 bg-[--purple] text-[--white] w-fit px-4 py-2 rounded-full items-center my-10 outline outline-2 outline-[--purple] -outline-offset-2 hover:outline-offset-4 transition-all"
                  >
                    <FaEnvelope className="text-[--white] text-2xl" />
                    Email Us Today
                  </a>
                </div>
              </div>
              <div className="hidden xl:flex items-center">
                <Image src={illustration} alt="" loading="lazy" />
              </div>
            </div>
          </section>
          <section className="bg-gradient-to-tr from-gray-900 via-black via-30% to-gray-900 text-[--white] py-10 px-4 w-full">
            <div className="max-w-page mx-auto">
              <h2 className="w-fit text-xl italic border-b-4 border-b-[--purple] pr-4 mb-8">
                The Team
              </h2>
              <div className="flex flex-wrap gap-4">
                <Image
                  width="200"
                  height="200"
                  src={bio}
                  alt="Devin Haynes"
                  className="max-w-[200px] max-h-[200px] outline-double outline-[8px] outline-[--white] -outline-offset-4 rounded-full"
                />
                <div className="max-w-prose flex flex-col">
                  <span className="text-lg">Devin Haynes</span>
                  <span className="text-sm">Founder</span>
                  <p className="py-4 text-white/80">
                    Devin is the founder and sole-proprietor of Tidal Sites. He
                    is currently the only member of the team and manages all
                    services and aspects of the business.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
