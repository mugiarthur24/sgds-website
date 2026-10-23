"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";

export default function StudentSurveyPage() {
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    faculty: "Fakultas Teknik",
    q1: "Sering",
    q2: "Selalu",
    q3: "Sangat Penting",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/survey"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#71001D] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Survei</span>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Kuesioner Mahasiswa UM Buton
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
            Student Survey on Sustainability & Green Campus
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Kuesioner ini mengukur perilaku kepedulian lingkungan mahasiswa, kebiasaan pemilahan sampah,
            dan aspirasi fasilitas kampus hijau di Universitas Muhammadiyah Buton.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Terima Kasih, Jawabanmu Telah Dikirim!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Setiap masukanmu berkontribusi nyata mewujudkan kampus UM Buton yang lebih hijau, asri,
              dan ramah lingkungan.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-4 pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">1. Data Mahasiswa</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Mahasiswa *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Rahmat Hidayat"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nomor Induk Mahasiswa (NIM) *</label>
                  <input
                    required
                    type="text"
                    value={formData.nim}
                    onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                    placeholder="Contoh: 012201045"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Fakultas *</label>
                <select
                  value={formData.faculty}
                  onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 bg-white text-slate-700"
                >
                  <option value="Fakultas Perikanan dan Ilmu Kelautan">Fakultas Perikanan dan Ilmu Kelautan</option>
                  <option value="Fakultas Teknik">Fakultas Teknik</option>
                  <option value="Fakultas Pertanian">Fakultas Pertanian</option>
                  <option value="Fakultas Ekonomi dan Bisnis">Fakultas Ekonomi dan Bisnis</option>
                  <option value="Fakultas Hukum">Fakultas Hukum</option>
                  <option value="Fakultas Keguruan dan Ilmu Pendidikan">Fakultas Keguruan dan Ilmu Pendidikan</option>
                  <option value="Fakultas Ilmu Sosial dan Ilmu Politik">Fakultas Ilmu Sosial dan Ilmu Politik</option>
                </select>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold text-base text-slate-800">2. Kepedulian & Gaya Hidup Kampus Hijau</h3>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Seberapa sering Anda menggunakan tumbler / botol minum pribadi untuk isi ulang air di kampus?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Selalu", "Sering", "Kadang-kadang", "Belum Pernah"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, q1: opt })}
                      className={`p-2 rounded-xl border text-center font-medium transition-all ${
                        formData.q1 === opt
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Apakah Anda selalu memilah sampah organik dan anorganik saat membuang sampah di tempat sampah kampus?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Selalu", "Sering", "Kadang-kadang", "Belum Pernah"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, q2: opt })}
                      className={`p-2 rounded-xl border text-center font-medium transition-all ${
                        formData.q2 === opt
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Aspirasi fasilitas kampus hijau yang paling Anda butuhkan (contoh: stasiun sepeda, kanopi tanaman peneduh, dsb.):
                </label>
                <textarea
                  rows={3}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  placeholder="Tuliskan aspirasi atau kebutuhanmu..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all shadow hover:shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Survei Mahasiswa</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
