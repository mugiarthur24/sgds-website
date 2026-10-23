"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SDGS_LIST, IMPACT_STATS } from "@/data/sdgsData";
import {
  TrendingUp,
  ShieldCheck,
  Search,
  Calendar,
  Building,
  Filter,
} from "lucide-react";

export default function CapaianPage() {
  const [selectedSdg, setSelectedSdg] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Gather all indicators across the 17 SDGs into a flat array
  const allIndicators = SDGS_LIST.flatMap((s) =>
    s.indicators.map((ind) => ({
      ...ind,
      sdgId: s.id,
      sdgName: s.name,
      sdgColor: s.color,
      sdgSlug: s.slug,
    }))
  );

  const filteredIndicators = allIndicators.filter((item) => {
    const matchSdg = selectedSdg === "Semua" || item.sdgId.toString() === selectedSdg;
    const matchQuery =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sdgName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSdg && matchQuery;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <TrendingUp className="w-4 h-4" />
            <span>Transparansi & Akuntabilitas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Capaian & Indikator Kinerja SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Data statistik capaian terverifikasi Universitas Muhammadiyah Buton yang dicatat
            berdasarkan sumber resmi, periode evaluasi, dan audit penjaminan mutu berkala.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Top Summary Cards */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#263548]">
              Ringkasan Capaian Utama 2025
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Status Audit: Terverifikasi</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {IMPACT_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#71001D]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 line-clamp-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Filter Bar */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {/* Filter SDG Dropdown */}
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              <label htmlFor="sdg-filter" className="text-xs font-bold text-slate-700 whitespace-nowrap">
                Filter Tujuan:
              </label>
              <select
                id="sdg-filter"
                value={selectedSdg}
                onChange={(e) => setSelectedSdg(e.target.value)}
                className="bg-white border border-slate-200 text-xs sm:text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 text-slate-700"
              >
                <option value="Semua">Semua 17 Tujuan SDGs</option>
                {SDGS_LIST.map((s) => (
                  <option key={s.id} value={s.id.toString()}>
                    SDG {s.id}: {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari indikator atau unit sumber..."
                className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
              />
            </div>
          </div>

          {/* Indicators Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Tujuan SDGs</th>
                  <th className="p-4">Nama Indikator</th>
                  <th className="p-4">Target</th>
                  <th className="p-4">Realisasi Capaian</th>
                  <th className="p-4">Tahun</th>
                  <th className="p-4">Sumber Data Resmi</th>
                  <th className="p-4">Verifikasi Terakhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredIndicators.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4">
                      <Link
                        href={`/sdgs/${item.sdgSlug}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-white text-xs font-bold shadow-sm hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: item.sdgColor }}
                      >
                        <span>SDG {item.sdgId}</span>
                      </Link>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">
                      {item.name}
                    </td>
                    <td className="p-4 text-slate-600 font-medium">{item.target}</td>
                    <td className="p-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {item.achievement}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 font-medium">{item.year}</td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item.source}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-400 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{item.updatedAt}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between pt-2">
            <span>
              Menampilkan {filteredIndicators.length} dari {allIndicators.length} indikator capaian.
            </span>
            <span>Standar pelaporan mengacu pada Pedoman Evaluasi SDGs Dikti & PBB.</span>
          </div>
        </section>
      </div>
    </div>
  );
}
