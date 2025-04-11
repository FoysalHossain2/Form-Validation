"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Step3FormData, Step3FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type AccountFromProps = {
  onSubmit: (data: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => void;
  onBack: () => void;
};

const AccountFrom = ({ onSubmit, onBack }: AccountFromProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Step3FormSchema),
  });

  const submitForm = (formData: Step3FormData) => {
    console.log(formData, "formData");
    onSubmit({
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  };

  console.log(errors, "errors"); // Check Errors

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-left mb-6 text-black dark:text-white lg:text-2xl text-lg">
        Account
      </h2>
      <Field label="Username">
        <input
          {...register("username")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
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
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[600px]  xl:max-w-[700px] ${
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
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
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

      {/*------ button section -------*/}
      <div className="pt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-28 border rounded-2xl py-1 px-3 lg:text-base text-sm text-white bg-green-500 hover:bg-green-600"
        >
          Previous
        </button>

        <button
          type="submit"
          className="w-28 border font-bold rounded-2xl py-1 px-3 lg:text-base text-sm text-white bg-green-500 hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AccountFrom;
