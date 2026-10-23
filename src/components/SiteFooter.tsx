"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Leaf,
  Users2,
  Globe,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="w-full text-white bg-[#520015] border-t-4 border-[#F8B018] mt-auto">
      {/* Top Banner with 4 Pillars */}
      <div className="bg-[#71001D] border-b border-red-950/40 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#F8B018] font-bold block">
              Bersama SDGs
            </span>
            <span className="text-lg sm:text-xl font-bold font-serif italic text-white">
              Kita Wujudkan Masa Depan yang Berkelanjutan
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs text-white/90">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F8B018] shrink-0" />
              <span>Pendidikan Berkualitas</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-[#F8B018] shrink-0" />
              <span>Lingkungan Lestari</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-5 h-5 text-[#F8B018] shrink-0" />
              <span>Masyarakat Sejahtera</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#F8B018] shrink-0" />
              <span>Dunia Berkelanjutan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Identity & Campus Info */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-flex items-center gap-3 shadow-xs">
              <Image
                src="/images/logo-um-buton.png"
                alt="Logo Resmi UM Buton"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-tight border-l border-slate-200 pl-2.5 text-slate-900">
                <span className="font-extrabold text-xs text-[#71001D] uppercase">UM Buton</span>
                <span className="font-bold text-[10px] text-amber-600 uppercase">SDGs Center</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pusat Tujuan Pembangunan Berkelanjutan (SDGs Center) Universitas Muhammadiyah Buton sebagai motor penggerak pendidikan, riset, pengabdian masyarakat, dan tata kelola berkelanjutan di kawasan kepulauan.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8B018] shrink-0 mt-0.5" />
                <span>Jl. Betoambari No. 36, Kel. Katobengke, Kec. Betoambari, Kota Baubau, Sulawesi Tenggara 93721</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F8B018] shrink-0" />
                <a href="mailto:sdgs@umbuton.ac.id" className="hover:text-white transition-colors">
                  sdgs@umbuton.ac.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F8B018] shrink-0" />
                <span>(0402) 2821234 / Fax: (0402) 2821235</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8B018]">
              Tautan Utama
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#F8B018] transition-colors">
                  Beranda Portal
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#F8B018] transition-colors">
                  Tentang SDGs & Komitmen Kampus
                </Link>
              </li>
              <li>
                <Link href="/sdgs" className="hover:text-[#F8B018] transition-colors">
                  17 Tujuan Pembangunan Berkelanjutan
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-[#F8B018] transition-colors">
                  Program & Aksi Nyata
                </Link>
              </li>
              <li>
                <Link href="/capaian" className="hover:text-[#F8B018] transition-colors">
                  Statistik & Capaian Indikator
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-[#F8B018] transition-colors">
                  Kabar & Kegiatan Terbaru
                </Link>
              </li>
              <li>
                <Link href="/publikasi" className="hover:text-[#F8B018] transition-colors">
                  Laporan SDGs & Dokumen Unduhan
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#F8B018] transition-colors">
                  Galeri Dokumentasi Kampus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: 4 Pilar SDGs */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8B018]">
              Pilar SDGs UM Buton
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <strong className="text-white block">1. Pilar Sosial</strong>
                <span>Kemiskinan, Kelaparan, Kesehatan, Pendidikan Berkualitas, Kesetaraan Gender (SDGs 1-5)</span>
              </li>
              <li>
                <strong className="text-white block">2. Pilar Ekonomi</strong>
                <span>Energi Bersih, Pekerjaan Layak, Inovasi Industri, Kesenjangan, Kemitraan (SDGs 7-10, 17)</span>
              </li>
              <li>
                <strong className="text-white block">3. Pilar Lingkungan</strong>
                <span>Air Bersih, Kota Berkelanjutan, Konsumsi 3R, Iklim, Lautan & Daratan (SDGs 6, 11-15)</span>
              </li>
              <li>
                <strong className="text-white block">4. Pilar Hukum & Tata Kelola</strong>
                <span>Perdamaian, Keadilan, WBK & Kelembagaan Tangguh (SDG 16)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Tata Kelola & Admin */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F8B018]">
              Tata Kelola & Transparansi
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Seluruh data indikator dan laporan program SDGs melalui proses verifikasi berjenjang dari unit pelaksana, penjaminan mutu, hingga admin SDGs universitas.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                <ShieldCheck className="w-4 h-4 text-[#F8B018]" />
                <span>Portal Verifikasi & Login Admin</span>
              </Link>
              <div className="text-[11px] text-slate-400">
                Alur verifikasi: Penulis &rarr; Verifikator Unit &rarr; Editor SDGs &rarr; Publikasi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Disclaimer Bar */}
      <div className="border-t border-white/10 py-5 bg-[#420011] px-4 text-center text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 SDGs Universitas Muhammadiyah Buton. Hak cipta dilindungi.</p>
          <p className="text-[#F8B018] font-medium">Bersama SDGs, Wujudkan Masa Depan yang Berkelanjutan.</p>
        </div>
      </div>
    </footer>
  );
}
