import type { Metadata } from "next";
import { Cinzel, Raleway, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estratagema | Juegos de Mesa en Santa Fe",
  description:
    "Tu tienda de juegos de mesa en Santa Fe, Argentina. Comprá online o visitanos. Eventos, torneos y la mejor selección de juegos.",
  keywords: [
    "juegos de mesa",
    "Santa Fe",
    "Argentina",
    "board games",
    "Estratagema",
    "torneos",
    "eventos",
  ],
  openGraph: {
    title: "Estratagema | Juegos de Mesa en Santa Fe",
    description:
      "Tu tienda de juegos de mesa en Santa Fe, Argentina. Comprá online o visitanos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${raleway.variable} ${inter.variable}`}
    >
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
