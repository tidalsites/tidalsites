import { FC } from "react";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import decoration from "../public/decoration.svg";

const About: FC = () => {
  const { about, img, intro, cta } = styles;

  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <div className={about}>
      <section className={intro}>
        <h1>
          Welcome to Tidal Sites - Your Gateway to Exceptional Web Experiences
        </h1>
        <p>
          At Tidal Sites, we are passionate about crafting unparalleled web
          experiences that make a lasting impact. As a leading web design
          company, we specialize in creating custom designs that perfectly align
          with your brand identity and resonate with your target audience. Our
          mission is to enhance your online presence, improve user engagement,
          and drive measurable results for your business.
        </p>
      </section>
      <section>
        <div>
          <h2>What Sets Us Apart?</h2>
          <p>
            Our team of skilled designers and developers works tirelessly to
            bring your vision to life. We understand that every business is
            unique, and that's why we offer tailored website design solutions
            that cater to your specific needs. Whether you're a startup, small
            business, or established enterprise, we have the expertise to
            deliver high-quality designs that showcase your brand in the best
            light.
          </p>
        </div>
      </section>
      <section>
        <h2>Comprehensive Branding Solutions</h2>
        <p>
          Beyond website design, our comprehensive branding services ensure that
          your brand's personality shines through every aspect of your online
          presence. From logo creation to color palettes and visual elements, we
          meticulously curate your brand's identity to leave a lasting
          impression on your audience.
        </p>
      </section>
      <section>
        <h2>Seamless Hosting and Maintenance</h2>
        <p>
          To ensure your website is always up and running at its best, we offer
          top-notch hosting and maintenance services. Our team takes care of all
          the technical aspects, from updates and backups to security
          monitoring, so you can focus on growing your business with peace of
          mind.
        </p>
      </section>
      <section>
        <h2>SEO-Friendly Web Design</h2>
        <p>
          In today's competitive digital landscape, having a stunning website is
          not enough. That's why we implement SEO best practices right from the
          start. Our SEO-friendly web design ensures that your site is search
          engine optimized, helping you climb the ranks and reach a wider
          audience.
        </p>
      </section>
      <section>
        <h2>Responsive and User-Centric Designs</h2>
        <p>
          With the majority of internet users browsing on mobile devices,
          responsive design is no longer an option but a necessity. Our team
          ensures that your website adapts flawlessly to any screen size,
          providing a smooth and engaging user experience across all devices.
        </p>
      </section>
      <section>
        <h2>Explore Our Web Services</h2>
        <p>
          Whether you need a website overhaul, a brand refresh, or an e-commerce
          platform, Tidal Sites has got you covered. Our array of web services
          includes e-commerce development, content management systems, and
          custom application development.
        </p>
      </section>
      <section className={cta}>
        <p>
          Join our growing list of satisfied clients who have experienced the
          Tidal Sites difference. Discover the power of web design that
          captivates, converts, and stands out in the digital sea. Partner with
          us today and let's embark on a journey towards web excellence
          together.
        </p>
        <a
          href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
          target="_blank"
        >
          <span className="material-icons" role="img">
            email
          </span>
          Email Us Today
        </a>
      </section>
    </div>
  );
};

export default About;
