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
      className="flex flex-wrap justify-center xs:mx-4 gap-20 p-2 xs:p-8 rounded-lg shadow-[0_0_20px_-8px_rgba(255,255,255,.25)] bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%)]"
      onSubmit={handleSubmit(sendContactForm)}
    >
      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-sm">
          First Name
          <input
            className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)]"
            {...register("first_name")}
            type="text"
          />
          {errors["first_name"] && (
            <span className="text-sm mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["first_name"].message}
            </span>
          )}
        </label>
        <label className="flex flex-col text-sm">
          Last Name
          <input
            className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)]"
            {...register("last_name")}
            type="text"
          />
          {errors["last_name"] && (
            <span className="text-sm mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["last_name"].message}
            </span>
          )}
        </label>
        <label className="flex flex-col text-sm">
          Company Name
          <div className="flex gap-2 items-center rounded-lg py-1">
            <input
              className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)] grow"
              {...register("company_name")}
              type="text"
            />
            <MdOutlineCorporateFare className="text-gray-400 text-2xl" />
          </div>
          {errors["company_name"] && (
            <span className="text-sm mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["company_name"].message}
            </span>
          )}
        </label>
        <label className="flex flex-col text-sm ">
          Phone
          <div className="flex gap-2 items-center rounded-lg py-1">
            <input
              className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)] grow"
              {...register("phone")}
              type="text"
            />
            <FaPhone className="text-gray-400 text-xl" />
          </div>
          {errors["phone"] && (
            <span className="text-sm mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["phone"].message}
            </span>
          )}
        </label>
        <label className="flex flex-col text-sm">
          Email
          <div className="flex gap-2 items-center rounded-lg py-1">
            <input
              className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)] grow"
              {...register("email")}
              type="email"
            />
            <FaEnvelope className="text-gray-400 text-xl" />
          </div>
          {errors["email"] && (
            <span className="text-sm  mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["email"].message}
            </span>
          )}
        </label>
      </div>
      <div className="flex flex-col justify-between grow">
        <label className="flex flex-col">
          Description
          <textarea
            {...register("description")}
            rows={10}
            className="rounded-lg px-2 py-1 min-w-[300px]"
            placeholder="Describe what it is you are looking for today..."
          ></textarea>
          {errors["description"] && (
            <span className="text-sm  mt-1 flex items-center gap-1">
              <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
              {errors["description"].message}
            </span>
          )}
        </label>
        <button
          className="[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] outline outline-1 outline-offset-[3px] outline-[rgba(0,200,255,.5)] hover:outline-offset-4 hover:outline-1 focus:outline-offset-2 hover:bg-[radial-gradient(circle_at_25%_75%,rgba(0,150,200,.45),rgba(0,200,255,.45))] flex items-center gap-2 mt-8 ml-auto rounded-full px-4 py-1 text-lg group transition-all duration-200"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
          {isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <RiSendPlaneLine className="text-2xl rotate-45 group-hover:translate-x-2 transition-all" />
          )}
        </button>
      </div>
    </form>
  );
}
