import { PropsWithChildren } from "react";

export const LitUpBorders = ({ children }: PropsWithChildren) => {
  return (
    <button className="relative p-[3px]">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="group relative  rounded-[6px] bg-black  px-8 py-2 text-white transition duration-200 hover:bg-transparent">
        {children}
      </div>
    </button>
  );
};
