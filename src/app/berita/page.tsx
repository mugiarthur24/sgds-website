"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { NEWS_LIST, SDGS_LIST } from "@/data/sdgsData";
import { Newspaper, Calendar, Clock, ArrowRight, Search } from "lucide-react";

export default function BeritaPage() {
  const [selectedCat, setSelectedCat] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", "Lingkungan & Kampus Hijau", "Tata Kelola & Kemitraan", "Pengabdian Masyarakat"];

  const filteredNews = useMemo(() => {
    return NEWS_LIST.filter((item) => {
      const matchCat = selectedCat === "Semua" || item.category === selectedCat;
      const matchQuery =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Newspaper className="w-4 h-4" />
            <span>Kabar & Dokumentasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Berita & Kegiatan SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Informasi terkini mengenai aksi lingkungan, riset terapan, pemberdayaan masyarakat, dan
            kebijakan keberlanjutan di Universitas Muhammadiyah Buton.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Filter and Search */}
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
              placeholder="Cari berita atau kegiatan..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <Link
              key={news.id}
              href={`/berita/${news.slug}`}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#71001D] text-white shadow-sm">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#71001D]" />
                      {news.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {news.readingTime}
                    </span>
                  </div>

                  <h2 className="font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#71001D] transition-colors leading-snug">
                    {news.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>

                  {/* SDG Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {news.sdgIds.map((id) => {
                      const sdg = SDGS_LIST.find((s) => s.id === id);
                      if (!sdg) return null;
                      return (
                        <span
                          key={id}
                          className="text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-xs"
                          style={{ backgroundColor: sdg.color }}
                        >
                          SDG {id}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#71001D]">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
