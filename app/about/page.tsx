import { Bio } from "@/components/Bio";
import Page from "@/components/Page";
import illustration from "@/public/assets/images/about-illustration.png";
import { TBio } from "@/types/types";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tidal Sites | About Us",
  description:
    "Discover the story behind Tidal Sites - Your go-to web services partner in Hampton Roads, Virginia. Learn about our commitment to crafting exceptional online experiences, our team's expertise, and our dedication to elevating your digital presence. Explore our journey today!",
};

const bios: TBio[] = [
  {
    name: "Devin Haynes",
    title: "Founder",
    bio: [
      "Devin has over 14 years of experience in the IT industry. His passion brought him into Web Development, where he strives to build the best web experiences for his clients.",
      "Devin currently oversees all Marketing and Services for Tidal Sites.",
      "Devin achieved his B.S. in Computer Science from ECPI University in 2019.",
    ],
  },
];

const About: FC = () => {
  return (
    <Page>
      <div className="pt-[--navbar-height] dark:bg-[--dark-theme]">
        <section>
          <div className="max-w-page mx-auto py-10 flex gap-8 flex-col px-4">
            <p className="max-w-[65ch] mx-auto text-3xl font-bold pt-10 py-2 uppercase border-b-2 border-[--theme]">
              Welcome to Tidal Sites, where your success story begins.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-8">
          <section className="pt-20 px-4">
            <div className="max-w-page mx-auto flex justify-between gap-8">
              <div className="max-w-[65ch] leading-6">
                <h2 className="w-fit text-xl italic border-b-4 border-b-[--theme] pr-4">
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
                  <Link
                    href="/contact"
                    className="flex gap-2 bg-[--theme] text-[--white] w-fit px-4 py-2 rounded-full items-center my-10 outline outline-2 outline-[--theme] -outline-offset-2 hover:outline-offset-2 focus:outline-offset-2 transition-all"
                  >
                    <FaEnvelope className="text-[--white] text-2xl" />
                    Email Us Today
                  </Link>
                </div>
              </div>
              <div className="hidden xl:flex items-center">
                <Image src={illustration} alt="" loading="lazy" />
              </div>
            </div>
          </section>
          <section className="py-10 px-4 w-full">
            <div className="max-w-page mx-auto">
              <h2 className="w-fit text-xl italic border-b-4 border-b-[--theme] pr-4 mb-8">
                The Team
              </h2>
              <div className="flex flex-wrap gap-12">
                {bios.map((bio, i) => (
                  <Bio
                    key={`bio_${i}`}
                    name={bio.name}
                    title={bio.title}
                    bio={bio.bio}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default About;
