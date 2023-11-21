import Image from "next/image";

// Images
import webDesignIllustrationAlt from "@/public/assets/images/web-design-illustration-alt.svg";
import webDesignIllustrationNew from "@/public/assets/images/web-design-illustration-new.svg";
import deployIllustration from "@/public/assets/images/deploy-illustration.svg";

export const Process = () => {
  return (
    <section className="mt-20 px-4">
      <div className="mx-auto max-w-page py-10">
        <div className="mb-20">
          <h2 className="text-4xl">LOVE THE PROCESS</h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <span className="text-4xl text-[--black] border-b-2 border-b-[--black] self-start w-full p-2 bg-[--white] rounded-t-lg">
              Design
            </span>
            <Image
              src={webDesignIllustrationNew}
              alt="Woman designing web app"
              width="400"
              height="309"
            />
            <p className="w-full p-4 mt-auto">
              All websites from Tidal Sites are custom designed. No templates!
              Each customer is unique and we value and encourage anyone with a
              website to create their own unique experience on the web. Our web
              design process ensures that you are happy with the look and feel
              of your website before we even start to build anything.
            </p>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <span className="text-4xl text-[--black] border-b-2 border-b-[--black] self-start w-full p-2 bg-[--white] rounded-t-lg">
              Develop
            </span>
            <Image
              src={webDesignIllustrationAlt}
              alt="Computer and phone with digital connections"
              width="400"
              height="309"
            />
            <p className="w-full p-4 mt-auto">
              After a website is designed, it is time to build it. Once a base
              portion of the site is ready, we put it on a temporary hosting
              platform and send you a link. This allows you to have a keep
              up-to-date with all the progress we are making.
            </p>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <span className="text-4xl text-[--black] border-b-2 border-b-[--black] self-start w-full p-2 bg-[--white] rounded-t-lg">
              Deploy
            </span>
            <Image
              src={deployIllustration}
              alt="Man uploading ideas into the cloud"
              width="400"
              height="309"
            />
            <p className="w-full p-4 mt-auto">
              The site is designed. The site is built and looks just the way you
              want it. Now it is time to deploy. This is when your website goes
              publi Whether you choose your own hosting platform or choose to
              leverage Tidal Sites, we ensure a smooth process in making your
              website go live!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
