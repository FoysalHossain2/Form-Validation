"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Step2FormData, Step2FormSchema } from "../../../utils/UserForm";
import Field from "../common/Field";

type AddressDetailsFrom = {
  handleNext: () => void;
};

const AddressDetailsFrom = ({ handleNext }: AddressDetailsFrom) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Step2FormData>({
    resolver: zodResolver(Step2FormSchema),
  });

  const submitForm = (formData: Step2FormData) => {
    console.log(formData, "formData");
    reset();
    handleNext();
  };

  console.log(errors, "errors"); // Check Errors

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
      <Field label=" Address">
        <input
          {...register("address")}
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
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
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
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
          className={`w-full border bg-white border-gray-300 rounded-full text-black px-4 py-2 focus:outline-none ${
            errors.zipcode ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Zip Code"
          type="text"
        />
        {errors.zipcode && (
          <span className="text-red-500 text-sm">{errors.zipcode.message}</span>
        )}
      </Field>

      <div className="pt-8">
        <button
          // onClick={}
          type="submit"
          className="w-full text-white rounded-full py-2 transition bg-green-500 "
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default AddressDetailsFrom;
