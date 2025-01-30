"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaGlobe, FaSpinner } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

const WebsiteAuditSchema = z.object({
  website: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email address"),
});

type TWebsiteAuditSchema = z.infer<typeof WebsiteAuditSchema>;

export default function WebsiteAuditForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TWebsiteAuditSchema>({
    resolver: zodResolver(WebsiteAuditSchema),
  });

  async function sendAuditRequest(data: TWebsiteAuditSchema) {
    // Replace with your actual API call
    const results = await new Promise<{ success: boolean }>((resolve) =>
      setTimeout(() => resolve({ success: true }), 2000)
    );

    if (results.success) {
      toast.success(
        "Audit request sent successfully. We'll be in touch shortly"
      );
    } else {
      toast.error("We were unable to process your request");
    }
    reset();
  }

  return (
    <div className="w-fit">
      <p className="uppercase text-lg text-left mb-4">
        Get a Free Website Audit Report
      </p>
      <form
        className="flex flex-col gap-4 py-4 rounded-lg shadow-md max-w-[40ch]"
        onSubmit={handleSubmit(sendAuditRequest)}
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
          className="transition-all w-fit rounded-full outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] text-base px-4 hover:px-6 py-2 hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
          {isSubmitting && <FaSpinner className="animate-spin ml-2" />}
        </button>
      </form>
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
        {Icon && <Icon className="text-gray-400 text-xl" />}
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
