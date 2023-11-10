import { FC } from "react";
import Link from "next/link";
import {
  MdFingerprint,
  MdWeb,
  MdCode,
  MdCloud,
  MdBuild,
  MdContactSupport,
  MdEast,
} from "react-icons/md";

export const Services: FC = () => {
  return (
    <section className="px-4">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl">SERVICES</h2>
        <Link
          className="flex items-center gap-2 rounded-full outline outline-2 -outline-offset-2 outline-[--purple] py-2 px-4 bg-[--purple] text-[--white] hover:outline-offset-2 transition-all"
          href="/services"
        >
          <span>View all services</span>
          <MdEast className="text-[--white] text-2xl" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Branding
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdFingerprint className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
              Branding is the bedrock of your business identity, encompassing
              the creation of a distinctive and memorable presence in your
              industry. Our comprehensive branding service ensures strategic
              communication of your story, values, and essence, fostering
              recognition and trust to boost your online visibility and business
              success.
            </p>
          </li>
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Web Design
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdWeb className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
              Our web design service merges creativity and functionality,
              crafting visually captivating and user-centric digital
              experiences. We prioritize seamless navigation, aesthetic appeal,
              and responsive design, creating websites that captivate visitors
              and enhance your online presence.
            </p>
          </li>
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Web Development
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdCode className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
              Our web development service is the force behind your online
              success, translating your vision into robust, high-performance
              websites using cutting-edge technology. From seamless
              functionality to efficient coding, our development ensures a
              powerful online presence, fostering user engagement for long-term
              success.
            </p>
          </li>
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Hosting
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdCloud className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
              Our hosting service provides the digital infrastructure for a
              seamless online presence. With reliable servers, top-tier
              security, and unmatched support, we ensure your website remains
              fast, secure, and accessible 24/7. Experience worry-free hosting,
              optimizing your site's performance and reliability.
            </p>
          </li>
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Maintenance
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdBuild className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
              Cultivating a thriving online presence requires consistent care
              and upkeep. Our maintenance service ensures your website remains
              at its peak performance. From regular updates, security checks, to
              technical optimizations, we safeguard your online investment,
              guaranteeing a seamless and reliable user experience.
            </p>
          </li>
          <li className="max-w-[450px] bg-[--white] p-4 shadow-lg rounded-lg border-2 border-black/10">
            <div className="flex justify-between w-full py-4">
              <span className="border-b-2 border-gray-900 w-full py-4 text-2xl">
                Consulting
              </span>
              <div className="h-20 w-20 flex justify-center items-center rounded-full border-2 border-gray-900">
                <MdContactSupport className="text-[--purple] text-4xl w-20" />
              </div>
            </div>
            <p className="py-8 px-4 bg-[--purple] text-[--white] rounded">
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
