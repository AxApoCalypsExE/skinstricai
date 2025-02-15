import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roobert = localFont({
  src: [
    {
      path: "./fonts/Roobert-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roobert-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roobert",
});

export const metadata: Metadata = {
  title: "Sophisticated Skincare | Skinstric",
  description:
    "Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roobert.className} antialiased`}>{children}</body>
    </html>
  );
}
