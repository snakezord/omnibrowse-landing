import { PropsWithChildren } from "react";

export const NextBlueButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="rounded-md bg-[#0070f3] px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
      {children}
    </button>
  );
};
