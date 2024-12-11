import { clsx, type ClassValue } from "clsx";
import { parse } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeParse(dateString: string) {
  return parse(dateString, 'yyyy-MM-dd HH:mm:ss X', new Date());
}