"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step3FormData, Step3FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type AccountFrom = {
  handleNext: () => void;
};

const AccountFrom = ({ handleNext }: AccountFrom) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Step3FormData>({
    resolver: zodResolver(Step3FormSchema),
  });

  const submitForm = (formData: Step3FormData) => {
    console.log(formData, "formData");
    reset();
    handleNext();
  };

  console.log(errors, "errors"); // Check Errors

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <Field label="Username">
        <input
          {...register("username")}
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
            errors.username ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Username"
          type="text"
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </Field>

      <Field label="Password">
        <input
          {...register("password")}
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </Field>

      <Field label="Confirm Password">
        <input
          {...register("confirmPassword")}
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
            errors.confirmPassword ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Confirm Password"
          type="password"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
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

export default AccountFrom;
