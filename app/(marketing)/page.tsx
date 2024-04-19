import { GoogleAnalytics } from "@next/third-parties/google";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlight } from "@/components/ui/highlight";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-example";
import { Cta } from "./components/cta";

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

      <HeroHighlight>
        {/* <Navbar /> */}

        <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-24">
          <div className="flex flex-wrap gap-4 xl:flex-nowrap">
            <div className="flex w-full flex-col items-center justify-start gap-10 lg:w-fit xl:items-start">
              <Hero />
              <div className="flex flex-col items-center md:items-start">
                <p className="text-start text-3xl font-semibold text-neutral-400">
                  The <Highlight>#1</Highlight> browser extension with <br />
                  ChatGPT, Gemini, Claude, and more.{" "}
                </p>
                <Highlight className="w-fit text-2xl">
                  Pay once. Use forever !
                </Highlight>
              </div>
              <Cta />
            </div>
            <BentoGridThirdDemo />
          </div>
        </MaxWidthWrapper>

        <Footer />
      </HeroHighlight>
    </>
  );
}
