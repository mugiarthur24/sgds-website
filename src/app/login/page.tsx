"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  Mail,
  CheckCircle2,
  KeyRound,
} from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState("editor");
  const [email, setEmail] = useState("admin.sdgs@umbuton.ac.id");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4">
        {/* Brand Logos */}
        <Link href="/" className="inline-flex items-center justify-center gap-2 group">
          <div className="p-2 bg-white rounded-xl shadow-xs border border-slate-200">
            <Image
              src="/images/logo-um-buton.png"
              alt="UM Buton"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>
        </Link>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#263548]">
            Portal Administrasi SDGs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Sistem Verifikasi & Pengelolaan Data Pembangunan Berkelanjutan
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-slate-200 sm:px-10">
          {isLoggedIn ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Otentikasi Berhasil!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Selamat datang kembali di Dashboard Verifikasi SDGs UM Buton sebagai{" "}
                <strong className="text-[#71001D] capitalize">{role}</strong>.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left text-slate-600 space-y-1">
                <div className="font-semibold text-slate-700">Akses Modul:</div>
                <p>✓ Entri & Validasi Indikator 2025</p>
                <p>✓ Pengesahan Laporan Unit Kerja</p>
                <p>✓ Manajemen Berita & Publikasi</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full px-4 py-2 bg-[#71001D] text-white rounded-xl text-xs font-semibold hover:bg-[#8F001C] transition-colors"
                >
                  Keluar Sesi Simulasi
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Role Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Peran Pengguna (Role Sesuai SK)
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: "penulis", label: "Penulis Unit" },
                    { id: "verifikator", label: "Verifikator" },
                    { id: "editor", label: "Editor SDGs" },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`py-2 px-2 rounded-xl font-semibold border transition-all text-center ${
                        role === r.id
                          ? "bg-[#71001D] text-white border-[#71001D] shadow-sm"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  Akun SSO / Surel Resmi Universitas
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@umbuton.ac.id"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  Kata Sandi (Password)
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#71001D]/20 focus:border-[#71001D]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded text-[#71001D] focus:ring-[#71001D]"
                  />
                  <span>Ingat perangkat ini</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert("Silakan hubungi Biro Sistem Informasi UM Buton untuk reset akun.")}
                  className="font-semibold text-[#71001D] hover:underline"
                >
                  Lupa kata sandi?
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#71001D] hover:bg-[#8F001C] text-white text-sm font-semibold transition-all shadow hover:shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span>Memverifikasi kredensial...</span>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>Masuk ke Dashboard</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Security Alert Footer */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Portal ini diamankan dengan enkripsi SSL 256-bit dan diawasi oleh Biro Sistem Informasi
              Universitas Muhammadiyah Buton. Akses tidak sah akan dicatat.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-[#71001D] transition-colors"
          >
            ← Kembali ke Beranda Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
