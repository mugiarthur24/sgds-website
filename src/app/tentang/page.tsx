import React from "react";
import Link from "next/link";
import {
  Globe2,
  ArrowRight,
  BookOpen,
  Leaf,
  Scale,
} from "lucide-react";

export const metadata = {
  title: "Tentang SDGs | Universitas Muhammadiyah Buton",
  description:
    "Komitmen institusi, arah kebijakan, dan tata kelola pencapaian 17 Sustainable Development Goals di Universitas Muhammadiyah Buton.",
};

export default function TentangPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Globe2 className="w-4 h-4" />
            <span>Agenda Pembangunan Berkelanjutan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tentang SDGs UM Buton
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Menyatukan nilai-nilai keislaman, keilmuan, dan kearifan maritim Buton untuk
            berkontribusi nyata pada 17 Tujuan Pembangunan Berkelanjutan (SDGs).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Section 1: Pengantar SDGs */}
        <section id="pengantar" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#71001D]">
              <Globe2 className="w-4 h-4" />
              <span>Pengantar SDGs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
              Agenda Global 2030 untuk Perubahan Nyata
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Sustainable Development Goals (SDGs) merupakan kesepakatan global yang ditetapkan oleh
              Perserikatan Bangsa-Bangsa (PBB) pada tahun 2015, memuat 17 Tujuan dan 169 Target
              untuk mengakhiri kemiskinan, mengurangi kesenjangan, dan melindungi bumi hingga tahun 2030.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Universitas Muhammadiyah Buton yang bertempat di Kepulauan Buton, Sulawesi Tenggara,
              memandang SDGs bukan sekadar dokumen seremonial, melainkan panduan etis dan strategis
              untuk mengarahkan catur dharma perguruan tinggi Muhammadiyah agar berdaya guna bagi
              kemaslahatan umat dan lingkungan.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-lg text-slate-800">4 Pilar SDGs UM Buton</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded-md bg-[#FBECEE] text-[#71001D] shrink-0 font-bold">01</span>
                <div>
                  <strong className="text-slate-800 block">Pilar Pembangunan Sosial</strong>
                  <span>Mewujudkan masyarakat yang terdidik, sehat, dan berkeadilan gender tanpa diskriminasi.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded-md bg-[#FBECEE] text-[#71001D] shrink-0 font-bold">02</span>
                <div>
                  <strong className="text-slate-800 block">Pilar Pembangunan Ekonomi</strong>
                  <span>Kewirausahaan maritim, inovasi hilirisasi aspal Buton, dan penciptaan kerja layak.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded-md bg-[#FBECEE] text-[#71001D] shrink-0 font-bold">03</span>
                <div>
                  <strong className="text-slate-800 block">Pilar Pembangunan Lingkungan</strong>
                  <span>Konservasi terumbu karang Selat Buton, kampus bebas plastik, dan energi surya terbarukan.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="p-1 rounded-md bg-[#FBECEE] text-[#71001D] shrink-0 font-bold">04</span>
                <div>
                  <strong className="text-slate-800 block">Pilar Hukum dan Tata Kelola</strong>
                  <span>Integritas kampus bebas korupsi (WBK) dan bantuan hukum gratis untuk masyarakat pesisir.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Komitmen Universitas */}
        <section id="komitmen" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Komitmen Institusi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
              Prinsip dan Komitmen Universitas Muhammadiyah Buton
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Komitmen kami berlandaskan pada integrasi nilai Al-Islam Kemuhammadiyahan dan sains modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:border-[#71001D]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FBECEE] text-[#71001D] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">1. Pendidikan Inklusif & Berkeadilan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Menyediakan akses pendidikan tinggi bagi anak-anak dari pulau terluar dan keluarga prasejahtera
                melalui skema beasiswa afirmasi, kurikulum OBE, dan sarana ramah disabilitas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:border-[#71001D]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">2. Kampus Hijau & Net Zero 2040</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Menerapkan efisiensi energi terbarukan 50 kWp, audit emisi karbon berkala, pengurangan sampah
                plastik sekali pakai 80%, serta konservasi air hujan di seluruh kawasan kampus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:border-[#71001D]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">3. Integritas & Transparansi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Memastikan tata kelola universitas yang akuntabel, bebas gratifikasi, audit keuangan publik,
                serta penyajian data capaian SDGs yang dapat diverifikasi sumber dan buktinya.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Kebijakan dan Tata Kelola */}
        <section id="tata-kelola" className="scroll-mt-24 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
              Tata Kelola & Validasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
              Alur Publikasi & Verifikasi Data SDGs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Untuk menjamin integritas informasi, tidak ada data atau capaian yang dipublikasikan ke portal
              tanpa melalui mekanisme validasi empat lapis berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-[#71001D] bg-[#FBECEE] px-2 py-0.5 rounded">
                Tahap 1
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Penulis / Pelaksana</h4>
              <p className="text-xs text-slate-500">
                Dosen, mahasiswa, atau unit kerja pelaksana mendokumentasikan kegiatan dan indikator capaian awal.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-[#71001D] bg-[#FBECEE] px-2 py-0.5 rounded">
                Tahap 2
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Verifikator Unit</h4>
              <p className="text-xs text-slate-500">
                Pimpinan fakultas atau lembaga (LPPM/BPM) memverifikasi bukti dokumen, foto asli, dan sumber anggaran.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-[#71001D] bg-[#FBECEE] px-2 py-0.5 rounded">
                Tahap 3
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Editor SDGs Center</h4>
              <p className="text-xs text-slate-500">
                Tim SDGs Center menyelaraskan target dengan indikator global PBB dan kriteria mutu universitas.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Tahap 4
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Publikasi Resmi</h4>
              <p className="text-xs text-slate-500">
                Data resmi ditampilkan di portal publik dan diarsipkan ke dalam database capaian tahunan universitas.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/capaian"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#71001D] text-white text-sm font-semibold hover:bg-[#8F001C] transition-colors"
            >
              <span>Lihat Indikator Terverifikasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/publikasi"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-700 text-sm font-semibold border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              <span>Unduh Dokumen Kebijakan</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
