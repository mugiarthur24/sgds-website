import React from "react";
import Link from "next/link";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { SDGS_LIST } from "@/data/sdgsData";

export const metadata = {
  title: "Courses Related to Environmental Sustainability | SDGs UM Buton",
  description:
    "Mata kuliah dan kurikulum pembelajaran berwawasan lingkungan dan pembangunan berkelanjutan di Universitas Muhammadiyah Buton.",
};

export default function CoursesPage() {
  const courses = [
    {
      code: "MKU-201",
      title: "Pendidikan Lingkungan Hidup & Kebencanaan",
      sks: "2 SKS",
      fakultas: "Universitas (Mata Kuliah Wajib)",
      semester: "Ganjil (Semester 1)",
      desc: "Menanamkan kesadaran ekologis, mitigasi gempa dan tsunami pesisir, serta etika Islam terhadap kelestarian alam semesta.",
      sdgs: [13, 15],
    },
    {
      code: "IKL-304",
      title: "Ekologi Laut Tropis & Manajemen Terumbu Karang",
      sks: "3 SKS",
      fakultas: "Fakultas Perikanan dan Ilmu Kelautan",
      semester: "Genap (Semester 4)",
      desc: "Kajian biodiversitas ekosistem laut Selat Buton, metode restorasi terumbu karang biorock, dan regulasi zonasi konservasi maritim.",
      sdgs: [14, 17],
    },
    {
      code: "TSI-412",
      title: "Infrastruktur Hijau & Gedung Ramah Lingkungan",
      sks: "3 SKS",
      fakultas: "Fakultas Teknik (Teknik Sipil)",
      semester: "Ganjil (Semester 5)",
      desc: "Prinsip desain bangunan hemat energi (green building), pemanfaatan aspal alam Buton, dan sistem sanitasi ramah lingkungan.",
      sdgs: [7, 9, 11],
    },
    {
      code: "HKM-320",
      title: "Hukum Lingkungan & Kearifan Lokal Maritim",
      sks: "2 SKS",
      fakultas: "Fakultas Hukum",
      semester: "Genap (Semester 6)",
      desc: "Hukum tata kelola pesisir dan pulau kecil, penegakan hukum lingkungan hidup, serta integrasi adat Ombo Buton dalam hukum positif.",
      sdgs: [14, 16],
    },
    {
      code: "AGR-215",
      title: "Pertanian Berkelanjutan Lahan Karst",
      sks: "3 SKS",
      fakultas: "Fakultas Pertanian",
      semester: "Ganjil (Semester 3)",
      desc: "Teknologi budidaya tanaman pangan lokal adaptif di lahan kering karst, konservasi tanah, dan pupuk organik mandiri.",
      sdgs: [2, 12, 15],
    },
    {
      code: "EKO-335",
      title: "Ekonomi Sirkular & Kewirausahaan Hijau",
      sks: "3 SKS",
      fakultas: "Fakultas Ekonomi dan Bisnis",
      semester: "Genap (Semester 6)",
      desc: "Model bisnis berkelanjutan (3R: Reduce, Reuse, Recycle), green accounting, dan pemberdayaan UMKM pesisir berbasis syariah.",
      sdgs: [8, 12],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <GraduationCap className="w-4 h-4" />
            <span>Teaching & Learning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Courses Related to Environmental Sustainability
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Kurikulum dan mata kuliah terintegrasi keberlanjutan yang diajarkan pada berbagai
            program studi di lingkungan Universitas Muhammadiyah Buton.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Integrasi Kurikulum Berbasis Outcome-Based Education (OBE)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Seluruh kurikulum program studi memuat capaian pembelajaran lulusan (CPL) yang berkaitan
              dengan kesadaran sosial, kelestarian ekologis, dan SDGs.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shrink-0 self-start sm:self-auto">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Prodi Terintegrasi</span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-[#FBECEE] text-[#71001D]">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {course.sks}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-800 group-hover:text-[#71001D] transition-colors leading-snug">
                  {course.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-1">
                  <p><strong className="text-slate-700">Fakultas:</strong> {course.fakultas}</p>
                  <p><strong className="text-slate-700">Semester:</strong> {course.semester}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {course.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {course.sdgs.map((sdgId) => {
                    const sdg = SDGS_LIST.find((s) => s.id === sdgId);
                    return (
                      <Link
                        key={sdgId}
                        href={`/sdgs/${sdg?.slug}`}
                        className="text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-xs"
                        style={{ backgroundColor: sdg?.color }}
                      >
                        SDG {sdgId}
                      </Link>
                    );
                  })}
                </div>

                <span className="text-xs font-semibold text-slate-400">Aktif Diajarkan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
