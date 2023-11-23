"use client";
import { useForm } from "react-hook-form";
import { ContactSchema, type TContactSchema } from "@/lib/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

// Icons
import { RiSendPlaneLine, RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSpinner,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { sendEmail } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tidal Sites Contact",
  description:
    "Connect with Tidal Sites – Your Gateway to Digital Excellence. Reach out for inquiries, quotes, or consultations. Let's collaborate to turn your digital vision into reality. Elevate your brand with tailored web solutions.",
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  async function sendContactForm(data: TContactSchema) {
    const results = await sendEmail(data);

    if (results.success) {
      toast.success("Email sent successfully. We'll be in touch shortly");
    }

    if (!results.success) {
      toast.error("We were unable to process your request");
    }
    reset();
  }
  return (
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

        <form
          className="flex flex-wrap mx-4 gap-20 p-8 rounded-lg shadow-2xl bg-gradient-to-br from-[--purple] to-violet-600"
          onSubmit={handleSubmit(sendContactForm)}
        >
          <div className="flex flex-col gap-4">
            <label className="flex flex-col text-sm text-white">
              First Name
              <input
                className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black]"
                {...register("first_name")}
                type="text"
              />
              {errors["first_name"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["first_name"].message}
                </span>
              )}
            </label>
            <label className="flex flex-col text-sm text-white">
              Last Name
              <input
                className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black]"
                {...register("last_name")}
                type="text"
              />
              {errors["last_name"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["last_name"].message}
                </span>
              )}
            </label>
            <label className="flex flex-col text-sm text-white">
              Company Name
              <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white">
                <input
                  className="text-lg text-[--black]"
                  {...register("company_name")}
                  type="text"
                />
                <MdOutlineCorporateFare className="text-gray-400 text-2xl" />
              </div>
              {errors["company_name"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["company_name"].message}
                </span>
              )}
            </label>
            <label className="flex flex-col text-sm text-white">
              Phone
              <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white items-center">
                <input
                  className="text-lg text-[--black]"
                  {...register("phone")}
                  type="text"
                />
                <FaPhone className="text-gray-400 text-xl" />
              </div>
              {errors["phone"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["phone"].message}
                </span>
              )}
            </label>
            <label className="flex flex-col text-sm text-white">
              Email
              <div className="border-[1px] border-[--black] flex gap-2 rounded-lg px-2 py-1 bg-white items-center">
                <input
                  className="text-lg text-[--black]"
                  {...register("email")}
                  type="email"
                />
                <FaEnvelope className="text-gray-400 text-xl" />
              </div>
              {errors["email"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["email"].message}
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col justify-between">
            <label className="flex flex-col text-sm text-white">
              Description
              <textarea
                {...register("description")}
                rows={10}
                className="border-[1px] border-[--black] rounded-lg px-2 py-1 text-lg text-[--black] min-w-[300px] w-full"
                placeholder="Describe what it is you are looking for today..."
              ></textarea>
              {errors["description"] && (
                <span className="text-sm text-white mt-1 flex items-center gap-1">
                  <RiErrorWarningFill className="text-xl text-red-600 bg-white rounded-full" />
                  {errors["description"].message}
                </span>
              )}
            </label>
            <button
              className="flex items-center gap-[1px] mt-8 ml-auto bg-[--white] text-[--black] rounded-full px-4 py-1 text-lg outline outline-2 -outline-offset-2 outline-white group hover:outline-offset-2 transition-all"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
              {isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <RiSendPlaneLine className="text-2xl text-[--purple] group-hover:text-3xl group-hover:translate-x-2 transition-all" />
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
