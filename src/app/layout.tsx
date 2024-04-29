import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.scss";

const inter = Inconsolata({ subsets: ["latin"], weight:['300','400', '500', '600'] });

export const metadata: Metadata = {
  title: "João Ricardo",
  description: "João Ricardo is a Front-End developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
