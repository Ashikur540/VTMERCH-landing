import type { Metadata } from "next";

import "./globals.css";
import { inter, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "VTMERCH - E-commerce",
  description: "A simple e-commerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
