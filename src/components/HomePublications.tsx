import React from "react";
import Link from "next/link";
import { PUBLICATIONS_LIST } from "@/data/sdgsData";
import { Download, ArrowRight, Calendar } from "lucide-react";

export default function HomePublications() {
  const featured = PUBLICATIONS_LIST.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-[#F5F7FA] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Publikasi & Dokumen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
              Laporan SDGs & Kebijakan Kampus
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Unduh laporan tahunan, panduan keberlanjutan, infografik, dan naskah kebijakan resmi
              Universitas Muhammadiyah Buton secara terbuka.
            </p>
          </div>

          <Link
            href="/publikasi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FBECEE] hover:text-[#71001D] text-slate-700 text-sm font-semibold transition-all shrink-0 self-start md:self-auto border border-slate-200 shadow-sm"
          >
            <span>Semua Publikasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FBECEE] text-[#71001D]">
                    {pub.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {pub.year}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-800 group-hover:text-[#71001D] transition-colors leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {pub.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{pub.fileSize} • {pub.format}</span>
                <a
                  href={`/publikasi`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#71001D] hover:text-white text-slate-700 font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Detail & Unduh</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
