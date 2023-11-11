import Image from "next/image";

// Images
import webDesignIllustrationAlt from "@/public/assets/images/web-design-illustration-alt.svg";
import webDesignIllustrationNew from "@/public/assets/images/web-design-illustration-new.svg";
import deployIllustration from "@/public/assets/images/deploy-illustration.svg";

export const Process = () => {
  return (
    <section>
      <div className="mb-20">
        <h2 className="text-4xl">LOVE THE PROCESS</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col border-2 border-black/20 rounded-lg shadow-lg items-center max-w-[400px]">
          <span className="text-4xl text-gray-900 mb-10 border-b-2 self-start w-full p-2">
            Design
          </span>
          <Image
            src={webDesignIllustrationNew}
            alt="Woman designing web app"
            width="400"
            height="309"
          />
          <p className="w-full p-4 bg-gray-100 text-gray-900 mt-auto rounded-b flex items-center h-full">
            All websites from Tidal Sites are custom designed. No templates!
            Each customer is unique and we value and encourage anyone with a
            website to create their own unique experience on the web. Our web
            design process ensures that you are happy with the look and feel of
            your website before we even start to build anything.
          </p>
        </div>
        <div className="flex flex-col border-2 border-black/20 rounded-lg shadow-lg items-center max-w-[400px]">
          <span className="text-4xl text-gray-900 mb-10 border-b-2 self-start w-full p-2">
            Develop
          </span>
          <Image
            src={webDesignIllustrationAlt}
            alt="Computer and phone with digital connections"
            width="400"
            height="309"
          />
          <p className="w-full p-4 bg-gray-100 text-gray-900 rounded-b flex items-center h-full">
            After a website is designed, it is time to build it. Once a base
            portion of the site is ready, we put it on a temporary hosting
            platform and send you a link. This allows you to have a keep
            up-to-date with all the progress we are making.
          </p>
        </div>
        <div className="flex flex-col border-2 border-black/20 rounded-lg shadow-lg items-center max-w-[400px]">
          <span className="text-4xl text-gray-900 mb-10 border-b-2 self-start w-full p-2">
            Deploy
          </span>
          <Image
            src={deployIllustration}
            alt="Man uploading ideas into the cloud"
            width="400"
            height="309"
          />
          <p className="w-full p-4 bg-gray-100 text-gray-900 mt-auto rounded-b flex items-center h-full">
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
