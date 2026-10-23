"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  Award,
  Newspaper,
  ArrowRight,
  ChevronRight,
  Calendar,
  Leaf,
  BookOpen,
  Users,
} from "lucide-react";

export default function HomeHighlights() {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F7FA] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Tentang SDGs UM Buton */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#FBECEE] text-[#71001D]">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#263548]">
                  Tentang SDGs UM Buton
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                SDGs di Universitas Muhammadiyah Buton merupakan bagian dari komitmen institusi
                dalam mendukung agenda global untuk mewujudkan dunia yang lebih adil, inklusif,
                sejahtera, dan berkelanjutan. Melalui pendidikan, penelitian, pengabdian kepada
                masyarakat, dan tata kelola yang baik, UM Buton hadir sebagai agen perubahan di
                tingkat lokal dan global.
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="font-semibold text-slate-700">Fokus Strategis Wilayah:</div>
                <p>Kepulauan Buton, kawasan pesisir maritim, dan masyarakat adat terpencil Sulawesi Tenggara.</p>
              </div>
            </div>

            <div>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#71001D] text-white font-semibold text-sm hover:bg-[#8F001C] transition-all shadow hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Program Unggulan */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-xl bg-[#FBECEE] text-[#71001D]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#263548]">
                  Program Unggulan
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* 1. Green Campus */}
                <Link
                  href="/program?cat=Kampus"
                  className="group flex items-start gap-3.5 p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors">
                      Green Campus
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      Mewujudkan kampus hijau dan ramah lingkungan dengan pengelolaan sumber daya yang berkelanjutan.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                </Link>

                {/* 2. Pendidikan Berkualitas */}
                <Link
                  href="/program?cat=Pendidikan"
                  className="group flex items-start gap-3.5 p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-[#FBECEE]/60 hover:border-[#71001D]/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#71001D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#71001D] transition-colors">
                      Pendidikan Berkualitas
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      Meningkatkan akses dan mutu pendidikan untuk semua mahasiswa prasejahtera dan daerah kepulauan.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#71001D] group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                </Link>

                {/* 3. Pengabdian Masyarakat */}
                <Link
                  href="/program?cat=Pengabdian"
                  className="group flex items-start gap-3.5 p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-blue-700 transition-colors">
                      Pengabdian Masyarakat
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      Memberdayakan masyarakat pesisir dan UMKM melalui inovasi teknologi dan kolaborasi pentahelix.
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                </Link>
              </div>
            </div>

            <div className="pt-1 text-right">
              <Link
                href="/program"
                className="text-xs font-semibold text-[#71001D] hover:underline inline-flex items-center gap-1"
              >
                <span>Lihat Semua 5 Program Strategis</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Berita & Kegiatan Terbaru */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#FBECEE] text-[#71001D]">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#263548]">
                    Berita & Kegiatan
                  </h3>
                </div>

                <Link
                  href="/berita"
                  className="text-xs font-semibold text-[#71001D] hover:underline flex items-center gap-0.5"
                >
                  <span>Lihat Semua</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {/* News 1 */}
                <Link
                  href="/berita/um-buton-gelar-penanaman-pohon-hari-lingkungan-hidup"
                  className="group flex items-center gap-3.5 pb-3 border-b border-slate-100 last:border-b-0"
                >
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                    <Image
                      src="/images/news-1.png"
                      alt="Penanaman Pohon"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[#71001D] transition-colors line-clamp-2 leading-snug">
                      UM Buton Gelar Program Penanaman Pohon Dalam Rangka Hari Lingkungan Hidup
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#71001D]" />
                      5 Juni 2025
                    </span>
                  </div>
                </Link>

                {/* News 2 */}
                <Link
                  href="/berita/workshop-implementasi-sdgs-di-lingkungan-perguruan-tinggi"
                  className="group flex items-center gap-3.5 pb-3 border-b border-slate-100 last:border-b-0"
                >
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                    <Image
                      src="/images/news-2.png"
                      alt="Workshop SDGs"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[#71001D] transition-colors line-clamp-2 leading-snug">
                      Workshop Implementasi SDGs di Lingkungan Perguruan Tinggi
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#71001D]" />
                      20 Mei 2025
                    </span>
                  </div>
                </Link>

                {/* News 3 */}
                <Link
                  href="/berita/pengabdian-masyarakat-pemberdayaan-umkm-lokal"
                  className="group flex items-center gap-3.5"
                >
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                    <Image
                      src="/images/news-3.png"
                      alt="Pemberdayaan UMKM"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[#71001D] transition-colors line-clamp-2 leading-snug">
                      Pengabdian Masyarakat: Pemberdayaan UMKM Lokal Berbasis Kearifan Buton
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-medium">
                      <Calendar className="w-3 h-3 text-[#71001D]" />
                      12 Mei 2025
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              Dokumentasi asli kegiatan tri dharma UM Buton.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
