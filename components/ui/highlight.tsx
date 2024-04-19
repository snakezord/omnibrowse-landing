import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-yellow-500 dark:bg-emerald-700/[0.2] dark:text-yellow-500",
        className,
      )}
    >
      {children}
    </span>
  );
};
