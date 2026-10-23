import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POLICIES_DATA } from "@/data/policiesData";
import { SDGS_LIST } from "@/data/sdgsData";
import {
  ArrowLeft,
  Calendar,
  Building,
  Download,
  ShieldCheck,
} from "lucide-react";

export function generateStaticParams() {
  return POLICIES_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = POLICIES_DATA.find((p) => p.slug === slug);
  if (!policy) return { title: "Kebijakan Tidak Ditemukan" };
  return {
    title: `${policy.title} | SDGs UM Buton`,
    description: policy.summary,
  };
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = POLICIES_DATA.find((p) => p.slug === slug);

  if (!policy) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#71001D] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Kebijakan</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FBECEE] text-[#71001D]">
              {policy.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#71001D]" />
              Tahun {policy.year}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Berlaku Aktif
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#263548] leading-tight">
            {policy.title}
          </h1>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono text-slate-700">
            Nomor Ketetapan: <strong>{policy.skNumber}</strong>
          </div>
        </div>

        {/* Ringkasan */}
        <div className="p-5 rounded-2xl bg-[#F5F7FA] border-l-4 border-[#71001D] text-slate-700 text-sm sm:text-base leading-relaxed">
          <strong className="block text-[#263548] mb-1">Ringkasan Eksekutif:</strong>
          {policy.summary}
        </div>

        {/* Butir-Butir Klausul / Ketentuan Pokok */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#263548]">
            Klausul Pokok Kebijakan
          </h2>
          <div className="space-y-4">
            {policy.clauses.map((clause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#FBECEE] text-[#71001D]">
                    {clause.number}
                  </span>
                  <h3 className="font-bold text-base text-slate-800">{clause.heading}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                  {clause.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Penanggung Jawab & Target SDGs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Unit Kerja Pengampu:
            </span>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Building className="w-4 h-4 text-[#71001D] shrink-0" />
              <span>{policy.unit}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Tujuan SDGs Terkait:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {policy.sdgIds.map((id) => {
                const sdg = SDGS_LIST.find((s) => s.id === id);
                return (
                  <Link
                    key={id}
                    href={`/sdgs/${sdg?.slug}`}
                    className="text-xs font-bold px-2.5 py-1 rounded-md text-white shadow-xs hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: sdg?.color }}
                  >
                    SDG {id}: {sdg?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Berkas resmi disahkan oleh Rektor Universitas Muhammadiyah Buton.
          </span>
          <Link
            href="/publikasi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#71001D] hover:bg-[#8F001C] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Naskah Asli ({policy.fileSize})</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
