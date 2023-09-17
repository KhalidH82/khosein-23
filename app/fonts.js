import { Prompt } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

export const prompt = Prompt({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const josefin = Josefin_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

