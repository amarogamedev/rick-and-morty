import type { Metadata } from "next";
import { Creepster, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

const creepster = Creepster({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty!",
  description: "Search your favorite characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} ${creepster} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
