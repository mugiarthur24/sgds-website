import React from "react";
import Link from "next/link";
import { ClipboardList, GraduationCap, UserCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "SDGs Survey | Universitas Muhammadiyah Buton",
  description:
    "Survei literasi, pengetahuan, dan kepedulian keberlanjutan bagi dosen dan mahasiswa Universitas Muhammadiyah Buton.",
};

export default function SurveyIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <ClipboardList className="w-4 h-4" />
            <span>Sustainability Survey</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Survei Keberlanjutan Sivitas Akademika
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Partisipasi Anda sangat berharga untuk mengevaluasi pemahaman, perilaku ramah lingkungan,
            dan perbaikan kebijakan kampus berkelanjutan di Universitas Muhammadiyah Buton.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Lecturer Survey Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FBECEE] text-[#71001D] flex items-center justify-center">
                <UserCheck className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#263548]">
                Lecturer Survey
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Survei literasi keberlanjutan dan integrasi tema SDGs dalam catur dharma (pengajaran,
                penelitian, pengabdian masyarakat, dan Al-Islam Kemuhammadiyahan) bagi dosen UM Buton.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>⏱️ Estimasi Pengisian: 5-7 menit</p>
                <p>🔒 Data dijaga kerahasiaannya untuk keperluan evaluasi internal</p>
              </div>
            </div>

            <div>
              <Link
                href="/survey/lecturer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#71001D] hover:bg-[#8F001C] text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Mulai Survei Dosen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Student Survey Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#263548]">
                Student Survey
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kuesioner kesadaran lingkungan, kebiasaan pemilahan sampah, penggunaan tumbler air minum,
                dan aspirasi mahasiswa mengenai fasilitas kampus hijau UM Buton.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>⏱️ Estimasi Pengisian: 4-5 menit</p>
                <p>🎁 Tersedia merchandise ramah lingkungan bagi responden terpilih</p>
              </div>
            </div>

            <div>
              <Link
                href="/survey/student"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Mulai Survei Mahasiswa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
