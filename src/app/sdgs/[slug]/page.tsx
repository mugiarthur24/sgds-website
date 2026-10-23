import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SDGS_LIST, PROGRAMS_LIST, NEWS_LIST, PUBLICATIONS_LIST } from "@/data/sdgsData";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Newspaper,
} from "lucide-react";

export function generateStaticParams() {
  return SDGS_LIST.map((sdg) => ({
    slug: sdg.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sdg = SDGS_LIST.find((s) => s.slug === slug);
  if (!sdg) return { title: "Tujuan SDGs Tidak Ditemukan" };
  return {
    title: `SDG ${sdg.id}: ${sdg.name} | SDGs UM Buton`,
    description: sdg.fullDesc,
  };
}

export default async function SDGDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sdg = SDGS_LIST.find((s) => s.slug === slug);

  if (!sdg) {
    notFound();
  }

  // Related programs
  const relatedPrograms = PROGRAMS_LIST.filter((p) => p.sdgIds.includes(sdg.id));
  // Related news
  const relatedNews = NEWS_LIST.filter((n) => n.sdgIds.includes(sdg.id));
  // Related publications
  const relatedPubs = PUBLICATIONS_LIST.filter((pub) => pub.sdgIds.includes(sdg.id));

  // Prev & Next SDG
  const prevSdg = SDGS_LIST.find((s) => s.id === (sdg.id === 1 ? 17 : sdg.id - 1));
  const nextSdg = SDGS_LIST.find((s) => s.id === (sdg.id === 17 ? 1 : sdg.id + 1));

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Banner with Official SDG Color */}
      <section
        className="text-white py-14 sm:py-20 relative overflow-hidden"
        style={{ backgroundColor: sdg.color }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            href="/sdgs"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke 17 Tujuan SDGs</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black px-3 py-1 bg-white/20 rounded-xl">
                  {sdg.id}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">
                  {sdg.englishName}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {sdg.name}
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-1">
                {sdg.shortDesc}
              </p>
            </div>

            {/* Logo Resmi SDG */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white self-start md:self-auto shrink-0 transition-transform hover:scale-105 duration-300">
              <Image
                src={`/images/sdgs/goal-${sdg.id}.png`}
                alt={`Logo Resmi SDG ${sdg.id} - ${sdg.name}`}
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
        {/* 2. Ringkasan & Komitmen Konteks Universitas */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#71001D]">
            <Building className="w-4 h-4" />
            <span>Konteks & Komitmen Universitas</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#263548]">
            Peran Nyata UM Buton untuk {sdg.name}
          </h2>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            {sdg.fullDesc}
          </p>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="text-slate-800 block">Komitmen Utama Kampus:</strong>
              <span className="text-slate-600">{sdg.universityCommitment}</span>
            </div>
          </div>
        </section>

        {/* 3. Target Global & Aksi Nyata Kampus */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Target & Integrasi
            </span>
            <h2 className="text-2xl font-extrabold text-[#263548]">
              Target Terpilih & Implementasi Kampus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdg.targets.map((tgt, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-md text-white inline-block"
                    style={{ backgroundColor: sdg.color }}
                  >
                    Target {tgt.code}
                  </span>
                  <h3 className="font-bold text-sm text-slate-800">{tgt.description}</h3>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <span className="font-semibold text-slate-800 block mb-1">Aksi Kampus UM Buton:</span>
                  <p>{tgt.campusAction}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Data Capaian & Indikator Terverifikasi */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
                Data & Transparansi
              </span>
              <h2 className="text-2xl font-extrabold text-[#263548]">
                Indikator Capaian Terverifikasi
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>Data diaudit oleh Lembaga Penjaminan Mutu</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Indikator Kinerja</th>
                  <th className="p-4">Target 2025</th>
                  <th className="p-4">Realisasi Capaian</th>
                  <th className="p-4">Sumber Data</th>
                  <th className="p-4">Pembaruan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {sdg.indicators.map((ind, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 font-semibold text-slate-800">{ind.name}</td>
                    <td className="p-4 text-slate-600">{ind.target}</td>
                    <td className="p-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {ind.achievement}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{ind.source}</td>
                    <td className="p-4 text-slate-400 text-xs">{ind.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Program & Kegiatan Terkait */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Aksi Nyata
            </span>
            <h2 className="text-2xl font-extrabold text-[#263548]">
              Program & Inisiatif Terkait
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPrograms.length > 0 ? (
              relatedPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FBECEE] text-[#71001D]">
                      {prog.category}
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                      {prog.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-800 leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Unit: {prog.unit}</span>
                    <Link
                      href={`/program#${prog.id}`}
                      className="text-[#71001D] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-sm">Inisiatif dan kegiatan strategis sedang dalam proses pendataan semester berjalan.</p>
              </div>
            )}
          </div>
        </section>

        {/* 6. Berita Terkait & Publikasi Terkait */}
        {(relatedNews.length > 0 || relatedPubs.length > 0) && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedNews.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-[#71001D]" />
                  <span>Berita & Dokumentasi Terkait</span>
                </h3>
                <div className="space-y-3">
                  {relatedNews.map((news) => (
                    <Link
                      key={news.id}
                      href={`/berita/${news.slug}`}
                      className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-[#71001D]/40 transition-colors group"
                    >
                      <span className="text-xs text-slate-400 block mb-1">{news.date}</span>
                      <h4 className="font-semibold text-sm text-slate-800 group-hover:text-[#71001D]">
                        {news.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedPubs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#71001D]" />
                  <span>Laporan & Publikasi Terkait</span>
                </h3>
                <div className="space-y-3">
                  {relatedPubs.map((pub) => (
                    <div
                      key={pub.id}
                      className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="font-semibold text-sm text-slate-800">{pub.title}</h4>
                        <span className="text-xs text-slate-400">
                          {pub.year} • {pub.fileSize}
                        </span>
                      </div>
                      <Link
                        href="/publikasi"
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#71001D] hover:text-white text-xs font-semibold text-slate-700 transition-colors shrink-0"
                      >
                        Unduh
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 7. PIC & Unit Penanggung Jawab */}
        <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F8B018]">
                Unit Penanggung Jawab (PIC)
              </span>
              <h3 className="text-xl font-bold">{sdg.pic.unit}</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Koordinator: <span className="font-semibold text-white">{sdg.pic.head}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href={`mailto:${sdg.pic.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F8B018]" />
                <span>{sdg.pic.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10">
                <Phone className="w-4 h-4 text-[#F8B018]" />
                <span>{sdg.pic.phone}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Prev / Next Goal Navigation */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          {prevSdg && (
            <Link
              href={`/sdgs/${prevSdg.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#71001D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                Sebelumnya: SDG {prevSdg.id} ({prevSdg.name})
              </span>
            </Link>
          )}

          {nextSdg && (
            <Link
              href={`/sdgs/${nextSdg.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#71001D] transition-colors"
            >
              <span>
                Berikutnya: SDG {nextSdg.id} ({nextSdg.name})
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
