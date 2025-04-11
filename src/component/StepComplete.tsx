const StepComplete = () => {
  return (
    <div className="flex items-center mx-auto lg:gap-x-28 gap-x-6">
      <div className="flex flex-col items-center ">
        <div className="w-7 h-7 shrink-0 mx-[-1px] bg-white dark:border-white dark:text-white dark:bg-black border-2 text-black flex items-center justify-center rounded-full">
          <span className="text-sm font-semibold">1</span>
        </div>
        <p>Personal </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-7 h-7 shrink-0 mx-[-1px] bg-white dark:border-white dark:text-white dark:bg-black border-2 text-black flex items-center justify-center rounded-full">
          <span className="text-sm font-semibold">2</span>
        </div>
        <p>Address</p>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-7 h-7 shrink-0 mx-[-1px] bg-white dark:border-white dark:text-white dark:bg-black border-2 text-black flex items-center justify-center rounded-full">
          <span className="text-sm font-semibold">3</span>
        </div>
        <p>Account</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 shrink-0 mx-[-1px] bg-white dark:border-white dark:text-white dark:bg-black border-2 text-black flex items-center justify-center rounded-full">
          <span className="text-sm font-semibold">4</span>
        </div>
        <p>Submission</p>
      </div>
    </div>
  );
};

export default StepComplete;
