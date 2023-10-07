import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this is tailwind merge, it just optimizes the usage of classes.
// e.g., py-2 pyx-2 will be converted to class p-2
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
