"use client";

import { useState } from "react";
import { UseFormSchema } from "../../utils/UserForm";
import AccountFrom from "./auth/AccountFrom";
import AddressDetailsFrom from "./auth/AddressDetailsFrom";
import PersonalFrom from "./auth/PersonalFrom";
import Card from "./common/Card";
import SummaryView from "./SummaryView";

export type FormDataType = {
  personalInfo: {
    fullname?: string;
    email?: string;
    phoneNumber?: string;
  };
  addressInfo: {
    address?: string;
    city?: string;
    zipcode?: string;
  };
  accountInfo: {
    username?: string;
    password?: string;
  };
};

const MultiStepForm = () => {
  // const steps = ["PersonalInformation", "AddressDetails", "AccountSetup"];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataType>({
    personalInfo: {},
    addressInfo: {},
    accountInfo: {},
  });

  console.log(formData, "formData MultiStepFrom");

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const updateFormData = (data: Partial<UseFormSchema>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handlePersonalInfoSubmit = (data: {
    fullname: string;
    email: string;
    phoneNumber: string;
  }) => {
    updateFormData(data);
    setCurrentStep(1);
  };

  const handleAddressDetailsSubmit = (data: {
    address: string;
    city: string;
    zipcode: string;
  }) => {
    updateFormData(data);
    setCurrentStep(2);
  };

  const handleAccountSetupSubmit = (data: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => {
    updateFormData(data);
    setCurrentStep(3);
  };

  const handleFinalSubmit = () => {
    console.log("Final submission completed with data:", formData);
    setFormData({
      personalInfo: {},
      addressInfo: {},
      accountInfo: {},
    });
    setCurrentStep(0);
    alert("You have successfully  submit your information");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalFrom onSubmit={handlePersonalInfoSubmit} />;
      case 1:
        return (
          <AddressDetailsFrom
            onSubmit={handleAddressDetailsSubmit}
            onBack={goToPreviousStep}
          />
        );
      case 2:
        return (
          <AccountFrom
            onSubmit={handleAccountSetupSubmit}
            onBack={goToPreviousStep}
          />
        );
      case 3:
        return (
          <SummaryView
            formData={formData}
            onSubmit={handleFinalSubmit}
            onBack={goToPreviousStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-black dark:bg-black dark:text-white bg-white">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Data Entry Application
        </h1>
        <p className="mt-3 text-xl text-gray-500 dark:text-white">
          Please complete all steps to submit your information
        </p>
      </div>

      <Card>{renderCurrentStep()}</Card>
    </div>
  );
};

export default MultiStepForm;
