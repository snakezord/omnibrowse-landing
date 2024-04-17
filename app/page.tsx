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

export default function Home() {
  return (
    <HeroHighlight>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      <Navbar />

      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center justify-start gap-4">
              <ShimmerButton>
                <div className="flex items-center gap-4">
                  <p>50% off to early adopters</p>
                  <IconArrowRight className="h-4 w-4 text-neutral-500 dark:text-white" />
                </div>
              </ShimmerButton>
              <Hero />
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
          </div>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </HeroHighlight>
  );
}
