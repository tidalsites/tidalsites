import { FC } from "react";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
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
    <div className="mt-[--navbar-height] leading-6 max-w-[70ch] mx-auto">
      <section className="relative py-4 px-9  mb-8 after:h-12 after:w-12 after:border-b-2 after:border-r-2 after:border-[--purple] after:bottom-0 after:right-0 after:absolute before:h-12 before:w-12 before:border-t-2 before:border-l-2 before:border-[--purple] before:top-0 before:left-0 before:absolute">
        <h1
          className={`text-center font-bold text-2xl py-4 ${rubik.className}`}
        >
          Welcome to Tidal Sites - Your Gateway to Exceptional Web Experiences
        </h1>
        <p className="text-center">
          At Tidal Sites, we are passionate about crafting unparalleled web
          experiences that make a lasting impact. As a leading web design
          company, we specialize in creating custom designs that perfectly align
          with your brand identity and resonate with your target audience. Our
          mission is to enhance your online presence, improve user engagement,
          and drive measurable results for your business.
        </p>
      </section>
      <section className="py-8">
        <div>
          <h2
            className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
          >
            What Sets Us Apart?
          </h2>
          <p>
            Our team of skilled designers and developers works tirelessly to
            bring your vision to life. We understand that every business is
            unique, and that&apos;s why we offer tailored website design
            solutions that cater to your specific needs. Whether you&apos;re a
            startup, small business, or established enterprise, we have the
            expertise to deliver high-quality designs that showcase your brand
            in the best light.
          </p>
        </div>
      </section>
      <section className="py-8">
        <h2
          className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
        >
          Comprehensive Branding Solutions
        </h2>
        <p>
          Beyond website design, our comprehensive branding services ensure that
          your brand&apos;s personality shines through every aspect of your
          online presence. From logo creation to color palettes and visual
          elements, we meticulously curate your brand&apos;s identity to leave a
          lasting impression on your audience.
        </p>
      </section>
      <section className="py-8">
        <h2
          className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
        >
          Seamless Hosting and Maintenance
        </h2>
        <p>
          To ensure your website is always up and running at its best, we offer
          top-notch hosting and maintenance services. Our team takes care of all
          the technical aspects, from updates and backups to security
          monitoring, so you can focus on growing your business with peace of
          mind.
        </p>
      </section>
      <section className="py-8">
        <h2
          className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
        >
          SEO-Friendly Web Design
        </h2>
        <p>
          In today&apos;s competitive digital landscape, having a stunning
          website is not enough. That&apos;s why we implement SEO best practices
          right from the start. Our SEO-friendly web design ensures that your
          site is search engine optimized, helping you climb the ranks and reach
          a wider audience.
        </p>
      </section>
      <section className="py-8">
        <h2
          className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
        >
          Responsive and User-Centric Designs
        </h2>
        <p>
          With the majority of internet users browsing on mobile devices,
          responsive design is no longer an option but a necessity. Our team
          ensures that your website adapts flawlessly to any screen size,
          providing a smooth and engaging user experience across all devices.
        </p>
      </section>
      <section className="py-8">
        <h2
          className={`text-2xl border-b-2 border-[--purple] w-fit pr-8 py-2 mb-8 font-bold ${rubik.className}`}
        >
          Explore Our Web Services
        </h2>
        <p>
          Whether you need a website overhaul, a brand refresh, or an e-commerce
          platform, Tidal Sites has got you covered. Our array of web services
          includes e-commerce development, content management systems, and
          custom application development.
        </p>
      </section>
      <section className="p-8 rounded my-20 bg-[--purple] text-[--white] outline outline-2 outline-[--white] -outline-offset-4">
        <p>
          Join our growing list of satisfied clients who have experienced the
          Tidal Sites difference. Discover the power of web design that
          captivates, converts, and stands out in the digital sea. Partner with
          us today and let&apos;s embark on a journey towards web excellence
          together.
        </p>
        <a
          href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
          target="_blank"
          className="flex gap-2 bg-white text-[--black] w-fit px-4 py-2 rounded-full items-center my-4 outline outline-2 outline-[--white] -outline-offset-2 hover:outline-offset-4 transition-all"
        >
          <FaEnvelope className="text-[--purple] text-2xl" />
          Email Us Today
        </a>
      </section>
    </div>
  );
};

export default About;