import { Slabo_27px, Khula, Montserrat_Alternates } from "next/font/google";

export const slabo = Slabo_27px({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const khula = Khula({
  weight: ["400", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat_Alternates({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
