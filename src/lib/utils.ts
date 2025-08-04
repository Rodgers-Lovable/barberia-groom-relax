import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CaseType = "lower" | "upper" | "title";

export function formatCase(str: string, type: CaseType): string {
  switch (type) {
    case "lower":
      return str.toLowerCase();
    case "upper":
      return str.toUpperCase();
    case "title":
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    default:
      return str;
  }
}
