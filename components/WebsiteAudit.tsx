"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaGlobe, FaSpinner } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { WebsiteAuditSchema, TWebsiteAuditSchema } from "@/lib/AuditSchema";
import { getCaptchaToken } from "@/utils/captcha";

export default function WebsiteAuditForm({
  closeDialog,
}: {
  closeDialog?: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TWebsiteAuditSchema>({
    resolver: zodResolver(WebsiteAuditSchema),
  });

  async function sendAuditRequest(data: TWebsiteAuditSchema) {
    try {
      // Get reCAPTCHA token
      const token = await getCaptchaToken("audit");

      // Show initial toast message and reset the form
      toast.success(
        "Thank you for your request. We are processing your audit. This may take several minutes."
      );

      reset();
      if (closeDialog) {
        closeDialog();
      }

      const results = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, token }),
      }).then((res) => res.json());

      if (!results) {
        toast.error("An unexpected error occurred. Please try again.");
        return;
      }

      if (results.success) {
        toast.success(
          "Your audit request has been processed. You will receive an email shortly."
        );
      } else {
        if (
          results.error === "Token not found" ||
          results.error === "reCAPTCHA verification failed. Please try again."
        ) {
          toast.error(
            "reCaptcha verification failed. Please make sure you are not a robot."
          );
        } else if (results.error === "unknown") {
          toast.error("We were unable to process your request.");
        } else if (
          results.error === "Rate limit exceeded. Please try again tomorrow."
        ) {
          toast.error(
            "You are only allowed one submission per day. Please try again tomorrow."
          );
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      toast.error("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className="w-fit bg-black p-8 pb-2 rounded-2xl shadow-card">
      <p className="uppercase text-2xl text-left mb-4 border-b-2 border-b-[--theme]">
        Get a Free Website Audit Report
      </p>
      <p className="max-w-[50ch] text-left text-sm mb-4">
        See how your website is performing. We will perform an automated
        analysis and send you the results. Quick and easy!
      </p>
      <form
        className="flex flex-col gap-4 py-4 rounded-lg shadow-md max-w-[40ch]"
        onSubmit={handleSubmit(sendAuditRequest)}
        method="dialog"
      >
        <Label
          name="Website"
          error={errors.website?.message}
          registration={{ name: "website", register }}
          Icon={FaGlobe}
        />
        <Label
          name="Email"
          error={errors.email?.message}
          registration={{ name: "email", register }}
          Icon={FaEnvelope}
          type="email"
        />

        <button
          className="transition-all w-fit rounded-full flex gap-4 items-center outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] text-base px-4 hover:px-6 py-2 hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)] disabled:text-gray-500 disabled:bg-gray-800 disabled:hover:px-4 disabled:hover:text-shadow-none disabled:hover:bg-gray-800 disabled:hover:shadow-none"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          {isSubmitting && (
            <FaSpinner className="animate-spin ml-2 text-2xl text-[--theme]" />
          )}
        </button>
      </form>
      <small className="text-gray-400">* Limited to one audit per day</small>
    </div>
  );
}

type LabelProps = {
  name: string;
  error?: string;
  registration: {
    name: keyof TWebsiteAuditSchema;
    register: UseFormRegister<TWebsiteAuditSchema>;
  };
  Icon?: React.ComponentType<{ className?: string }>;
  type?: "email" | "text" | "url";
};

const Label: FC<LabelProps> = ({
  name,
  error,
  registration,
  Icon,
  type = "text",
}) => {
  return (
    <label className="flex flex-col text-left">
      {name}
      <div className="flex gap-2 items-center rounded-lg py-1">
        <input
          className="rounded-lg px-2 py-1 focus:outline focus:outline-[1px] focus:outline-blue-500 grow"
          {...registration.register(registration.name)}
          type={type}
        />
        {Icon && <Icon className="text-gray-400 text-xl hidden xs:block" />}
      </div>
      {error && (
        <span className="text-sm mt-1 flex items-center gap-1 text-red-600">
          <RiErrorWarningFill className="text-xl" />
          {error}
        </span>
      )}
    </label>
  );
};
