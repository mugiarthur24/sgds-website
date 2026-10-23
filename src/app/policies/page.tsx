import React from "react";
import Link from "next/link";
import { POLICIES_DATA } from "@/data/policiesData";
import { SDGS_LIST } from "@/data/sdgsData";
import { FileText, ArrowRight, Calendar, Building } from "lucide-react";

export const metadata = {
  title: "Policies | SDGs Universitas Muhammadiyah Buton",
  description:
    "Surat Keputusan Rektor dan naskah kebijakan resmi mengenai keberlanjutan, kampus hijau, pengadaan etis, dan integritas di UM Buton.",
};

export default function PoliciesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <FileText className="w-4 h-4" />
            <span>Regulasi & Tata Kelola Kampus</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Sustainability Policies & Regulations
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Daftar kebijakan resmi, Surat Keputusan Rektor, dan standar operasional Universitas
            Muhammadiyah Buton yang menjadi landasan hukum pelaksanaan SDGs di lingkungan kampus.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="text-xs text-slate-500 font-medium">
          Menampilkan <span className="font-bold text-slate-800">{POLICIES_DATA.length}</span> kebijakan resmi terdaftar
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POLICIES_DATA.map((policy) => (
            <div
              key={policy.slug}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FBECEE] text-[#71001D]">
                    {policy.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Tahun {policy.year}
                  </span>
                </div>

                <Link href={`/policies/${policy.slug}`}>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#263548] group-hover:text-[#71001D] transition-colors leading-snug">
                    {policy.title}
                  </h2>
                </Link>

                <div className="text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                  {policy.skNumber}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {policy.summary}
                </p>

                <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Unit: <strong className="text-slate-700">{policy.unit}</strong></span>
                </div>

                {/* SDG Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {policy.sdgIds.map((id) => {
                    const sdg = SDGS_LIST.find((s) => s.id === id);
                    return (
                      <span
                        key={id}
                        className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
                        style={{ backgroundColor: sdg?.color }}
                      >
                        SDG {id}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{policy.fileSize}</span>
                <Link
                  href={`/policies/${policy.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#71001D] hover:bg-[#8F001C] text-white text-xs font-semibold transition-colors"
                >
                  <span>Baca Kebijakan Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
