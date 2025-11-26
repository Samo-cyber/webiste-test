import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { BottomArea } from "@/components/BottomArea";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "700"]
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "أحمد صلاح — مدرس الفلسفة وعلم النفس",
  description: "منصة أحمد صلاح التعليمية لحجز الحصص ومتابعة الدروس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${poppins.variable}`}>
      <body className="font-body bg-secondary-1 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <BottomArea />
      </body>
    </html>
  );
}