// "use client";

import PersonalFrom from "./auth/PersonalFrom";

const PersonalInformation = ({ handleNext, formData, setFormData }) => {
  return (
    <div className="  flex items-center justify-center">
      <div className="bg-white rounded-xl border w-96 p-6 relative shadow-black/50">
        <div className="text-center mb-6 text-black">
          Step 1: Personal Information
        </div>

        <div className="space-y-4 mb-4">
          {/* Form */}
          <PersonalFrom
            handleNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
          {/* Form */}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
