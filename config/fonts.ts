import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

export const helveticaBold = localFont({
  src: "../public/fonts/Helvetica-Bold.ttf",
  variable: "--font-helvetica-bold",
});

export const segoeUI = localFont({
  src: "../public/fonts/segoeuithis.ttf",
  variable: "--font-segoe-ui",
});
