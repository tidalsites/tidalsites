import { RiSendPlaneLine } from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
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
            <div className="border-[1px] border-[--black] flex rounded-lg px-2 py-1 bg-white">
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
            <div className="border-[1px] border-[--black] flex rounded-lg px-2 py-1 bg-white items-center">
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
            <div className="border-[1px] border-[--black] flex rounded-lg px-2 py-1 bg-white items-center">
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
            className="flex items-center gap-[1px] mt-8 ml-auto bg-[--white] text-[--purple] rounded-full px-4 py-1 text-lg"
            type="submit"
          >
            Submit
            <RiSendPlaneLine className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
