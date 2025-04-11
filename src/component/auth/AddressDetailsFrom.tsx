"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step2FormData, Step2FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type AddressDetailsFrom = {
  onSubmit: (data: { address: string; city: string; zipcode: string }) => void;
  onBack: () => void;
};

const AddressDetailsFrom = ({ onSubmit, onBack }: AddressDetailsFrom) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Step2FormSchema),
  });

  const submitForm = (formData: Step2FormData) => {
    console.log(formData, "formData");
    onSubmit({
      address: formData.address,
      city: formData.city,
      zipcode: formData.zipcode,
    });
  };

  console.log(errors, "errors"); // Check Errors

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <h2 className="text-left mb-6 text-black dark:text-white lg:text-2xl text-lg">
        Address
      </h2>
      <Field label=" Address">
        <input
          {...register("address")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
            errors.address ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Street Address"
          type="text"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </Field>

      <Field label="City">
        <input
          {...register("city")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
            errors.city ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="City"
          type="text"
        />
        {errors.city && (
          <span className="text-red-500 text-sm">{errors.city.message}</span>
        )}
      </Field>

      <Field label="Zip Code">
        <input
          {...register("zipcode")}
          className={`w-full border bg-white dark:bg-[#1C2432] dark:text-white border-gray-300 rounded-xl text-black px-4 py-2 focus:outline-none ${
            errors.zipcode ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Zip Code"
          type="text"
        />
        {errors.zipcode && (
          <span className="text-red-500 text-sm">{errors.zipcode.message}</span>
        )}
      </Field>

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
          className="w-28 border rounded-2xl py-1 px-3 lg:text-base text-sm text-white bg-green-500 hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AddressDetailsFrom;
