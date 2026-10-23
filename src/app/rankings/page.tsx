import React from "react";
import { Trophy } from "lucide-react";

export const metadata = {
  title: "Rankings | SDGs Universitas Muhammadiyah Buton",
  description:
    "Posisi pemeringkatan dan indikator keberlanjutan UM Buton pada UI GreenMetric, QS Sustainability, dan THE Impact Rankings.",
};

export default function RankingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Trophy className="w-4 h-4" />
            <span>Pemeringkatan & Benchmark Internasional</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Sustainability Rankings & Benchmarks
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Evaluasi capaian keberlanjutan kampus Universitas Muhammadiyah Buton berdasarkan
            standar pemeringkatan UI GreenMetric, QS Sustainability, dan THE Impact Rankings.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* 1. UI GreenMetric */}
        <section id="ui-greenmetric" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Peringkat Kampus Hijau
              </span>
              <h2 className="text-2xl font-extrabold text-[#263548] mt-2">
                UI GreenMetric World University Rankings
              </h2>
            </div>
            <div id="ui-greenmetric-rank" className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center sm:text-right">
              <span className="text-xs text-emerald-800 font-semibold block">Posisi Nasional:</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">Top 45</span>
              <span className="text-xs text-emerald-600 block">Perguruan Tinggi di Indonesia (2025)</span>
            </div>
          </div>

          <div id="ui-greenmetric-indicators" className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800">Capaian Indikator Utama UI GreenMetric:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Setting & Infrastructure (SI)", score: "820 / 1.500 Poin", desc: "Luas ruang terbuka hijau kampus 41.5% dan perlindungan cagar budaya" },
                { name: "Energy & Climate Change (EC)", score: "1.150 / 2.100 Poin", desc: "Penerapan PLTS 50 kWp dan lampu LED hemat daya di seluruh gedung" },
                { name: "Waste Management (WS)", score: "1.050 / 1.800 Poin", desc: "Pengolahan sampah organik 18.6 ton/tahun dan bank sampah terpadu" },
                { name: "Water Conservation (WR)", score: "720 / 1.000 Poin", desc: "Pemanenan air hujan (rainwater harvesting) dan kran otomatis hemat air" },
                { name: "Transportation (TR)", score: "1.020 / 1.800 Poin", desc: "Jalur pejalan kaki teduh kampus dan pembatasan kendaraan bermotor" },
                { name: "Education & Research (ED)", score: "1.420 / 1.800 Poin", desc: "Mata kuliah keberlanjutan dan lebih dari 140 artikel riset terindeks" },
              ].map((ind, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#71001D] block">{ind.name}</span>
                  <div className="text-lg font-extrabold text-slate-800">{ind.score}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. QS Sustainability Rankings */}
        <section id="qs-sustainability" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                Peringkat QS
              </span>
              <h2 className="text-2xl font-extrabold text-[#263548] mt-2">
                QS World University Rankings: Sustainability
              </h2>
            </div>
            <div id="qs-rank" className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-center sm:text-right">
              <span className="text-xs text-blue-800 font-semibold block">Kategori Asia:</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-700">Rank 550+</span>
              <span className="text-xs text-blue-600 block">Environmental & Social Impact (2025)</span>
            </div>
          </div>

          <div id="qs-indicators" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-800 text-base">Environmental Impact</h4>
              <div className="text-2xl font-extrabold text-[#71001D]">Skor: 68.4</div>
              <p className="text-xs text-slate-500">Riset maritim, transisi energi surya, dan tata kelola konservasi laut perairan Selat Buton.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-800 text-base">Social Impact</h4>
              <div className="text-2xl font-extrabold text-[#71001D]">Skor: 74.2</div>
              <p className="text-xs text-slate-500">Beasiswa afirmasi KIP 640+ mahasiswa, kesetaraan gender, dan pemberdayaan nelayan pulau terluar.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-800 text-base">Governance</h4>
              <div className="text-2xl font-extrabold text-[#71001D]">Skor: 81.0</div>
              <p className="text-xs text-slate-500">Transparansi keuangan, audit eksternal publik, dan zona integritas bebas gratifikasi.</p>
            </div>
          </div>
        </section>

        {/* 3. THE Impact Rankings */}
        <section id="the-impact" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                Times Higher Education
              </span>
              <h2 className="text-2xl font-extrabold text-[#263548] mt-2">
                THE University Impact Rankings
              </h2>
            </div>
            <div id="the-rank" className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-center sm:text-right">
              <span className="text-xs text-purple-800 font-semibold block">Peringkat Global THE:</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">801–1000</span>
              <span className="text-xs text-purple-600 block">Kategori SDG 4, 14 & 17 (2025)</span>
            </div>
          </div>

          <div id="the-indicators" className="space-y-4">
            <h3 className="font-bold text-lg text-slate-800">Tujuan SDGs dengan Capaian Tertinggi di THE:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded text-white bg-[#C5192D]">
                  SDG 4: Quality Education
                </span>
                <div className="text-xl font-extrabold text-slate-800">Skor: 71.5</div>
                <p className="text-xs text-slate-500">Akses pendidikan tinggi bagi anak pesisir dan pelatihan berkelanjutan untuk guru sekolah kepulauan.</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded text-white bg-[#0A97D9]">
                  SDG 14: Life Below Water
                </span>
                <div className="text-xl font-extrabold text-slate-800">Skor: 78.0</div>
                <p className="text-xs text-slate-500">Restorasi 3.650 fragmen karang dan aksi rutin pembersihan mikroplastik di pantai perairan Baubau.</p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded text-white bg-[#19486A]">
                  SDG 17: Partnerships for the Goals
                </span>
                <div className="text-xl font-extrabold text-slate-800">Skor: 83.2</div>
                <p className="text-xs text-slate-500">38 kemitraan pentahelix aktif dengan Bappeda, industri maritim, perbankan syariah, dan NGO lingkungan.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
