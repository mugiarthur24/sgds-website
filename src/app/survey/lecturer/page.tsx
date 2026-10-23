"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";

export default function LecturerSurveyPage() {
  const [formData, setFormData] = useState({
    name: "",
    nidn: "",
    faculty: "Fakultas Perikanan dan Ilmu Kelautan",
    q1: "Sangat Paham",
    q2: "Sering",
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
          <span className="text-xs font-bold uppercase tracking-wider text-[#71001D]">
            Kuesioner Resmi SDGs UM Buton
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
            Survey on Sustainability Literacy and Knowledge for Lecturers
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Survei ini mengukur pemahaman dosen mengenai 17 Tujuan SDGs dan integrasinya ke dalam
            kurikulum pembelajaran, penelitian, pengabdian masyarakat, dan Al-Islam Kemuhammadiyahan.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Terima Kasih, Respon Anda Telah Tersimpan!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Data masukan Anda akan digunakan sebagai baseline penyusunan Sustainability Report
              dan akreditasi internasional universitas.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full bg-[#71001D] text-white text-xs font-semibold hover:bg-[#8F001C] transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-4 pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">1. Data Dosen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Lengkap & Gelar *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Dr. Ir. Ahmad, M.Si."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">NIDN / NBM *</label>
                  <input
                    required
                    type="text"
                    value={formData.nidn}
                    onChange={(e) => setFormData({ ...formData, nidn: e.target.value })}
                    placeholder="Contoh: 0912048501"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Fakultas Homebase *</label>
                <select
                  value={formData.faculty}
                  onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D] bg-white text-slate-700"
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
              <h3 className="font-bold text-base text-slate-800">2. Integrasi Keberlanjutan dalam Catur Dharma</h3>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Seberapa familiar Anda dengan 17 Tujuan SDGs dan target indikator pendidikan tinggi?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Sangat Paham", "Paham", "Cukup", "Kurang Paham"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, q1: opt })}
                      className={`p-2 rounded-xl border text-center font-medium transition-all ${
                        formData.q1 === opt
                          ? "bg-[#71001D] text-white border-[#71001D] shadow-xs"
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
                  Seberapa sering Anda mengaitkan studi kasus keberlanjutan dan SDGs dalam mata kuliah yang Anda ampu?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Selalu", "Sering", "Kadang-kadang", "Belum Pernah"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, q2: opt })}
                      className={`p-2 rounded-xl border text-center font-medium transition-all ${
                        formData.q2 === opt
                          ? "bg-[#71001D] text-white border-[#71001D] shadow-xs"
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
                  Usulan pengembangan riset kolaboratif dan hibah pengabdian bertema SDGs:
                </label>
                <textarea
                  rows={3}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  placeholder="Tuliskan ide riset atau kebutuhan fasilitas pendukung..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#71001D] hover:bg-[#8F001C] text-white text-xs sm:text-sm font-semibold transition-all shadow hover:shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Survei Dosen</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
