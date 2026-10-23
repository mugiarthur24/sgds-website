"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SDGS_LIST } from "@/data/sdgsData";
import { ArrowRight } from "lucide-react";

export default function SDGGoalGrid() {
  const row1 = SDGS_LIST.slice(0, 9); // Goals 1 to 9
  const row2 = SDGS_LIST.slice(9, 17); // Goals 10 to 17

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Text Block (Column 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Tujuan SDGs
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548] leading-tight">
              17 Tujuan untuk Masa Depan yang Lebih Baik
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Universitas Muhammadiyah Buton berkontribusi pada 17 Tujuan Pembangunan Berkelanjutan
              (SDGs) melalui berbagai program strategis di bidang pendidikan, penelitian, pengabdian
              masyarakat, dan tata kelola kampus.
            </p>

            <div className="pt-2">
              <Link
                href="/sdgs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#71001D] text-white font-semibold text-sm hover:bg-[#8F001C] transition-all shadow hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Lihat Semua 17 Tujuan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right SDG Cards Grid (Column 5-12) */}
          <div className="lg:col-span-8 space-y-2.5">
            {/* Desktop Row 1 (1 to 9) */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
              {row1.map((sdg) => (
                <Link
                  key={sdg.id}
                  href={`/sdgs/${sdg.slug}`}
                  title={`${sdg.id}. ${sdg.name} (${sdg.englishName})`}
                  className="group relative aspect-square rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:z-10 overflow-hidden cursor-pointer border border-black/5"
                  style={{ backgroundColor: sdg.color }}
                >
                  <Image
                    src={`/images/sdgs/goal-${sdg.id}.png`}
                    alt={`SDG ${sdg.id}: ${sdg.name}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 10vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle hover overlay with Indonesian name */}
                  <div className="absolute inset-x-0 bottom-0 p-1 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-white text-center font-bold truncate">
                    {sdg.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop Row 2 (10 to 17) */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {row2.map((sdg) => (
                <Link
                  key={sdg.id}
                  href={`/sdgs/${sdg.slug}`}
                  title={`${sdg.id}. ${sdg.name} (${sdg.englishName})`}
                  className="group relative aspect-square rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:z-10 overflow-hidden cursor-pointer border border-black/5"
                  style={{ backgroundColor: sdg.color }}
                >
                  <Image
                    src={`/images/sdgs/goal-${sdg.id}.png`}
                    alt={`SDG ${sdg.id}: ${sdg.name}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 10vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle hover overlay with Indonesian name */}
                  <div className="absolute inset-x-0 bottom-0 p-1 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-white text-center font-bold truncate">
                    {sdg.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
