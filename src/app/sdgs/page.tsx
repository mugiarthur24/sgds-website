"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SDGS_LIST } from "@/data/sdgsData";
import { ArrowRight, Search, Award, CheckCircle2 } from "lucide-react";

export default function SDGsIndexPage() {
  const [filterPillar, setFilterPillar] = useState<string>("Semua");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredGoals = useMemo(() => {
    return SDGS_LIST.filter((goal) => {
      // Pillar filter
      let matchPillar = true;
      if (filterPillar === "Sosial") {
        matchPillar = [1, 2, 3, 4, 5].includes(goal.id);
      } else if (filterPillar === "Ekonomi") {
        matchPillar = [7, 8, 9, 10, 17].includes(goal.id);
      } else if (filterPillar === "Lingkungan") {
        matchPillar = [6, 11, 12, 13, 14, 15].includes(goal.id);
      } else if (filterPillar === "Hukum") {
        matchPillar = [16].includes(goal.id);
      }

      // Search filter
      const matchSearch =
        searchTerm === "" ||
        goal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        goal.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        goal.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        goal.id.toString() === searchTerm.trim();

      return matchPillar && matchSearch;
    });
  }, [filterPillar, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Award className="w-4 h-4" />
            <span>17 Sustainable Development Goals</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            17 Tujuan Pembangunan Berkelanjutan
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Eksplorasi kontribusi, program kerja, indikator capaian, dan aksi nyata Universitas
            Muhammadiyah Buton untuk masing-masing tujuan SDGs dilengkapi logo resmi.
          </p>
        </div>

        {/* Background decorative pattern */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <Image
            src="/images/sdgs-wheel-badge.png"
            alt="SDG Wheel"
            width={400}
            height={400}
            className="w-80 h-80 object-contain"
          />
        </div>
      </section>

      {/* Quick Interactive Logo Showcase Bar */}
      <section className="bg-white border-b border-slate-200 py-4 shadow-xs sticky top-[68px] z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-2 hidden md:inline-block">
              Pilih Logo:
            </span>
            {SDGS_LIST.map((goal) => (
              <a
                key={goal.id}
                href={`#sdg-${goal.id}`}
                title={`SDG ${goal.id}: ${goal.name}`}
                className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#71001D] hover:scale-110 transition-all shadow-xs hover:shadow-md"
              >
                <Image
                  src={`/images/sdgs/goal-${goal.id}.png`}
                  alt={`Logo SDG ${goal.id}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Controls: Search and Pillar Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {/* Pillar Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "Semua", label: "Semua 17 Tujuan" },
              { id: "Sosial", label: "Pilar Sosial (1-5)" },
              { id: "Ekonomi", label: "Pilar Ekonomi (7-10, 17)" },
              { id: "Lingkungan", label: "Pilar Lingkungan (6, 11-15)" },
              { id: "Hukum", label: "Pilar Hukum (16)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterPillar(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filterPillar === tab.id
                    ? "bg-[#71001D] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nomor atau nama tujuan..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-500 font-medium flex items-center justify-between">
          <span>
            Menampilkan <span className="font-bold text-slate-800">{filteredGoals.length}</span> tujuan SDGs
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Klik kartu untuk rincian indikator & program kampus
          </span>
        </div>

        {/* Grid of 17 SDG Cards with Official SDG Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGoals.map((sdg) => (
            <Link
              key={sdg.id}
              id={`sdg-${sdg.id}`}
              href={`/sdgs/${sdg.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Strip with Official SDG Color & Official SDG Logo */}
                <div
                  className="p-5 text-white flex items-center justify-between relative overflow-hidden"
                  style={{ backgroundColor: sdg.color }}
                >
                  <div className="space-y-1 z-10 pr-3">
                    <div className="text-2xl font-black tracking-tight flex items-center gap-2">
                      <span>SDG {sdg.id}</span>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-90 line-clamp-1">
                      {sdg.englishName}
                    </div>
                  </div>

                  {/* Logo Resmi SDG Badge */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white/40 bg-white group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/images/sdgs/goal-${sdg.id}.png`}
                      alt={`Logo Resmi SDG ${sdg.id} - ${sdg.name}`}
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3.5">
                  <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-[#71001D] transition-colors">
                    {sdg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {sdg.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                    <span className="font-bold text-slate-700 block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#71001D]" />
                      Fokus Aksi Kampus UM Buton:
                    </span>
                    <p className="text-slate-500 line-clamp-2 italic">
                      &quot;{sdg.universityCommitment}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#71001D]">
                <span>Lihat Indikator & Program Lengkap</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
