import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

export const helveticaBold = localFont({
  src: "../public/fonts/Helvetica-Bold.ttf",
  variable: "--font-helvetica-bold",
})

export const segoeUI = localFont({
  src: "../public/fonts/segoeuithis.ttf",
  variable: "--font-segoe-ui",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`${clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )} ${robotoMonoFont.variable}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-9xl flex-grow bg-white">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

