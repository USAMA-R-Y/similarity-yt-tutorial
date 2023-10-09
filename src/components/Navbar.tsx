import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

// ui components
import { buttonVariants } from "@/components/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
// import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  console.log(buttonVariants);
  // const session = await getServerSession(authOptions);
  // since I don't have any id so.
  const session = {
    id: "1",
    name: "Usama Rehman Yousaf",
    email: "decryptme938@gmail.com",
    picture: "https://picsum.photos/seed/picsum/200/300",
  };
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      {/* ==============================|| BUTTON ||============================== */}
      <div
        className="container max-w-7xl mx-auto w-full \
      flex justify-between items-center"
      >
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Text Similarity 1.0
        </Link>
      </div>
      {/* ==============================|| MD:HIDDEN ||============================== */}
      <div className="md:hidden">
        <ThemeToggle />
      </div>
      {/* ==============================|| DOCUMENTATION ||============================== */}
      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        <Link
          href={"/documentation"}
          className={buttonVariants({ variant: "ghost" })}
        >
          Documentation
        </Link>
      </div>
      {/* ==============================|| AUTH ||============================== */}
      {session ? (
        <>
          <Link
            href={"/dashboard"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Dashboard
          </Link>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Navbar;
