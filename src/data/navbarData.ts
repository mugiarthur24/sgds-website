export interface NavSubItem {
  title: string;
  href: string;
  badge?: string;
  desc?: string;
}

export interface NavParentItem {
  title: string;
  href?: string;
  subItems?: NavSubItem[];
  groupedItems?: {
    groupTitle: string;
    items: NavSubItem[];
  }[];
}

export const NAVBAR_MENU: NavParentItem[] = [
  {
    title: "Profile",
    href: "/tentang",
  },
  {
    title: "Sustainability Agenda",
    subItems: [
      { title: "Agenda", href: "/berita", desc: "Jadwal kegiatan, seminar, dan workshop SDGs" },
      { title: "Program", href: "/program", desc: "Inisiatif dan program strategis kampus" },
    ],
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Teaching Learning",
    subItems: [
      {
        title: "Courses Related to Environmental Sustainability",
        href: "/courses",
        desc: "Daftar mata kuliah dan kurikulum berwawasan lingkungan",
      },
    ],
  },
  {
    title: "Publication",
    groupedItems: [
      {
        groupTitle: "Sustainability Report",
        items: [
          { title: "Sustainability Report 2023", href: "/publikasi?type=Laporan&year=2023" },
          { title: "Sustainability Report 2024", href: "/publikasi?type=Laporan&year=2024" },
          { title: "Sustainability Report 2025", href: "/publikasi?type=Laporan&year=2025" },
        ],
      },
    ],
  },
  {
    title: "Policies",
    subItems: [
      {
        title: "Sustainable Green Campus Policy",
        href: "/policies/sustainable-green-campus-policy",
        desc: "Kebijakan tata kelola kampus hijau & ramah lingkungan",
      },
      {
        title: "Sustainable Procurement Policy",
        href: "/policies/sustainable-procurement-policy",
        desc: "Pedoman pengadaan barang & jasa berkelanjutan",
      },
      {
        title: "Investment and Asset Utilisation Policy",
        href: "/policies/investment-and-asset-utilisation-policy",
        desc: "Kebijakan investasi etis dan pemanfaatan aset kampus",
      },
      {
        title: "Equality, Diversity and Inclusion Policy",
        href: "/policies/equality-diversity-and-inclusion-policy",
        desc: "Kebijakan kesetaraan, non-diskriminasi, dan inklusi",
      },
      {
        title: "Anti-Gratification Policy",
        href: "/policies/anti-gratification-policy",
        desc: "Integritas zona bebas korupsi dan anti-gratifikasi",
      },
      {
        title: "Renovation and Energy-Efficient Building Policy",
        href: "/policies/renovation-and-energy-efficient-building-policy",
        desc: "Standar renovasi dan gedung hemat energi",
      },
      {
        title: "Policy on Energy Consumption Reduction",
        href: "/policies/policy-on-energy-consumption-reduction",
        desc: "Strategi reduksi konsumsi listrik dan emisi karbon",
      },
    ],
  },
  {
    title: "Rankings",
    groupedItems: [
      {
        groupTitle: "UI GreenMetric",
        items: [
          { title: "Indicators", href: "/rankings#ui-greenmetric-indicators" },
          { title: "Our Rank", href: "/rankings#ui-greenmetric-rank" },
        ],
      },
      {
        groupTitle: "QS Sustainability",
        items: [
          { title: "Indicators", href: "/rankings#qs-indicators" },
          { title: "Our Rank", href: "/rankings#qs-rank" },
        ],
      },
      {
        groupTitle: "THE Impact Rankings",
        items: [
          { title: "Indicators", href: "/rankings#the-indicators" },
          { title: "Our Rank", href: "/rankings#the-rank" },
        ],
      },
    ],
  },
  {
    title: "SDGs Survey",
    subItems: [
      {
        title: "Lecturer Survey",
        href: "/survey/lecturer",
        desc: "Survei pemahaman & literasi keberlanjutan dosen",
      },
      {
        title: "Student Survey",
        href: "/survey/student",
        desc: "Survei perilaku & kepedulian lingkungan mahasiswa",
      },
    ],
  },
];
