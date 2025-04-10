import AccountFrom from "./auth/AccountFrom";

interface AccountSetupProps {
  handleNext: () => void;
}

const AccountSetup = ({ handleNext }: AccountSetupProps) => {
  return (
    <div>
      <div className=" flex items-center justify-center">
        <div className="bg-white rounded-xl border w-96 p-6 relative shadow-black/50">
          <div className="text-center mb-6 text-black">
            Step 3: Setup your Account
          </div>

          <div className="space-y-4 mb-4">
            {/* Form */}
            <AccountFrom handleNext={handleNext} />
            {/* Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
