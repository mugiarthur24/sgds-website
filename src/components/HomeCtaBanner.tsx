import React from "react";
import Link from "next/link";
import { Handshake, ArrowRight, Mail } from "lucide-react";

export default function HomeCtaBanner() {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-[#71001D] via-[#8F001C] to-[#520015] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-[#F8B018]">
          <Handshake className="w-4 h-4" />
          <span>Kolaborasi Multipihak</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto leading-tight">
          Mari Berkolaborasi Mewujudkan Masa Depan yang Lebih Berkelanjutan Bersama UM Buton
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Pusat SDGs Universitas Muhammadiyah Buton membuka kemitraan seluas-luasnya dengan
          pemerintah, industri, komunitas lokal, dan perguruan tinggi untuk aksi nyata keberlanjutan.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8B018] text-[#263548] font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Ajukan Inisiasi Kerjasama</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/program"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/25 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Lihat Program Kami</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
