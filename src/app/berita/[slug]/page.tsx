import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NEWS_LIST, SDGS_LIST } from "@/data/sdgsData";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
} from "lucide-react";

export function generateStaticParams() {
  return NEWS_LIST.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_LIST.find((n) => n.slug === slug);
  if (!article) return { title: "Berita Tidak Ditemukan" };
  return {
    title: `${article.title} | SDGs UM Buton`,
    description: article.summary,
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_LIST.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  // Related other news
  const otherNews = NEWS_LIST.filter((n) => n.id !== article.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#71001D] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Indeks Berita SDGs</span>
          </Link>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FBECEE] text-[#71001D]">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#71001D]" />
              {article.date}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#263548] leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-1.5 font-medium">
              <User className="w-4 h-4 text-slate-400" />
              <span>Oleh: {article.author}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Summary Lead */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F5F7FA] border-l-4 border-[#71001D] text-slate-700 text-sm sm:text-base font-medium leading-relaxed italic">
          {article.summary}
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* SDGs Relation Tags */}
        <div className="pt-6 border-t border-slate-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Tujuan Pembangunan Berkelanjutan Terkait:
          </span>
          <div className="flex flex-wrap gap-2">
            {article.sdgIds.map((id) => {
              const sdg = SDGS_LIST.find((s) => s.id === id);
              if (!sdg) return null;
              return (
                <Link
                  key={id}
                  href={`/sdgs/${sdg.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span>SDG {id}</span>
                  <span>- {sdg.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Related News */}
        {otherNews.length > 0 && (
          <div className="pt-10 border-t border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-[#263548]">
              Berita & Dokumentasi Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.slug}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#71001D]/40 transition-colors block group"
                >
                  <span className="text-xs text-slate-400 block mb-1">{item.date}</span>
                  <h4 className="font-semibold text-sm text-slate-800 group-hover:text-[#71001D]">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
