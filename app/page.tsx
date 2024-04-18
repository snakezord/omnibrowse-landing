import { GoogleAnalytics } from "@next/third-parties/google";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ShimmerButton } from "@/components/ui/buttons/shimer";
import { NextBlueButton } from "@/components/ui/buttons/next-blue";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-example";

export default function Home() {
  return (
    <HeroHighlight>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      <Navbar />

      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-16">
        <div className="flex flex-col items-center justify-start gap-12">
          <Hero />
          <div className="flex flex-col items-center justify-start gap-4">
            <ShimmerButton>
              <div className="flex items-center gap-4">
                <p>50% off to early adopters</p>
                <IconArrowRight className="h-4 w-4 text-neutral-500 dark:text-white" />
              </div>
            </ShimmerButton>
            <NextBlueButton>
              <div className="flex items-center ">
                <Image
                  className="h-10 w-10"
                  width={40}
                  height={40}
                  src="/chrome.svg"
                  alt="chrome icon"
                />
                <p className="text-lg">Add to Chrome</p>
              </div>
            </NextBlueButton>
          </div>
          <BentoGridThirdDemo />
        </div>
      </MaxWidthWrapper>

      <Footer />
    </HeroHighlight>
  );
}
