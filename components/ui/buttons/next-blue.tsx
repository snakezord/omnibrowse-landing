import { PropsWithChildren } from "react";

export const NextBlueButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="rounded-md bg-[#0070f3] px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
      {children}
    </button>
  );
};

export const NextWhiteButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="rounded-md bg-[#fff] px-8 py-2 font-light text-[#696969] shadow-[0_4px_14px_0_rgb(0,0,0,10%)] transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]">
      {children}
    </button>
  );
};

export const BackdropBlurButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="rounded-xl bg-transparent px-8 py-2 font-bold uppercase tracking-widest shadow-[inset_0_0_0_1px_#EAB30A] transition duration-200 hover:bg-[#EAB30A] hover:text-white dark:text-neutral-200">
      {children}
    </button>
  );
};
