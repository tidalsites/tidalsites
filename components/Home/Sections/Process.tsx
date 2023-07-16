import Image from "next/image";
import styles from "../../../styles/ProcessSection.module.scss";
import home_styles from "../../../styles/Home.module.scss";

// Images
import webDesignImg from "../../../public/web-design-img.jpg";
// import webDesignIllustration from "../../../public/web-design-illustration.svg";
import WebDevImg from "../../../public/web-dev-img.jpg";
import WebDeployImg from "../../../public/web-deploy-img.jpg";

export const Process = () => {
  const { process, header, content, col } = styles;
  const { home__section__header } = home_styles;
  return (
    <section className={process} id="Process">
      <div className={`${home__section__header} ${header}`}>
        <span>LOVE THE PROCESS</span>
        <button>Learn more</button>
      </div>
      <div className={content}>
        <div className={col}>
          <span>Design</span>
          <Image
            src={webDesignImg}
            alt="Notebook with layouts drawn on it and an opened pen"
          />
          <p>
            All websites from Tidal Sites are custom designed. No templates!
            Each customer is unique and we value and encourage anyone with a
            website to create their own unique experience on the web. Our web
            design process ensures that you are happy with the look and feel of
            your website before we even start to build anything.
          </p>
        </div>
        <div className={col}>
          <span>Develop</span>
          <Image src={WebDevImg} alt="Laptop with notebook and pen on desk" />
          <p>
            After a website is designed, it is time to build it. Once a base
            portion of the site is ready, we put it on a temporary hosting
            platform and send you a link. This allows you to have a keep
            up-to-date with all the progress we are making.
          </p>
        </div>
        <div className={col}>
          <span>Deploy</span>
          <Image src={WebDeployImg} alt="Server rack" />
          <p>
            The site is designed. The site is built and looks just the way you
            want it. Now it is time to deploy. This is when your website goes
            publi Whether you choose your own hosting platform or choose to
            leverage Tidal Sites, we ensure a smooth process in making your
            website go live!
          </p>
        </div>
      </div>
    </section>
  );
};
