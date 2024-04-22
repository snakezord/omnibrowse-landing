"use client";
import React, { useState } from "react";

import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getApiResponse } from "@/lib/api";

export const emailRe =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function SignupFormDemo() {
  const [input, setInput] = useState("");
  const [match, setMatch] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (match) {
      await getApiResponse<string | { err: string }>({
        method: "POST",
        apiEndpoint: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/email`,
        requestData: JSON.stringify({ email: input }),
      });

      setMatch(false);
      setInput("");
      toast.success("Email sent! Please confirm in your inbox.", {
        description: "It might be in your spam or junk folder. 🗑️",
        position: "bottom-right",
        duration: 14000,
        closeButton: true,
        className: "w-fit",
      });
    }
  };

  return (
    <div className="w-full max-w-md rounded-none md:rounded-2xl">
      <form onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Input
            value={input}
            onChange={(e) => {
              const match = emailRe.test(e.target.value);
              if (match) setMatch(true);
              else setMatch(false);

              setInput(e.target.value);
            }}
            id="email"
            placeholder="example@gmail.com"
            type="email"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
          type="submit"
        >
          Notify me when available <span className="ml-3">📣</span>
          <BottomGradient
            className={
              match
                ? "btn:opacity-100 opacity-100"
                : "btn:opacity-90 sm:btn:opacity-40 opacity-90 sm:opacity-40"
            }
          />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = ({ className }: { className?: string }) => {
  return (
    <>
      <span
        className={cn(
          "absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 transition duration-500 group-hover/btn:h-[2px] group-hover/btn:opacity-100",
          className,
        )}
      />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
