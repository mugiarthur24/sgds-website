"use client";

import React, { useState, useMemo } from "react";
import { PUBLICATIONS_LIST } from "@/data/sdgsData";
import {
  FileText,
  Download,
  Calendar,
  Building,
  Search,
} from "lucide-react";

export default function PublikasiPage() {
  const [selectedType, setSelectedType] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const types = ["Semua", "Laporan SDGs", "Kebijakan & Panduan", "Jurnal & Riset", "Infografik"];

  const filteredPubs = useMemo(() => {
    return PUBLICATIONS_LIST.filter((pub) => {
      const matchType = selectedType === "Semua" || pub.type === selectedType;
      const matchSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.publishedBy.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchSearch;
    });
  }, [selectedType, searchQuery]);

  const handleDownload = (title: string) => {
    alert(`Mengunduh dokumen: "${title}"\nFormat resmi dokumen terenkripsi Universitas Muhammadiyah Buton.`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <FileText className="w-4 h-4" />
            <span>Dokumentasi & Laporan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Publikasi & Unduhan SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Akses terbuka untuk laporan tahunan SDGs, panduan kampus hijau, kebijakan universitas,
            jurnal riset terapan, dan infografik capaian.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex flex-wrap items-center gap-1.5">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedType === type
                    ? "bg-[#71001D] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul dokumen..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500 font-medium">
          Ditemukan <span className="font-bold text-slate-800">{filteredPubs.length}</span> dokumen publik
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPubs.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FBECEE] text-[#71001D]">
                    {pub.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Tahun {pub.year}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-extrabold text-[#263548] group-hover:text-[#71001D] transition-colors leading-snug">
                  {pub.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pub.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Diterbitkan oleh: <strong className="text-slate-700">{pub.publishedBy}</strong></span>
                </div>

                {/* SDG Targets */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {pub.sdgIds.slice(0, 5).map((id) => (
                    <span
                      key={id}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      SDG {id}
                    </span>
                  ))}
                  {pub.sdgIds.length > 5 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                      +{pub.sdgIds.length - 5} Tujuan Lainnya
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Format: {pub.format} ({pub.fileSize})
                </span>

                <button
                  onClick={() => handleDownload(pub.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#71001D] hover:bg-[#8F001C] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Dokumen</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
