import { UseFormSchema } from "../../utils/UserForm";

interface SummaryViewProps {
  formData: UseFormSchema;
  onSubmit: () => void;
  onBack: () => void;
}

const SummaryView = ({ formData, onSubmit, onBack }: SummaryViewProps) => {
  return (
    <div>
      <div className="space-y-6 form-step">
        <>
          <div className="pt-6">
            <h3 className="text-lg font-medium mb-3">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-muted-foreground">Full Name</div>
              <div>{formData.fullname}</div>
              <div className="text-muted-foreground">Email</div>
              <div>{formData.email}</div>
              <div className="text-muted-foreground">Phone Number</div>
              <div>{formData.phoneNumber}</div>
            </div>

            <hr className="my-4" />

            <h3 className="text-lg font-medium mb-3">Address Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-muted-foreground">Street Address</div>
              <div>{formData.address}</div>
              <div className="text-muted-foreground">City</div>
              <div>{formData.city}</div>
              <div className="text-muted-foreground">Zip Code</div>
              <div>{formData.zipcode}</div>
            </div>

            <hr className="my-4" />

            <h3 className="text-lg font-medium mb-3">Account Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-muted-foreground">Username</div>
              <div>{formData.username}</div>
              <div className="text-muted-foreground">Password</div>
              <div>{formData.password}</div>
            </div>
          </div>
        </>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="w-28 border rounded-2xl py-1 px-3 lg:text-base text-sm text-white bg-green-500 hover:bg-green-600"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="w-28 lg:text-base text-sm font-semibold rounded-2xl py-2 px-3 transition text-white bg-green-500 hover:bg-green-600 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
