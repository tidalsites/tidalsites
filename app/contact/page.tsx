// Icons
import AdsTag from "@/components/AdsTag";
import AnalyticsTag from "@/components/AnalyticsTag";
import { Metadata } from "next";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import ContactForm from "./form";

export const metadata: Metadata = {
  title: "Tidal Sites Contact",
  description:
    "Connect with Tidal Sites – Your Gateway to Digital Excellence. Reach out for inquiries, quotes, or consultations. Let's collaborate to turn your digital vision into reality. Elevate your brand with tailored web solutions.",
};

function Contact() {
  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      <div className="mt-[--navbar-height]">
        <div className="py-6 px-4 bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover bg-center text-[--white] mb-20">
          <div className="mx-auto max-w-page">
            <h1 className="text-4xl">Contact Us</h1>
            <span>Get in Touch</span>
            <p className="max-w-[50ch] px-9 py-4 mx-auto mt-6 text-xl relative before:absolute before:border-t-2 before:border-l-2 before:border-[--white] before:w-12 before:h-12 before:top-0 before:left-0 after:absolute after:border-b-2 after:border-r-2 after:border-[--white] after:w-12 after:h-12 after:bottom-0 after:right-0">
              Have questions, need a quote, or ready to kickstart your digital
              transformation? We&apos;re here to help! Reach out to us using the
              information below or fill out the form, and we&apos;ll get back to
              you promptly.
            </p>
          </div>
        </div>
        <section className="flex flex-wrap gap-8 justify-between max-w-page mx-auto items-center mb-20">
          <div className="mx-4">
            <h2 className="text-2xl">CONTACT INFORMATION</h2>
            <a
              href="mailto:devin@tidalsites.com"
              target="_blank"
              className="flex gap-2 items-center my-4 py-2 w-fit underline"
            >
              <FaEnvelope className="text-xl" />
              devin@tidalsites.com
            </a>

            <a
              href="tel:757-550-0830"
              className="flex gap-2 items-center my-4 py-2 w-fit underline"
            >
              <FaPhone />
              (757) 550-0830
            </a>
            <div className="flex gap-8 pt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/tidalsites"
                aria-label="Linkedin"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Tidal-Sites/61553610020184/"
                aria-label="Facebook"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/tidalsites/"
                aria-label="Instagram"
              >
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </div>
    </>
  );
}

export default Contact;
