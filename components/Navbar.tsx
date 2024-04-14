import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

const Navbar = () => {
  const isUserSignedIn = false;

  return (
    <nav className={cn("sticky inset-x-0 top-0 z-30 h-14 transition-all")}>
      <MaxWidthWrapper>
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: (
                <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
            {
              name: "About",
              link: "/about",
              icon: (
                <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
            {
              name: "Contact",
              link: "/contact",
              icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
          ]}
        />
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
