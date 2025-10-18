import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import brandingImg from "@/public/assets/images/services-branding.png";
import consultImg from "@/public/assets/images/services-consultation.png";
import designImg from "@/public/assets/images/services-design.png";
import developmentImg from "@/public/assets/images/services-development.png";
import hostingImg from "@/public/assets/images/services-hosting.png";
import maintenanceImg from "@/public/assets/images/services-maintenance.png";
import { Chip } from "@/components/Chip";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Tidal Sites | Services",
  description:
    "Explore our comprehensive suite of top-tier web solutions at Tidal Sites. From web design and development to branding, hosting, and maintenance services, discover how we elevate your online presence. Uncover tailored strategies for your digital success!",
};

type ServiceObject = {
  name: string;
  description: string | string[];
  imageData: {
    Img: StaticImageData;
    alt: string;
  };
  offerings?: {
    offering_statement: string;
    offerings: string[];
  };
};

const services: ServiceObject[] = [
  {
    name: "Branding",
    description:
      "Building a brand can be challenging to new businesses. There is a lot to think about. Let Tidal Sites guide you through the process. Whether you are starting from scratch or need a new facelift, we can help. We offer logo design, iconography, color palletes, company naming, slogans, and anything else you might need to establish your brand. Branding is your identity. Make it known who you are and get your message out to your audience. Building a brand is all about marketing and bringing in more customers.",
    imageData: {
      Img: brandingImg,
      alt: "Woman with branding notes",
    },
    offerings: {
      offering_statement: "Branding can include any of the following:",
      offerings: [
        "Logo Design",
        "Company Naming",
        "Slogans, Mottos, Catchphrases",
        "Color Pallete Choices",
        "Iconography",
      ],
    },
  },
  {
    name: "Web Design",
    description:
      "Web Design is all about making your audience happy. Tidal Sites designs combine functionality with a visually appealing user interface. We specialize in custom web design to help you stand apart from the competition. We always design every site to match your brand. You are welcome, and we encourage you, to be hands-on during the design process. We always value our customers input and feedback.",
    imageData: {
      Img: designImg,
      alt: "Developer at computer with creative thoughts",
    },
  },
  {
    name: "Web Development",
    description:
      "Tidal Sites offers secure and reliable web development. We always use the latest web technologies to stay ahead of the curve. Every website developed by us is coded by hand. Though this process may take a bit longer, it allows the freedom to add custom functionality at any time in the development process. We are never limited by a specific platform or methodology. Anything is possible!",
    imageData: {
      Img: developmentImg,
      alt: "Computer with code",
    },
  },
  {
    name: "Hosting",
    description:
      "Web Hosting from Tidal Sites is secure, reliable, and affordable. We do not lock ourselves into a single hosting platform, as every website has different requirements. We offer web hosting in a variety of options that match your needs.",
    imageData: {
      Img: hostingImg,
      alt: "Server rack",
    },
  },
  {
    name: "Maintenance",
    description: [
      "Maintaining a website shouldn&apos;t be your burden to bear. Let Tidal Sites provide website maintenance so that you can focus on your business. We provide constant updates to make sure your website is secure and always online.",
      "We implement a PRO-active approach to website maintenance and always try to mitigate issues before they arise. Rest assured that your website will be highly available.",
    ],
    imageData: {
      Img: maintenanceImg,
      alt: "Hand plugging in computer component",
    },
    offerings: {
      offering_statement: "Maintenance items include:",
      offerings: [
        "Security Updates",
        "Content Updates",
        "Color Modifications",
        "Font Modifications",
      ],
    },
  },
  {
    name: "Consulting",
    description:
      "Sometimes, you just need some advice. If your question is technical, it is likely that Tidal Sites can help. Web advice is our specialty, but we have experience in a number of fields. Check the list below. If you are unsure about a technical issue you are having, just give us a call. We will let you know if we are able to help.",
    imageData: {
      Img: consultImg,
      alt: "Hands pointing at data on graph",
    },
    offerings: {
      offering_statement: "Our consultations can include any of the following:",
      offerings: [
        "Website Management",
        "Project Management",
        "Cloud Management",
        "UI/UX Design",
        "Mobile Apps",
        "Automation Services",
      ],
    },
  },
];

const Services: FC = () => {
  return (
    <Page>
      <div className="pt-(--navbar-height)">
        <div className="py-6 px-4">
          <div className="mx-auto max-w-page">
            <h1 className="text-4xl">Services</h1>
            <span>What can we do for you?</span>
          </div>
        </div>
        {services.map((service, i) => (
          <ServiceSection
            key={service.name}
            image={service.imageData}
            heading={service.name}
            p={service.description}
            offerings={service.offerings}
            reverse={i % 2 === 0}
          />
        ))}
      </div>
    </Page>
  );
};

type ServiceListItemProps = {
  content: string;
};

const ServiceListItem: FC<ServiceListItemProps> = ({ content }) => {
  return (
    <li>
      <Chip text={content} />
    </li>
  );
};

type ServiceSectionProps = {
  image: {
    Img: StaticImageData;
    alt: string;
  };
  heading: string;
  p: string | string[];
  offerings?: {
    offering_statement: string;
    offerings: string[];
  };
  reverse?: boolean;
};

const ServiceSection: FC<ServiceSectionProps> = ({
  image,
  heading,
  p,
  offerings,
  reverse,
}) => {
  return (
    <section className="py-10">
      <div
        className={`flex flex-wrap items-center justify-center gap-10 pt-8 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <Image
          src={image.Img}
          alt={image.alt}
          width="512"
          height="512"
          className="sm:rounded-lg shadow-md"
        />
        <div className="px-4">
          <h2 className="text-2xl py-4 uppercase">{heading}</h2>
          {Array.isArray(p) ? (
            <div className="flex flex-col gap-4">
              {p.map((el, i) => (
                <p key={i} className="max-w-[50ch]">
                  {el}
                </p>
              ))}
            </div>
          ) : (
            <p className="max-w-[50ch]">{p}</p>
          )}
        </div>
      </div>
      {offerings && (
        <div className="sm:text-center mt-8 lg:mt-12 px-4">
          <span>Our consultations can include any of the following:</span>
          <ul className="flex flex-wrap md:justify-center px-4 gap-4 py-8">
            {offerings.offerings.map((content) => (
              <ServiceListItem key={content} content={content} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Services;
