import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AllKinds } from "./Db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getGenre(id: number) {
  AllKinds.find((kind) => kind.id === id)?.name;
}
