"use client";
import { useTheme } from "next-themes";
import { FC } from "react";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import Button from "@/components/ui/Button";
import Icons from "@/components/Icons";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  // code
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      {/* because ddMenuTrigger is already a button, so button inside button
    will cause error so use `asChild` */}
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"sm"}>
          <Icons.Sun className="rotate-0 scale-100 transition-all text-slate-500 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"></Icons.Sun>
          <Icons.Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"></Icons.Moon>
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* when dropdown will be opened */}
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
