import AddressDetailsFrom from "./auth/AddressDetailsFrom";

const AddressDetails = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl border w-96 p-6 relative shadow-black/50">
          <div className="text-center mb-6 text-black">
            Step 2: Address Details
          </div>

          <div className="space-y-4 mb-4">
            {/* Form */}
            <AddressDetailsFrom handleNext={handleNext} />
            {/* Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
