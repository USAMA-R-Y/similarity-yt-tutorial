"use client";

import { ReactNode } from "react";
// theme provider for dark mode
import { ThemeProvider } from "next-themes";
// for client side authentication use SessionProvider
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
