import Image from "next/image";
import illustration from "../../../public/splash-illustration.svg";

export const Hero = () => {
  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <section className="flex h-[100vh] w-full relative">
      <div className="flex flex-col gap-4 content-center mx-auto text-gray-800 px-12 my-auto">
        <h1 className="flex flex-col gap-2 text-4xl font-bold">
          <span className="translate-y-[100%] animate-[shiftUp_750ms_linear_250ms_forwards]">
            ELEVATE
          </span>
          <span className="translate-y-[100%] animate-[shiftUp_750ms_linear_500ms_forwards]">
            YOUR DIGITAL
          </span>
          <span className="translate-y-[100%] animate-[shiftUp_750ms_linear_750ms_forwards]">
            EXPERIENCE
          </span>
        </h1>
        <p>Tailored Web Design Solutions to Enhance Your Brands Unique Voice</p>
        <div>
          {/* <button onClick={handleShowContactModal}>
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </button> */}
          <a
            href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
            target="_blank"
          >
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </a>
          <a href="tel:757-550-0830">
            <span className="material-icons" role="img">
              phone
            </span>
            Call now
          </a>
        </div>
      </div>
      <div>
        <Image src={illustration} alt="" height="875" width="740" />
      </div>
    </section>
  );
};
