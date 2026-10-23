import React from "react";
import Component from "@/components/ui/3d-parallax-unfurling-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Visual 3D SDGs | Universitas Muhammadiyah Buton",
  description:
    "Eksplorasi galeri dokumentasi visual 3D interaktif kegiatan SDGs Universitas Muhammadiyah Buton.",
};

export default function GaleriPage() {
  return (
    <div className="relative w-full bg-[#050505]">
      {/* Floating Badge Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center px-4 w-full max-w-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F8B018] animate-pulse"></span>
          <span className="text-xs font-bold tracking-wider uppercase text-[#F8B018]">
            Galeri Visual 3D SDGs
          </span>
          <span className="text-xs text-slate-300 hidden sm:inline">
            • Scroll ke bawah untuk membentangkan
          </span>
        </div>
      </div>

      {/* 3D Parallax Unfurling Gallery */}
      <Component />
    </div>
  );
}
