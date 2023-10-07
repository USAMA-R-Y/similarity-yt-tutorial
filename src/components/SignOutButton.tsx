"use client";
import { FC } from "react";
import { useState } from "react";
import { signOut } from "next-auth/react";

// components
import Button from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut;
    } catch (error) {
      toast({
        title: "Error Signing In",
        message: "Please Sign In Again",
        type: "error",
      });
    }
  };

  return (
    <>
      <Button onClick={signUserOut} isLoading={isLoading}>
        Sign Out
      </Button>
    </>
  );
};

export default SignOutButton;
