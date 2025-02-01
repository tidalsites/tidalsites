"use client";

import { ContactSchema, TContactSchema } from "@/lib/ContactSchema";
import { sendEmail } from "@/lib/actions";
import { getCaptchaToken } from "@/utils/captcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
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
    // Recaptcha
    const token = await getCaptchaToken("contact");
    const results = await sendEmail(data, token);

    if (results.success) {
      toast.success("Email sent successfully. We'll be in touch shortly");
    }

    if (!results.success) {
      if (
        results.error === "Token not found" ||
        results.error === "reCAPTCHA verification failed. Please try again."
      ) {
        toast.error("Recaptcha failed. Please try again.");
      } else if (results.error === "unknown") {
        toast.error("We were unable to process your request.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
    reset();
  }

  return (
    <form
      className="flex flex-wrap lg:justify-center xs:mx-4 gap-x-20 gap-y-4 p-2 xs:p-8 rounded-lg shadow-[0_0_20px_-8px_rgba(255,255,255,.25)] bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%)]"
      onSubmit={handleSubmit(sendContactForm)}
    >
      <div className="flex flex-col gap-4">
        <Label
          name="First Name"
          error={errors["first_name"]?.message}
          registration={{ name: "first_name", register }}
        />
        <Label
          name="Last Name"
          error={errors["last_name"]?.message}
          registration={{ name: "last_name", register }}
        />
        <Label
          name="Company Name"
          error={errors["company_name"]?.message}
          registration={{ name: "company_name", register }}
          Icon={MdOutlineCorporateFare}
        />
        <Label
          name="Phone"
          error={errors["phone"]?.message}
          registration={{ name: "phone", register }}
          Icon={FaPhone}
        />
        <Label
          name="Email"
          error={errors["email"]?.message}
          registration={{ name: "email", register }}
          Icon={FaEnvelope}
          type="email"
        />
      </div>
      <div className="flex flex-col gap-4 justify-between grow">
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
          className="ml-auto transition-all w-fit rounded-full flex gap-4 items-center outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] text-base px-4 hover:px-6 py-2 hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)] disabled:text-gray-500 disabled:bg-gray-800 disabled:hover:px-4 disabled:hover:text-shadow-none disabled:hover:bg-gray-800 disabled:hover:shadow-none"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          {isSubmitting && (
            <FaSpinner className="animate-spin ml-2 text-2xl text-[--theme]" />
          )}
        </button>
      </div>
    </form>
  );
}

type LabelProps = {
  name: string;
  error?: string;
  registration: {
    name: keyof TContactSchema;
    register: UseFormRegister<TContactSchema>;
  };
  Icon?: IconType;
  type?: "email" | "text" | "tel";
};

const Label: FC<LabelProps> = ({
  name,
  error,
  registration,
  Icon,
  type = "text",
}) => {
  return (
    <label className="flex flex-col">
      {name}
      <div className="flex gap-2 items-center rounded-lg py-1">
        <input
          className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)] grow"
          {...registration.register(registration.name)}
          type={type}
        />
        {Icon && <Icon className="text-gray-400 text-xl" />}
      </div>
      {error && (
        <span className="text-sm mt-1 flex items-center gap-1">
          <RiErrorWarningFill className="text-xl text-red-600 rounded-full" />
          {error}
        </span>
      )}
    </label>
  );
};
