"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step1FormData, Step1FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type PersonalFromProps = {
  onSubmit: (data: {
    fullname: string;
    email: string;
    phoneNumber: string;
  }) => void;
};

const PersonalFrom = ({ onSubmit }: PersonalFromProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: zodResolver(Step1FormSchema),
  });

  const submitForm = (formData: Step1FormData) => {
    console.log(formData, "formData");
    // reset();
    onSubmit({
      fullname: formData.fullname,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-left mb-6 text-black dark:text-white lg:text-2xl text-lg">
        Personal Information
      </h2>

      <Field label="Full Name">
        <input
          {...register("fullname")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none  ${
            errors.fullname ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Full Name"
          type="text"
        />
        {errors.fullname && (
          <span className="text-red-500 text-sm">
            {errors.fullname.message}
          </span>
        )}
      </Field>

      <Field label="Email">
        <input
          {...register("email")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </Field>

      <Field label="Phone Number">
        <input
          {...register("phoneNumber")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
            errors.phoneNumber ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Phone Number"
          type="text"
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">
            {errors.phoneNumber.message}
          </span>
        )}
      </Field>

      <div className="pt-8 flex items-end justify-end">
        <button
          type="submit"
          className="w-28 border rounded-2xl py-1 px-3 lg:text-base text-sm text-white bg-green-500 hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalFrom;
