import { Mulish, Montserrat, Lato, Cabin, Sacramento } from "next/font/google";

export const mulish = Mulish({
  subsets: ["cyrillic-ext"],
  variable: "--font-mulish",
  weight: ["300", "400"],
});
export const montserrat = Montserrat({
  subsets: ["vietnamese"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700"],
});
export const lato = Lato({
  subsets: ["latin-ext"],
  variable: "--font-lato",
  weight: ["400"],
});
export const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  weight: ["600"],
});
export const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-sacramento",
  weight: ["400"],
});
