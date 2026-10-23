import HeroSection from "@/components/HeroSection";
import SDGGoalGrid from "@/components/SDGGoalGrid";
import HomeHighlights from "@/components/HomeHighlights";
import HomeImpactPreview from "@/components/HomeImpactPreview";
import HomePublications from "@/components/HomePublications";
import HomeCtaBanner from "@/components/HomeCtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with UM Buton Campus Image, Badge, & Headline */}
      <HeroSection />

      {/* 2. Ringkasan 17 Tujuan SDGs Grid */}
      <SDGGoalGrid />

      {/* 3. Three-Column Highlight: Tentang SDGs, Program Unggulan, Berita & Kegiatan */}
      <HomeHighlights />

      {/* 4. Capaian & Indikator Kunci */}
      <HomeImpactPreview />

      {/* 5. Publikasi & Laporan Pilihan */}
      <HomePublications />

      {/* 6. Call to Action / Kemitraan */}
      <HomeCtaBanner />
    </div>
  );
}
