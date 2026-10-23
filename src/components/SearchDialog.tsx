"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";
import { SDGS_LIST, PROGRAMS_LIST, NEWS_LIST, PUBLICATIONS_LIST } from "@/data/sdgsData";
import { POLICIES_DATA } from "@/data/policiesData";
import { Search, X, BookOpen, Newspaper, Award, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export default function SearchDialog() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedSdgs = SDGS_LIST.filter(
      (s) =>
        s.id.toString() === q ||
        s.name.toLowerCase().includes(q) ||
        s.englishName.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q)
    );

    const matchedPrograms = PROGRAMS_LIST.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    const matchedNews = NEWS_LIST.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
    );

    const matchedPubs = PUBLICATIONS_LIST.filter(
      (pub) =>
        pub.title.toLowerCase().includes(q) ||
        pub.description.toLowerCase().includes(q) ||
        pub.type.toLowerCase().includes(q)
    );

    const matchedPolicies = POLICIES_DATA.filter(
      (pol) =>
        pol.title.toLowerCase().includes(q) ||
        pol.summary.toLowerCase().includes(q) ||
        pol.category.toLowerCase().includes(q)
    );

    return {
      sdgs: matchedSdgs,
      programs: matchedPrograms,
      news: matchedNews,
      publications: matchedPubs,
      policies: matchedPolicies,
      total:
        matchedSdgs.length +
        matchedPrograms.length +
        matchedNews.length +
        matchedPubs.length +
        matchedPolicies.length,
    };
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    closeSearch();
    setQuery("");
    router.push(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari tujuan SDGs, program, berita, atau publikasi... (Ctrl+K)"
            className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded font-medium hover:bg-slate-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {!results && (
            <div className="py-8 text-center text-slate-500 space-y-3">
              <p className="text-sm">Ketik kata kunci untuk mencari di seluruh portal SDGs UM Buton.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-medium self-center">Pencarian populer:</span>
                {["Pendidikan Berkualitas", "Kampus Hijau", "Pemberdayaan UMKM", "Air Bersih", "Laporan 2025"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-[#FBECEE] hover:text-[#71001D] text-slate-600 rounded-full transition-colors border border-slate-200"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {results && results.total === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="font-semibold text-slate-700">Tidak ada hasil ditemukan</p>
              <p className="text-sm mt-1">Coba gunakan kata kunci lain seperti &quot;kesehatan&quot;, &quot;energi&quot;, atau &quot;beasiswa&quot;.</p>
            </div>
          )}

          {results && results.sdgs.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#71001D]" /> 17 Tujuan SDGs ({results.sdgs.length})
              </h3>
              <div className="space-y-1.5">
                {results.sdgs.map((sdg) => (
                  <button
                    key={sdg.id}
                    onClick={() => handleSelect(`/sdgs/${sdg.slug}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between gap-3 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 text-white shadow-sm"
                        style={{ backgroundColor: sdg.color }}
                      >
                        {sdg.id}
                      </span>
                      <div className="truncate">
                        <span className="font-semibold text-slate-800 text-sm">{sdg.name}</span>
                        <span className="text-xs text-slate-400 ml-2">({sdg.englishName})</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.programs.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#71001D]" /> Program & Kegiatan ({results.programs.length})
              </h3>
              <div className="space-y-1.5">
                {results.programs.map((prog) => (
                  <button
                    key={prog.id}
                    onClick={() => handleSelect(`/program#${prog.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start justify-between gap-3 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#FBECEE] text-[#71001D] mr-2">
                        {prog.category}
                      </span>
                      <span className="font-semibold text-slate-800 text-sm">{prog.title}</span>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{prog.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.news.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5 text-[#71001D]" /> Berita & Kegiatan ({results.news.length})
              </h3>
              <div className="space-y-1.5">
                {results.news.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/berita/${item.slug}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start justify-between gap-3 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">{item.date}</span>
                      <span className="font-semibold text-slate-800 text-sm hover:text-[#71001D]">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.policies.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#71001D]" /> Kebijakan & Regulasi ({results.policies.length})
              </h3>
              <div className="space-y-1.5">
                {results.policies.map((pol) => (
                  <button
                    key={pol.slug}
                    onClick={() => handleSelect(`/policies/${pol.slug}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start justify-between gap-3 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#FBECEE] text-[#71001D] mr-2">
                        {pol.category}
                      </span>
                      <span className="font-semibold text-slate-800 text-sm">{pol.title}</span>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{pol.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && results.publications.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#71001D]" /> Dokumen Publikasi ({results.publications.length})
              </h3>
              <div className="space-y-1.5">
                {results.publications.map((pub) => (
                  <button
                    key={pub.id}
                    onClick={() => handleSelect(`/publikasi`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start justify-between gap-3 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 mr-2">
                        {pub.format}
                      </span>
                      <span className="font-semibold text-slate-800 text-sm">{pub.title}</span>
                      <span className="text-xs text-slate-400 ml-2">({pub.year} • {pub.fileSize})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>SDGs Universitas Muhammadiyah Buton</span>
          <span>Tekan ESC untuk menutup</span>
        </div>
      </div>
    </div>
  );
}
