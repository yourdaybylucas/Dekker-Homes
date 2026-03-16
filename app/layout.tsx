import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dekker Homes and Renovations Inc | Custom Carpentry in Wiarton, Owen Sound & Sauble Beach",
  description: "Dekker Homes and Renovations Inc provides high-end custom carpentry, home renovations, and building services in Wiarton, Owen Sound, Sauble Beach, and Grey-Bruce Counties. Master Carpenter Nathan Dekker.",
  keywords: "carpenter, custom carpentry, home renovations, Wiarton, Owen Sound, Sauble Beach, Grey County, Bruce County, Dekker Homes, Nathan Dekker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
