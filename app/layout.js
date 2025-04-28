import "./globals.css";

import { Inter, Orbitron } from "next/font/google";

import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Terminal Forge",
  description: "CLI tools for the modern developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} ${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
