import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SearchDialog from "@/components/SearchDialog";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SDGs Universitas Muhammadiyah Buton | Pembangunan Berkelanjutan",
  description:
    "Portal resmi Sustainable Development Goals (SDGs) Universitas Muhammadiyah Buton. Dokumentasi dan komitmen kontribusi catur dharma terhadap 17 Tujuan Pembangunan Berkelanjutan.",
  keywords: [
    "SDGs",
    "Universitas Muhammadiyah Buton",
    "UM Buton",
    "Sustainable Development Goals",
    "Pembangunan Berkelanjutan",
    "Kampus Hijau",
    "Baubau",
    "Sulawesi Tenggara",
  ],
  icons: {
    icon: "/images/logo-um-buton.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased selection:bg-[#FBECEE] selection:text-[#71001D]">
        <SearchProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <SearchDialog />
        </SearchProvider>
      </body>
    </html>
  );
}
