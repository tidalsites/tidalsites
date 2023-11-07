import { FC } from "react";
import Link from "next/link";
import styles from "../../../styles/ServiceSection.module.scss";
import home_styles from "../../../styles/Home.module.scss";

export const Services: FC = () => {
  const { services__header, services__list, service__name, service__icon } =
    styles;
  const { home__section__header } = home_styles;
  return (
    <section className="Home__services Home__section" id="Services">
      <div className={services__header}>
        <span className={home__section__header}>SERVICES</span>
        <Link href="/services">
          <span>View all services</span>
          <span className="material-icons" role="img">
            east
          </span>
        </Link>
      </div>
      <div className={services__list}>
        <ul>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              fingerprint
            </span>
            <span className={service__name}>Branding</span>
            <p>
              Branding is the bedrock of your business identity, encompassing
              the creation of a distinctive and memorable presence in your
              industry. Our comprehensive branding service ensures strategic
              communication of your story, values, and essence, fostering
              recognition and trust to boost your online visibility and business
              success.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              web
            </span>
            <span className={service__name}>Web Design</span>
            <p>
              Our web design service merges creativity and functionality,
              crafting visually captivating and user-centric digital
              experiences. We prioritize seamless navigation, aesthetic appeal,
              and responsive design, creating websites that captivate visitors
              and enhance your online presence.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              code
            </span>
            <span className={service__name}>Web Development</span>
            <p>
              Our web development service is the force behind your online
              success, translating your vision into robust, high-performance
              websites using cutting-edge technology. From seamless
              functionality to efficient coding, our development ensures a
              powerful online presence, fostering user engagement for long-term
              success.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              cloud
            </span>
            <span className={service__name}>Hosting</span>
            <p>
              Our hosting service provides the digital infrastructure for a
              seamless online presence. With reliable servers, top-tier
              security, and unmatched support, we ensure your website remains
              fast, secure, and accessible 24/7. Experience worry-free hosting,
              optimizing your site's performance and reliability.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              build
            </span>
            <span className={service__name}>Maintenance</span>
            <p>
              Cultivating a thriving online presence requires consistent care
              and upkeep. Our maintenance service ensures your website remains
              at its peak performance. From regular updates, security checks, to
              technical optimizations, we safeguard your online investment,
              guaranteeing a seamless and reliable user experience.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              contact_support
            </span>
            <span className={service__name}>Consulting</span>
            <p>
              Our consultation services are your gateway to unlocking digital
              potential. With tailored strategies, we offer expert guidance,
              analyzing your specific needs and goals. Gain actionable insights
              and a roadmap for success, empowering your online presence and
              business growth.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
