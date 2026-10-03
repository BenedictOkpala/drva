import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deeper Real Vision Academy (DRVA) | Creche, Nursery, Primary & Junior Secondary",
  description:
    "A supportive, purposeful learning community in Sheretti, Abuja where children are known and given room to grow. Providing education across Creche, Nursery, Primary, and Junior Secondary (JSS1–JSS3).",
  keywords: [
    "DRVA",
    "Deeper Real Vision Academy",
    "Creche",
    "Nursery School",
    "Primary School",
    "Junior Secondary School",
    "JSS1 JSS2 JSS3",
    "Sheretti Abuja",
    "In God We Trust",
  ],
};

export const viewport: Viewport = {
  themeColor: "#102a43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[var(--ink)] antialiased selection:bg-[var(--navy)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
