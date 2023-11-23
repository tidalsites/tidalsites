"use client";

import { ContactSchema, TContactSchema } from "@/lib/ContactSchema";
import { sendEmail } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhone, FaSpinner } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { RiErrorWarningFill, RiSendPlaneLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function ContactForm() {
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
  );
}
