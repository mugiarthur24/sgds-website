"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROGRAMS_LIST, SDGS_LIST } from "@/data/sdgsData";
import {
  BookOpen,
  MapPin,
  Calendar,
  User,
  Search,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ProgramPage() {
  const [selectedCat, setSelectedCat] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Semua",
    "Pendidikan",
    "Penelitian & Inovasi",
    "Pengabdian Masyarakat",
    "Kampus Berkelanjutan",
    "Kemitraan",
  ];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_LIST.filter((prog) => {
      const matchCat = selectedCat === "Semua" || prog.category === selectedCat;
      const matchQuery =
        searchQuery === "" ||
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.unit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <BookOpen className="w-4 h-4" />
            <span>Aksi Nyata & Tri Dharma</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Program & Kegiatan SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Inisiatif strategis Universitas Muhammadiyah Buton dalam pendidikan, penelitian maritim,
            pengabdian masyarakat pesisir, dan tata kelola kampus hijau.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-[#71001D] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama program..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-500 font-medium">
          Menampilkan <span className="font-bold text-slate-800">{filteredPrograms.length}</span> program
          terverifikasi
        </div>

        {/* Programs List */}
        <div className="space-y-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              id={prog.id}
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                {/* Details Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FBECEE] text-[#71001D]">
                      {prog.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {prog.status}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#263548]">
                    {prog.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Impact Metrics Badges */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Indikator Capaian Kunci:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {prog.impactMetrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                        >
                          ✓ {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target SDGs badges */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Tujuan SDGs Terkait:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {prog.sdgIds.map((id) => {
                        const targetSdg = SDGS_LIST.find((s) => s.id === id);
                        if (!targetSdg) return null;
                        return (
                          <Link
                            key={id}
                            href={`/sdgs/${targetSdg.slug}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: targetSdg.color }}
                          >
                            <span>SDG {id}</span>
                            <span className="font-normal opacity-90 hidden sm:inline">
                              - {targetSdg.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Metadata Column */}
                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-4 h-4 text-[#71001D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 block">Periode Pelaksanaan:</strong>
                        <span>{prog.period}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#71001D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 block">Lokasi:</strong>
                        <span>{prog.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <User className="w-4 h-4 text-[#71001D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 block">Penanggung Jawab:</strong>
                        <span>{prog.lead}</span>
                        <span className="text-xs text-slate-400 block mt-0.5">{prog.unit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <Link
                      href="/kontak"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#71001D] hover:bg-[#8F001C] text-white rounded-xl text-xs font-semibold transition-colors"
                    >
                      <span>Hubungi Tim Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
