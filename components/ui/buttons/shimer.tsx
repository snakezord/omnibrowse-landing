import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const ShimmerButton = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <button
      disabled
      className={cn(
        "align inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:px-6",
        className,
      )}
    >
      {children}
    </button>
  );
};
