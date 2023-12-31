import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/home/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natãn Schneider",
  description: "A gorgeous porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="bg-gray-900 text-stone-300 min-h-screen">
          <Header />
          <div className="max-w-5xl w-11/12 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
