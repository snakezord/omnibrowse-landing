import { ShimmerButton } from "@/components/ui/buttons/shimer";
import { IconArrowDown } from "@tabler/icons-react";
import { SignupFormDemo } from "@/components/Form";
import { Highlight } from "@/components/ui/highlight";

export const Cta = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-4 xl:items-start">
      <ShimmerButton>
        <div className="flex items-center gap-4">
          <p>Coming soon. 50% off for early adopters</p>
          <IconArrowDown className="h-4 w-4 text-neutral-500 dark:text-white" />
        </div>
      </ShimmerButton>
      <SignupFormDemo />
    </div>
  );
};
