import { FC } from "react";
import "./Services.scss";

import brandingImg from "../../Assets/service-img-branding.png";
import webDesignImg from "../../Assets/web-design-img.jpg";
import webDevImg from "../../Assets/web-dev-img.jpg";

export const Services: FC = () => {
  return (
    <div className="Services">
      <div className="Services__header">
        <div className="Services__header__group">
          <h1>Services</h1>
          <h4>What can we do for you?</h4>
        </div>
        <p>
          We love the web and we love helping people improve their online
          profile! Tidal Sites offers a variety of services to get you noticed
          online.
        </p>
      </div>
      <div className="Services__wrapper">
        <div className="Services__service">
          <h2 className="Services__service__header">Branding</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img src={brandingImg} alt="Man holding vague business card" />
              <p>
                Building a brand can be challenging to new businesses. There is
                a lot to think about. Let Tidal Sites guide you through the
                process. Whether you are starting from scratch or need a new
                facelift, we can help. We offer logo design, iconography, color
                palletes, company naming, slogans, and anything else you might
                need to establish your brand. <br />
                <br /> Branding is your identity. Make it known who you are and
                get your message out to your audience. Building a brand is all
                about marketing and bringing in more customers.
              </p>
            </div>

            <div className="Services__service__content__list">
              <span>Branding can include any of the following:</span>
              <ul>
                <li>Logo Design</li>
                <li>Company Naming</li>
                <li>Slogans, Mottos, Catchphrases</li>
                <li>Color Pallete Choices</li>
                <li>Iconography</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Services__service">
          <h2 className="Services__service__header">Web Design</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img
                src={webDesignImg}
                alt="Notebook with layouts drawn on it and an opened pen"
              />
              <p>
                Web Design is all about making your audience happy. Tidal Sites
                designs combine functionality with a visually appealing user
                interface. We specialize in custom web design to help you stand
                apart from the competition. We always design every site to match
                your brand. You are welcome, and we encourage you, to be
                hands-on during the design process. We always value our
                customers input and feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="Services__service">
          <h2 className="Services__service__header">Web Development</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img src={webDevImg} alt="Man holding vague business card" />
              <p>
                Tidal Sites offers secure and reliable web development. We
                always use the latest web technologies to stay ahead of the
                curve. Every website developed by us is coded by hand. Though
                this process may take a bit longer, it allows the freedom to add
                custom functionality at any time in the development process. We
                are never limited by a specific platform or methodology.
                Anything is possible!
              </p>
            </div>
          </div>
        </div>
        <div className="Services__service">
          <h2 className="Services__service__header">Hosting</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img src={brandingImg} alt="Man holding vague business card" />
              <p>
                Web Hosting from Tidal Sites is secure, reliable, and
                affordable. We do not lock ourselves into a single hosting
                platform, as every website has different requirements. We offer
                web hosting in a variety of options that match your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="Services__service">
          <h2 className="Services__service__header">Maintenance</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img src={brandingImg} alt="Man holding vague business card" />
              <p>
                Maintaining a website shouldn't be your burden to bear. Let
                Tidal Sites provide website maintenance so that you can focus on
                your business. We provide constant updates to make sure your
                website is secure and always online.
              </p>
            </div>
          </div>
        </div>
        <div className="Services__service">
          <h2 className="Services__service__header">Consulting</h2>
          <div className="Services__service__content">
            <div className="Services__service__content__main">
              <img src={brandingImg} alt="Man holding vague business card" />
              <p>
                Sometimes, you just need some advice. If your question is
                technical, it is likely that Tidal Sites can help. Web advice is
                our specialty, but we have experience in a number of fields.
              </p>
            </div>
            <div className="Services__service__content__list">
              <span>Our consultations can include any of the following:</span>
              <ul>
                <li>Website Management</li>
                <li>Project Management</li>
                <li>Cloud Management</li>
                <li>UI/UX Design</li>
                <li>Mobile Apps</li>
                <li>Automation Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
