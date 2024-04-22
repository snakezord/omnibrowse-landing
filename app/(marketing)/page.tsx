import { GoogleAnalytics } from "@next/third-parties/google";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/hero";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlight } from "@/components/ui/highlight";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-example";
import { Cta } from "./components/cta";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

      <HeroHighlight>
        {/* <Navbar /> */}

        <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-24">
          <div className="flex flex-wrap sm:gap-4 xl:flex-nowrap">
            <div className="flex w-full flex-col items-center justify-start gap-10 xl:w-fit xl:items-start">
              <Spotlight
                className="-top-60 left-0 delay-1000 md:-top-24 md:left-24"
                fill="white"
              />
              <Hero />

              <div className="flex flex-col items-center xl:items-start">
                <p className="text-center text-3xl font-semibold text-neutral-400 xl:text-start">
                  The <Highlight>#1</Highlight> browser extension with{" "}
                  <br className="hidden md:inline-block" />
                  ChatGPT, Gemini, Claude, and more.{" "}
                </p>
                <Highlight className="mt-2 w-fit text-2xl">
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
