import { FC } from "react";
import Image from "next/image";
import Head from "next/head";

import brandingImg from "@/public/assets/images/service-img-branding.png";
import webDesignImg from "@/public/assets/images/service-img-design.png";
import webDevImg from "@/public/assets/images/service-img-dev.png";
import hostingImg from "@/public/assets/images/service-img-hosting.png";
import maintenanceImg from "@/public/assets/images/service-img-maintenance.png";
import consultingImg from "@/public/assets/images/service-img-consulting.png";

const Services: FC = () => {
  return (
    <>
      <Head>
        <title>Tidal Sites Services</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of top-tier web solutions at Tidal Sites. From web design and development to branding, hosting, and maintenance services, discover how we elevate your online presence. Uncover tailored strategies for your digital success!"
        />
      </Head>
      <div>
        <div>
          <div>
            <h1>Services</h1>
            <span>What can we do for you?</span>
          </div>
          <p>
            We love the web and we love helping people improve their online
            profile! Tidal Sites offers a variety of services to get you noticed
            online.
          </p>
        </div>
        <div>
          <div>
            <div>
              <h2>Branding</h2>
              <div>
                <div>
                  <Image
                    src={brandingImg}
                    alt="Man holding vague business card"
                  />
                </div>
                <p>
                  Building a brand can be challenging to new businesses. There
                  is a lot to think about. Let Tidal Sites guide you through the
                  process. Whether you are starting from scratch or need a new
                  facelift, we can help. We offer logo design, iconography,
                  color palletes, company naming, slogans, and anything else you
                  might need to establish your brand. <br />
                  <br /> Branding is your identity. Make it known who you are
                  and get your message out to your audience. Building a brand is
                  all about marketing and bringing in more customers.
                </p>
              </div>

              <div>
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
          <div>
            <div>
              <h2>Web Design</h2>
              <div>
                <div>
                  <Image
                    src={webDesignImg}
                    alt="Notebook with layouts drawn on it"
                  />
                </div>
                <p>
                  Web Design is all about making your audience happy. Tidal
                  Sites designs combine functionality with a visually appealing
                  user interface. We specialize in custom web design to help you
                  stand apart from the competition. We always design every site
                  to match your brand. You are welcome, and we encourage you, to
                  be hands-on during the design process. We always value our
                  customers input and feedback.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Web Development</h2>
              <div>
                <div>
                  <Image src={webDevImg} alt="Computer with code" />
                </div>
                <p>
                  Tidal Sites offers secure and reliable web development. We
                  always use the latest web technologies to stay ahead of the
                  curve. Every website developed by us is coded by hand. Though
                  this process may take a bit longer, it allows the freedom to
                  add custom functionality at any time in the development
                  process. We are never limited by a specific platform or
                  methodology. Anything is possible!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Hosting</h2>
              <div>
                <div>
                  <Image src={hostingImg} alt="Server rack" />
                </div>
                <p>
                  Web Hosting from Tidal Sites is secure, reliable, and
                  affordable. We do not lock ourselves into a single hosting
                  platform, as every website has different requirements. We
                  offer web hosting in a variety of options that match your
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Maintenance</h2>
              <div>
                <div>
                  <Image
                    src={maintenanceImg}
                    alt="Hand plugging in computer component"
                  />
                </div>
                <p>
                  Maintaining a website shouldn't be your burden to bear. Let
                  Tidal Sites provide website maintenance so that you can focus
                  on your business. We provide constant updates to make sure
                  your website is secure and always online. <br />
                  <br />
                  We implement a PRO-active approach to website maintenance and
                  always try to mitigate issues before they arise. Rest assured
                  that your website will be highly available.
                </p>
              </div>
              <div>
                <span>Maintenance items include:</span>
                <ul>
                  <li>Security Updates</li>
                  <li>Content Updates</li>
                  <li>Color Modifications</li>
                  <li>Font Modifications</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Consulting</h2>
              <div>
                <div>
                  <Image
                    src={consultingImg}
                    alt="Hands pointing at data on graph"
                  />
                </div>
                <p>
                  Sometimes, you just need some advice. If your question is
                  technical, it is likely that Tidal Sites can help. Web advice
                  is our specialty, but we have experience in a number of
                  fields. Check the list below. If you are unsure about a
                  technical issue you are having, just give us a call. We will
                  let you know if we are able to help.
                </p>
              </div>
              <div>
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
    </>
  );
};

export default Services;
