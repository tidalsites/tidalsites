import { RiSendPlaneLine } from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="mt-[--navbar-height] min-h-page flex flex-wrap justify-center">
      <div className="px-4 rounded-lg mt-20 mr-auto">
        <h1 className="text-4xl">Contact Us</h1>
        <span>Get in Touch</span>
        <p className="max-w-prose mt-8 leading-6">
          Have questions, need a quote, or ready to kickstart your digital
          transformation? We&apos;re here to help! Reach out to us using the
          information below or fill out the form, and we&apos;ll get back to you
          promptly.
        </p>
        <div>
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
      </div>

      <form
        className="flex flex-wrap gap-20 p-8 mx-4 mb-20 rounded-lg shadow-2xl bg-gradient-to-br from-[--purple] to-violet-600 h-fit mt-20"
        action=""
      >
        <div className="flex flex-col gap-4">
          <label
            className="flex flex-col text-sm text-white"
            htmlFor="first_name"
          >
            First Name
            <input
              className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black]"
              name="first_name"
              id="first_name"
              type="text"
            />
          </label>
          <label
            className="flex flex-col text-sm text-white"
            htmlFor="last_name"
          >
            Last Name
            <input
              className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black]"
              name="last_name"
              id="last_name"
              type="text"
            />
          </label>
          <label
            className="flex flex-col text-sm text-white"
            htmlFor="company_name"
          >
            Company Name
            <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white">
              <input
                className="text-lg text-[--black]"
                name="company_name"
                id="company_name"
                type="text"
              />
              <MdOutlineCorporateFare className="text-gray-400 text-2xl" />
            </div>
          </label>
          <label className="flex flex-col text-sm text-white" htmlFor="phone">
            Phone
            <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white items-center">
              <input
                className="text-lg text-[--black]"
                name="phone"
                id="phone"
                type="text"
              />
              <FaPhone className="text-gray-400 text-xl" />
            </div>
          </label>
          <label className="flex flex-col text-sm text-white" htmlFor="email">
            Email
            <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white items-center">
              <input
                className="text-lg text-[--black]"
                name="email"
                id="email"
                type="email"
              />
              <FaEnvelope className="text-gray-400 text-xl" />
            </div>
          </label>
        </div>
        <div className="flex flex-col justify-between">
          <label
            className="flex flex-col text-sm text-white"
            htmlFor="description"
          >
            Description
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black]"
              placeholder="Describe what it is you are looking for today..."
            ></textarea>
          </label>
          <button
            className="flex items-center gap-[1px] mt-8 ml-auto bg-[--white] text-[--black] rounded-full px-4 py-1 text-lg outline outline-2 -outline-offset-2 outline-white group hover:outline-offset-2 transition-all"
            type="submit"
          >
            Submit
            <RiSendPlaneLine className="text-2xl text-[--purple] group-hover:text-3xl group-hover:translate-x-2 transition-all" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
