"use client";
import { FC } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";

// components
import Button from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
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
      <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign In
      </Button>
    </>
  );
};

export default SignInButton;
