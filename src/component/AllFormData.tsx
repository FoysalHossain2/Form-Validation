"use client";

import PersonalInformation from "@/component/PersonalInformation";
import { useState } from "react";
import AccountSetup from "./AccountSetup";
import AddressDetails from "./AddressDetails";

export type FormDataType = {
  personalInfo: {
    name?: string;
    email?: string;
    phone?: string;
  };
  addressInfo: {
    address?: string;
    city?: string;
    zip?: string;
  };
  accountInfo: {
    username?: string;
    password?: string;
  };
};

const AllFormData = () => {
  const steps = ["PersonalInformation", "AddressDetails", "AccountSetup"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    personalInfo: {},
    addressInfo: {},
    accountInfo: {},
  });

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center text-black ">
      <div className="mt-14">
        {currentStep === 1 && (
          <PersonalInformation
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && (
          <AddressDetails
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 3 && (
          <AccountSetup
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>

      {currentStep === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Summary</h2>

          <div>
            <h3 className="font-semibold">Personal Info</h3>
            <pre>{JSON.stringify(formData.personalInfo, null, 2)}</pre>
          </div>

          <div>
            <h3 className="font-semibold">Address Info</h3>
            <pre>{JSON.stringify(formData.addressInfo, null, 2)}</pre>
          </div>

          <div>
            <h3 className="font-semibold">Account Info</h3>
            <pre>{JSON.stringify(formData.accountInfo, null, 2)}</pre>
          </div>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => console.log("Submit", formData)}
          >
            Submit
          </button>
        </div>
      )}

      <div className="mt-6 flex gap-x-32">
        {currentStep > 1 && (
          <button
            className="text-white bg-blue-500 px-3 py-2 w-28 rounded-md hover:bg-blue-600 transition z-50"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}

        {currentStep < steps.length && (
          <button
            className="text-white bg-blue-500 px-3 py-2 w-28 rounded-md hover:bg-blue-600 transition cursor-pointer"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllFormData;
