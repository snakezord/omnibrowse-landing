"use client";

import { getApiResponse } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Highlight } from "@/components/ui/highlight";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function VerifyEmail() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    getApiResponse<string | { err: string }>({
      method: "GET",
      apiEndpoint: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verifyEmail?token=${token}`,
    });
  }, [searchParams]);

  return (
    <HeroHighlight>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            className="h-16 w-16"
            src="/logo.svg"
            alt="Omnibrowse logo"
            width={128}
            height={128}
          />
          <h3 className="text-center text-2xl text-neutral-300">
            <Highlight>Your email is now verified!</Highlight> <br />
            You will be soon notified about Omnibrowse extension availability!{" "}
            <br />
            You can close this window.
          </h3>
        </div>
      </div>
    </HeroHighlight>
  );
}
