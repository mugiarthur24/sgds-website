"use client";

import React, { useState } from "react";
import { SDGS_LIST } from "@/data/sdgsData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    sdgGoal: "1",
    messageType: "Kolaborasi Riset",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#71001D] to-[#8F001C] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F8B018] border border-white/20">
            <Mail className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Kontak & Kemitraan SDGs
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Terhubung langsung dengan Tim Pusat SDGs Universitas Muhammadiyah Buton untuk
            inisiasi kemitraan, permohonan data, maupun pengaduan masyarakat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Details (Column 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <h2 className="text-xl font-bold text-[#263548]">
                Sekretariat SDGs Center
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#71001D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Alamat Kampus:</strong>
                    <span>
                      Gedung Rektorat Lt. 2, Universitas Muhammadiyah Buton, Jl. Betoambari No. 36,
                      Kel. Katobengke, Kec. Betoambari, Kota Baubau, Sulawesi Tenggara 93721
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#71001D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Surel Resmi:</strong>
                    <a href="mailto:sdgs@umbuton.ac.id" className="hover:text-[#71001D]">
                      sdgs@umbuton.ac.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#71001D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Telepon & Fax:</strong>
                    <span>(0402) 2821234 / Fax: (0402) 2821235</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#71001D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Jam Operasional:</strong>
                    <span>Senin - Jumat: 08.00 - 16.00 WITA</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                <strong className="text-slate-700 block">Mekanisme Koreksi & Pengaduan:</strong>
                <p>
                  Jika menemukan data atau klaim yang memerlukan klarifikasi, Anda dapat mengirimkan
                  catatan koreksi melalui formulir ini dengan melampirkan rujukan dokumen pendukung.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form (Column 6-12) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Pesan Anda Telah Diterima!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Terima kasih telah menghubungi Tim SDGs Universitas Muhammadiyah Buton.
                  Staf kami akan meninjau dan menindaklanjuti pesan Anda dalam 1-2 hari kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#71001D] text-white text-xs font-semibold hover:bg-[#8F001C] transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#263548]">
                  Formulir Kemitraan & Pertanyaan
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Silakan isi informasi di bawah ini untuk kolaborasi program, permohonan data, atau masukan.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Nama Lengkap *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Dr. Budi Santoso"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Instansi / Lembaga *</label>
                    <input
                      required
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Contoh: Bappeda Kab. Buton"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Alamat Surel (Email) *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@instansi.id"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Nomor Telepon / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Jenis Pesan</label>
                    <select
                      value={formData.messageType}
                      onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D] bg-white"
                    >
                      <option value="Kolaborasi Riset">Kolaborasi Riset & Pengabdian</option>
                      <option value="Kemitraan CSR">Kemitraan CSR / Industri</option>
                      <option value="Permohonan Data">Permohonan Data Indikator</option>
                      <option value="Koreksi Informasi">Koreksi Informasi / Pengaduan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Tujuan SDGs Terkait</label>
                    <select
                      value={formData.sdgGoal}
                      onChange={(e) => setFormData({ ...formData, sdgGoal: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D] bg-white"
                    >
                      {SDGS_LIST.map((s) => (
                        <option key={s.id} value={s.id.toString()}>
                          SDG {s.id}: {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Pesan / Uraian Rencana *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan rincian maksud, usulan kerjasama, atau permohonan Anda..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#71001D] hover:bg-[#8F001C] text-white text-sm font-semibold transition-all shadow hover:shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
