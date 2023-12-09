import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const USERNAME = "admin@nalar";
const PASSWORD = "Antler2023!";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function authenticate(
  username: string,
  password: string
): Promise<boolean> {
  return username === USERNAME && password === PASSWORD;
}
