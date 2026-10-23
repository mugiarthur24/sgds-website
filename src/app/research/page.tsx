import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Microscope } from "lucide-react";
import { SDGS_LIST } from "@/data/sdgsData";

export const metadata = {
  title: "Research | SDGs Universitas Muhammadiyah Buton",
  description:
    "Riset terapan, inovasi kemaritiman, dan publikasi ilmiah berorientasi Sustainable Development Goals di UM Buton.",
};

export default function ResearchPage() {
  const researchProjects = [
    {
      title: "Valorisasi Aspal Alam Buton untuk Infrastruktur Jalan Ramah Lingkungan",
      lead: "Dr. Eng. Suwardi, S.T., M.T.",
      unit: "Fakultas Teknik & LPPM",
      sdgs: [9, 11, 12],
      year: "2024 - 2025",
      status: "Selesai & Terpatenkan",
      journal: "International Journal of Sustainable Transportation (Scopus Q2)",
    },
    {
      title: "Dinamika Terumbu Karang dan Pemulihan Ekosistem Biorock di Selat Buton",
      lead: "Dr. La Ode M. Aslan, S.Pi., M.Si.",
      unit: "Fakultas Perikanan dan Ilmu Kelautan",
      sdgs: [13, 14],
      year: "2024 - 2026",
      status: "Sedang Berjalan",
      journal: "Journal of Marine Environmental Research (Scopus Q1)",
    },
    {
      title: "Model Ketahanan Pangan Kepulauan Berbasis Ubi Lokal dan Akuaponik Hemat Air",
      lead: "Ir. Wa Ode Rustiani, M.Si.",
      unit: "Fakultas Pertanian",
      sdgs: [2, 12, 15],
      year: "2025",
      status: "Sedang Berjalan",
      journal: "Jurnal Agroekoteknologi Tropika (Sinta 2)",
    },
    {
      title: "Akses Keadilan Hukum bagi Masyarakat Nelayan Tradisional di Wilayah 3T Sultra",
      lead: "Dr. La Ode Syarifuddin, S.H., M.H.",
      unit: "Fakultas Hukum & Biro Bantuan Hukum",
      sdgs: [10, 16],
      year: "2025",
      status: "Sedang Berjalan",
      journal: "Jurnal Konstitusi & Keadilan Sosial (Sinta 2)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Microscope className="w-4 h-4" />
            <span>Riset & Inovasi Berkelanjutan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Research & Scientific Publications
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Pengembangan riset unggulan dosen dan mahasiswa Universitas Muhammadiyah Buton dalam
            menjawab tantangan kemaritiman, lingkungan pesisir, dan kesejahteraan masyarakat kepulauan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Research Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-3xl font-extrabold text-[#71001D]">140+</div>
            <div className="text-xs font-bold text-slate-700">Publikasi SDGs Terindeks</div>
            <div className="text-[11px] text-slate-400">Scopus & Sinta (2023-2025)</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-3xl font-extrabold text-[#71001D]">38</div>
            <div className="text-xs font-bold text-slate-700">Paten & HKI Terdaftar</div>
            <div className="text-[11px] text-slate-400">Kemenkumham RI</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-3xl font-extrabold text-[#71001D]">Rp 2.4 M</div>
            <div className="text-xs font-bold text-slate-700">Hibah Riset Berkelanjutan</div>
            <div className="text-[11px] text-slate-400">Dikti & Dana Internal Kampus</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <div className="text-3xl font-extrabold text-[#71001D]">100%</div>
            <div className="text-xs font-bold text-slate-700">Fakultas Terlibat</div>
            <div className="text-[11px] text-slate-400">7 Fakultas di UM Buton</div>
          </div>
        </div>

        {/* Featured Research List */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-[#263548]">
              Proyek Riset SDGs Unggulan
            </h2>
            <p className="text-sm text-slate-600">
              Dokumentasi penelitian dosen yang berdampak langsung terhadap indikator tujuan global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FBECEE] text-[#71001D]">
                      {proj.unit}
                    </span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-800 leading-snug">
                    {proj.title}
                  </h3>

                  <div className="text-xs text-slate-500 space-y-1">
                    <p><strong className="text-slate-700">Ketua Peneliti:</strong> {proj.lead}</p>
                    <p><strong className="text-slate-700">Target Jurnal:</strong> {proj.journal}</p>
                    <p><strong className="text-slate-700">Tahun Riset:</strong> {proj.year}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.sdgs.map((sdgId) => {
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

                  <Link
                    href="/publikasi"
                    className="text-xs font-semibold text-[#71001D] hover:underline flex items-center gap-1"
                  >
                    <span>Repositori Riset</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
