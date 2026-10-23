import React from "react";
import Link from "next/link";
import { IMPACT_STATS } from "@/data/sdgsData";
import {
  Globe,
  GraduationCap,
  MapPin,
  FileText,
  Handshake,
  Waves,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function HomeImpactPreview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-[#71001D]" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-[#71001D]" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-[#71001D]" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-[#71001D]" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-[#71001D]" />;
      case "Waves":
        return <Waves className="w-6 h-6 text-[#71001D]" />;
      default:
        return <Globe className="w-6 h-6 text-[#71001D]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Capaian & Indikator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
              Dampak Nyata & Capaian Terukur
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Setiap indikator capaian dicatat berdasarkan data resmi terverifikasi dari unit pelaksana,
              menjamin transparansi komitmen Universitas Muhammadiyah Buton.
            </p>
          </div>

          <Link
            href="/capaian"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-[#FBECEE] hover:text-[#71001D] text-slate-700 text-sm font-semibold transition-all shrink-0 self-start md:self-auto border border-slate-200"
          >
            <span>Buka Dashboard Capaian Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#71001D]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white group-hover:bg-[#FBECEE] shadow-sm transition-colors">
                  {getIcon(stat.icon)}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Terverifikasi 2025</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#263548] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-[#71001D]">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-800">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
