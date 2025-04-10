import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div>
      <div className="  flex items-center justify-center">
        <div className="bg-white rounded-xl border  max-w-[320px] sm:max-w-[480px] md:max-w-[600px]  xl:w-[800px] p-6 relative ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
