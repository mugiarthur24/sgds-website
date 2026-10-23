"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_LIST } from "@/data/sdgsData";
import {
  ImageIcon,
  Calendar,
  X,
  Maximize2,
} from "lucide-react";

export default function GaleriPage() {
  const [selectedCat, setSelectedCat] = useState<string>("Semua");
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_LIST)[0] | null>(null);

  const categories = ["Semua", "Kampus Hijau", "Pendidikan", "Pengabdian"];

  const filteredGallery = useMemo(() => {
    return GALLERY_LIST.filter((item) => {
      return selectedCat === "Semua" || item.category === selectedCat;
    });
  }, [selectedCat]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <ImageIcon className="w-4 h-4" />
            <span>Dokumentasi Visual</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Galeri Dokumentasi SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Potret autentik aktivitas mahasiswa, riset dosen, pendampingan masyarakat pesisir,
            dan kelestarian kampus Universitas Muhammadiyah Buton.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCat === cat
                  ? "bg-[#71001D] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#71001D] text-white shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-[#71001D]" />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-bold text-sm text-slate-800 group-hover:text-[#71001D] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#FBECEE] text-[#71001D]">
                  {lightboxItem.category}
                </span>
                <span className="text-xs text-slate-400">• {lightboxItem.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">{lightboxItem.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
