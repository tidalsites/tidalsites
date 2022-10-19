import Image from "next/image";

import webDesignImg from "../../../public/web-design-img.jpg";
import WebDevImg from "../../../public/web-dev-img.jpg";
import WebDeployImg from "../../../public/web-deploy-img.jpg";

export const Process = () => {
  return (
    <section className="Home__process Home__section" id="Process">
      <div className="Home__process__header Home__section__header">
        <span>LOVE THE PROCESS</span>
        <button>Learn more</button>
      </div>
      <div className="Home__process__content">
        <div className="Home__process__content__col">
          <span>Design</span>
          <p>
            All websites from Tidal Sites are custom designed. No templates!
            Each customer is unique and we value and encourage anyone with a
            website to create their own unique experience on the web. Our web
            design process ensures that you are happy with the look and feel of
            your website before we even start to build anything.
          </p>
          <Image
            src={webDesignImg}
            alt="Notebook with layouts drawn on it and an opened pen"
          />
        </div>
        <div className="Home__process__content__col">
          <span>Develop</span>
          <p>
            After a website is designed, it is time to build it. Once a base
            portion of the site is ready, we put it on a temporary hosting
            platform and send you a link. This allows you to have a keep
            up-to-date with all the progress we are making.
          </p>
          <Image src={WebDevImg} alt="Laptop with notebook and pen on desk" />
        </div>
        <div className="Home__process__content__col">
          <span>Deploy</span>
          <p>
            The site is designed. The site is built and looks just the way you
            want it. Now it is time to deploy. This is when your website goes
            public. Whether you choose your own hosting platform or choose to
            leverage Tidal Sites, we ensure a smooth process in making your
            website go live!
          </p>
          <Image src={WebDeployImg} alt="Server rack" />
        </div>
      </div>
    </section>
  );
};
