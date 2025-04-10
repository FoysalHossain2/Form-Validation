"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step1FormData, Step1FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type PersonalFromProps = {
  handleNext: () => void;
};

const PersonalFrom = ({ handleNext }: PersonalFromProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Step1FormData>({
    resolver: zodResolver(Step1FormSchema),
  });

  const submitForm = (formData: Step1FormData) => {
    console.log(formData, "formData");
    reset();
    handleNext();
  };

  console.log(errors, "errors"); // Check Errors

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <Field label="Full Name">
        <input
          {...register("fullname")}
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
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
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
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
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
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

      <div className="pt-8">
        <button
          type="submit"
          className="w-full text-white rounded-full py-2 transition bg-green-500 "
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default PersonalFrom;
