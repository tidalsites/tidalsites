import { Metadata } from "next";
import { FC } from "react";

import portfolioData from "./portfolio.json";

// Images
import ProsoftWeb from "@/public/assets/images/prosoft-web-min.png";
import AtoBWeb from "@/public/assets/images/atob-web-min.png";
import DWBWeb from "@/public/assets/images/dwbuilders-web.png";
import HHGWeb from "@/public/assets/images/hartshollergraphics-web-min.png";
import XPRTHomeWeb from "@/public/assets/images/xprt-web-min.png";
import ConcrecalWeb from "@/public/assets/images/concrecal-web-min.png";
import OlokunWeb from "@/public/assets/images/olokun-web.webp";

// Components
import { PortfolioCard } from "./PortfolioCard";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Tidal Sites Portfolio",
  description:
    "Discover our success stories at Tidal Sites' Portfolio. Explore a diverse collection of accomplished projects showcasing our web design, development, and branding expertise. Witness how we've empowered businesses to thrive online.",
};

function getImage(imgName: string) {
  switch (imgName) {
    case "olokun":
      return OlokunWeb;
    case "concrecal":
      return ConcrecalWeb;
    case "xprt":
      return XPRTHomeWeb;
    case "atob":
      return AtoBWeb;
    case "prosoft":
      return ProsoftWeb;
    case "hhg":
      return HHGWeb;
    case "dwb":
      return DWBWeb;
    default:
      return OlokunWeb;
  }
}

const Portfolio: FC = () => {
  const { portfolio } = portfolioData;
  return (
    <Page>
      <div className="pt-(--navbar-height)">
        <div className="py-6 px-4 text-(--white) mb-20">
          <div className="mx-auto max-w-page">
            <h1 className="text-4xl">Portfolio</h1>
            <span>Check out our work</span>
          </div>
        </div>

        <section className="sm:px-4 pb-20">
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 xl:gap-10 place-items-center">
            {portfolio.map((item, i) => {
              const { title, imgSrc, alt, description, tags, link } = item;
              const position = i % 2 === 0 ? "left" : "right";

              const img = getImage(imgSrc);
              return (
                <PortfolioCard
                  title={title}
                  imgSrc={img}
                  alt={alt}
                  description={description}
                  tags={tags}
                  position={position}
                  link={link}
                  key={`PortfolioCard_${title}`}
                />
              );
            })}
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Portfolio;
