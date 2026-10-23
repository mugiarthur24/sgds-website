"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSearch } from "@/context/SearchContext";
import { SDGS_LIST } from "@/data/sdgsData";
import {
  Search,
  User,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Award,
  Globe2,
  Building,
  CheckCircle2,
} from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tentangDropdown, setTentangDropdown] = useState(false);
  const [sdgsDropdown, setSdgsDropdown] = useState(false);
  const [programDropdown, setProgramDropdown] = useState(false);
  const [mobileSdgsOpen, setMobileSdgsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setTentangDropdown(false);
    setSdgsDropdown(false);
    setProgramDropdown(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItemClass = (active: boolean) =>
    `h-9 px-2.5 xl:px-3 rounded-lg inline-flex items-center justify-center text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium transition-all duration-150 ${
      active
        ? "text-[#71001D] font-bold bg-[#71001D]/8 shadow-xs border border-[#71001D]/15"
        : "text-slate-700 hover:text-[#71001D] hover:bg-slate-100/80 border border-transparent"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "shadow-md border-b border-slate-200/90 py-2"
          : "border-b border-slate-200 py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
        {/* Left: Official Brand & Logo Seal */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          {/* Official University Emblem */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-xs transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/logo-um-buton.png"
              alt="Logo Resmi Universitas Muhammadiyah Buton"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Separator Line */}
          <div className="hidden sm:block h-7 w-[1.5px] bg-slate-200"></div>

          {/* Campus & SDGs Text */}
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-[13px] sm:text-[14px] font-extrabold tracking-tight text-[#71001D] uppercase">
              UM Buton
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#F8B018] tracking-wider uppercase">
              SDGs Center
            </span>
          </div>

          {/* SDGs Wheel Badge */}
          <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 shrink-0 hidden md:block opacity-90 transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="/images/sdgs-wheel-badge.png"
              alt="SDGs Wheel"
              width={34}
              height={34}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation - Rata & Symmetrical */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 max-w-4xl">
          {/* Beranda */}
          <Link
            href="/"
            onClick={closeMenus}
            className={navItemClass(isActive("/"))}
          >
            Beranda
          </Link>

          {/* Tentang SDGs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTentangDropdown(true)}
            onMouseLeave={() => setTentangDropdown(false)}
          >
            <Link
              href="/tentang"
              onClick={closeMenus}
              className={`${navItemClass(isActive("/tentang"))} group`}
            >
              <span>Tentang SDGs</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-[#71001D] transition-transform duration-200" />
            </Link>

            {tentangDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <Link
                  href="/tentang#pengantar"
                  onClick={closeMenus}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D] transition-colors"
                >
                  <Globe2 className="w-4 h-4 text-[#71001D]" />
                  <span>Pengantar SDGs</span>
                </Link>
                <Link
                  href="/tentang#komitmen"
                  onClick={closeMenus}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#71001D]" />
                  <span>Komitmen Universitas</span>
                </Link>
                <Link
                  href="/tentang#tata-kelola"
                  onClick={closeMenus}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D] transition-colors"
                >
                  <Building className="w-4 h-4 text-[#71001D]" />
                  <span>Kebijakan & Tata Kelola</span>
                </Link>
              </div>
            )}
          </div>

          {/* 17 Tujuan SDGs Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSdgsDropdown(true)}
            onMouseLeave={() => setSdgsDropdown(false)}
          >
            <Link
              href="/sdgs"
              onClick={closeMenus}
              className={`${navItemClass(isActive("/sdgs"))} group`}
            >
              <span>17 Tujuan SDGs</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-[#71001D] transition-transform duration-200" />
            </Link>

            {sdgsDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#71001D]" />
                    <span className="font-extrabold text-sm text-slate-900">
                      17 Tujuan Pembangunan Berkelanjutan (SDGs)
                    </span>
                  </div>
                  <Link
                    href="/sdgs"
                    onClick={closeMenus}
                    className="text-xs font-bold text-[#71001D] hover:underline"
                  >
                    Lihat Semua Halaman SDGs &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1">
                  {SDGS_LIST.map((sdg) => (
                    <Link
                      key={sdg.id}
                      href={`/sdgs/${sdg.slug}`}
                      onClick={closeMenus}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 group"
                    >
                      <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200 group-hover:scale-105 transition-transform">
                        <Image
                          src={`/images/sdgs/goal-${sdg.id}.png`}
                          alt={`SDG ${sdg.id}`}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#71001D] block truncate">
                          SDG {sdg.id}
                        </span>
                        <span className="text-[11px] text-slate-500 block truncate leading-tight">
                          {sdg.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Program & Kegiatan Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramDropdown(true)}
            onMouseLeave={() => setProgramDropdown(false)}
          >
            <Link
              href="/program"
              onClick={closeMenus}
              className={`${navItemClass(isActive("/program"))} group`}
            >
              <span>Program</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-[#71001D] transition-transform duration-200" />
            </Link>

            {programDropdown && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <Link
                  href="/program?cat=Pendidikan"
                  onClick={closeMenus}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D]"
                >
                  <BookOpen className="w-4 h-4 text-[#71001D]" />
                  <span>Pendidikan & Inklusi</span>
                </Link>
                <Link
                  href="/program?cat=Penelitian"
                  onClick={closeMenus}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D]"
                >
                  <Award className="w-4 h-4 text-[#71001D]" />
                  <span>Penelitian & Inovasi Maritim</span>
                </Link>
                <Link
                  href="/program?cat=Pengabdian"
                  onClick={closeMenus}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D]"
                >
                  <Globe2 className="w-4 h-4 text-[#71001D]" />
                  <span>Pengabdian kepada Masyarakat</span>
                </Link>
                <Link
                  href="/program?cat=Kampus"
                  onClick={closeMenus}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D]"
                >
                  <Building className="w-4 h-4 text-[#71001D]" />
                  <span>Kampus Berkelanjutan (Green Campus)</span>
                </Link>
                <Link
                  href="/program?cat=Kemitraan"
                  onClick={closeMenus}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-[#FBECEE] hover:text-[#71001D]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#71001D]" />
                  <span>Kemitraan Pentahelix</span>
                </Link>
              </div>
            )}
          </div>

          {/* Capaian */}
          <Link
            href="/capaian"
            onClick={closeMenus}
            className={navItemClass(isActive("/capaian"))}
          >
            Capaian
          </Link>

          {/* Berita */}
          <Link
            href="/berita"
            onClick={closeMenus}
            className={navItemClass(isActive("/berita"))}
          >
            Berita
          </Link>

          {/* Publikasi */}
          <Link
            href="/publikasi"
            onClick={closeMenus}
            className={navItemClass(isActive("/publikasi"))}
          >
            Publikasi
          </Link>

          {/* Galeri */}
          <Link
            href="/galeri"
            onClick={closeMenus}
            className={navItemClass(isActive("/galeri"))}
          >
            Galeri
          </Link>

          {/* Kontak */}
          <Link
            href="/kontak"
            onClick={closeMenus}
            className={navItemClass(isActive("/kontak"))}
          >
            Kontak
          </Link>
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={openSearch}
            aria-label="Pencarian"
            className="p-2 sm:p-2.5 rounded-full text-slate-600 hover:text-[#71001D] hover:bg-slate-100 transition-colors flex items-center justify-center border border-transparent hover:border-slate-200"
            title="Cari (Ctrl+K)"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            onClick={closeMenus}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#71001D] text-white text-xs sm:text-sm font-semibold hover:bg-[#8F001C] transition-all shadow-xs hover:shadow"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto px-4 py-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Beranda
          </Link>

          <div className="space-y-1">
            <span className="block px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Tentang SDGs
            </span>
            <Link
              href="/tentang"
              onClick={closeMenus}
              className="block px-4 py-1.5 text-sm text-slate-700 hover:text-[#71001D]"
            >
              Pengantar & Komitmen
            </Link>
            <Link
              href="/tentang#tata-kelola"
              onClick={closeMenus}
              className="block px-4 py-1.5 text-sm text-slate-700 hover:text-[#71001D]"
            >
              Kebijakan & Tata Kelola
            </Link>
          </div>

          {/* Mobile 17 Tujuan SDGs Accordion with Logos */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileSdgsOpen(!mobileSdgsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              <span>17 Tujuan SDGs</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  mobileSdgsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSdgsOpen && (
              <div className="grid grid-cols-2 gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                <Link
                  href="/sdgs"
                  onClick={closeMenus}
                  className="col-span-2 text-xs font-bold text-[#71001D] py-1 border-b border-slate-200 mb-1"
                >
                  &rarr; Buka Halaman Utama 17 SDGs
                </Link>
                {SDGS_LIST.map((sdg) => (
                  <Link
                    key={sdg.id}
                    href={`/sdgs/${sdg.slug}`}
                    onClick={closeMenus}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-slate-200"
                  >
                    <div className="relative w-7 h-7 rounded overflow-hidden shrink-0">
                      <Image
                        src={`/images/sdgs/goal-${sdg.id}.png`}
                        alt={`SDG ${sdg.id}`}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 truncate">
                      SDG {sdg.id}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-1">
            <span className="block px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Program & Kegiatan
            </span>
            <Link
              href="/program"
              onClick={closeMenus}
              className="block px-4 py-1.5 text-sm text-slate-700 hover:text-[#71001D]"
            >
              Semua Program
            </Link>
            <Link
              href="/program?cat=Kampus"
              onClick={closeMenus}
              className="block px-4 py-1.5 text-sm text-slate-700 hover:text-[#71001D]"
            >
              Green Campus & Keberlanjutan
            </Link>
          </div>

          <Link
            href="/capaian"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Capaian & Indikator
          </Link>

          <Link
            href="/berita"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Berita & Kegiatan
          </Link>

          <Link
            href="/publikasi"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Publikasi & Dokumen
          </Link>

          <Link
            href="/galeri"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Galeri Dokumentasi
          </Link>

          <Link
            href="/kontak"
            onClick={closeMenus}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Kontak & Kerjasama
          </Link>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                closeMenus();
                openSearch();
              }}
              className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2"
            >
              <Search className="w-4 h-4 text-[#71001D]" />
              <span>Buka Pencarian</span>
            </button>
            <Link
              href="/login"
              onClick={closeMenus}
              className="px-4 py-2 bg-[#71001D] text-white text-xs font-semibold rounded-full"
            >
              Login Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
