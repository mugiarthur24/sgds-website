"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-center bg-slate-900">
      {/* Background Campus Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-campus.png"
          alt="Gedung Kampus Universitas Muhammadiyah Buton"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />
        {/* Left Dark Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent md:to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content (Column 1-8) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-white max-w-2xl">
            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F8B018]" />
              <span>Bersama Mewujudkan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-md">
              Universitas Muhammadiyah Buton untuk{" "}
              <span className="text-[#F8B018] drop-shadow">Pembangunan Berkelanjutan</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed drop-shadow max-w-xl">
              Universitas Muhammadiyah Buton berkomitmen mendukung pencapaian Sustainable
              Development Goals (SDGs) melalui pendidikan, penelitian, pengabdian kepada masyarakat,
              dan tata kelola kampus yang berkelanjutan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/program"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#71001D] text-white font-semibold text-sm sm:text-base hover:bg-[#8F001C] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Jelajahi Program SDGs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md text-white font-medium text-sm sm:text-base border border-white/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Tentang Kami</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>

          {/* Right SDGs Badge (Column 9-12) - In Desktop */}
          <div className="hidden lg:flex lg:col-span-4 justify-end items-center pr-4">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
              <div className="relative w-56 h-56 xl:w-64 xl:h-64 rounded-full p-2 bg-white/20 backdrop-blur-md shadow-2xl border border-white/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/sdgs-wheel-badge.png"
                  alt="Sustainable Development Goals Badge"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
