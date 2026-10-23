export interface SDGGoal {
  id: number;
  slug: string;
  name: string;
  englishName: string;
  color: string;
  textColor: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  universityCommitment: string;
  targets: {
    code: string;
    description: string;
    campusAction: string;
  }[];
  indicators: {
    name: string;
    target: string;
    achievement: string;
    unit: string;
    year: string;
    source: string;
    updatedAt: string;
  }[];
  programs: string[];
  pic: {
    unit: string;
    head: string;
    email: string;
    phone: string;
  };
}

export interface ProgramItem {
  id: string;
  title: string;
  category: "Pendidikan" | "Penelitian & Inovasi" | "Pengabdian Masyarakat" | "Kampus Berkelanjutan" | "Kemitraan";
  sdgIds: number[];
  unit: string;
  lead: string;
  period: string;
  location: string;
  status: "Sedang Berjalan" | "Selesai" | "Berkelanjutan";
  summary: string;
  description: string;
  impactMetrics: string[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  sdgIds: number[];
  author: string;
  summary: string;
  content: string[];
  imageUrl: string;
  readingTime: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: "Laporan SDGs" | "Kebijakan & Panduan" | "Jurnal & Riset" | "Infografik";
  year: number;
  sdgIds: number[];
  fileSize: string;
  format: "PDF" | "DOCX";
  description: string;
  downloadUrl: string;
  publishedBy: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Pendidikan" | "Pengabdian" | "Kampus Hijau" | "Kemitraan";
  date: string;
  imageUrl: string;
  caption: string;
  sdgId: number;
}

export const SDGS_LIST: SDGGoal[] = [
  {
    id: 1,
    slug: "tanpa-kemiskinan",
    name: "Tanpa Kemiskinan",
    englishName: "No Poverty",
    color: "#E5243B",
    textColor: "#ffffff",
    icon: "ShieldAlert",
    shortDesc: "Mengakhiri kemiskinan dalam segala bentuk di mana pun.",
    fullDesc: "Universitas Muhammadiyah Buton berkomitmen menyediakan akses beasiswa bagi mahasiswa kurang mampu, melaksanakan KKN Tematik pengentasan kemiskinan pesisir di Kepulauan Buton, serta pendampingan ekonomi produktif masyarakat lokal.",
    universityCommitment: "Memberikan beasiswa afirmasi bagi 30% mahasiswa berlatar belakang ekonomi rentan dan menjalankan inkubasi usaha mikro binaan UM Buton.",
    targets: [
      { code: "1.1", description: "Mengentaskan kemiskinan ekstrem", campusAction: "Pemberian beasiswa penuh KIP-Kuliah dan beasiswa LazisMu UM Buton bagi mahasiswa prasejahtera." },
      { code: "1.2", description: "Mengurangi proporsi penduduk rentan miskin", campusAction: "Pelatihan kewirausahaan mandiri bagi keluarga nelayan di pesisir Buton." },
      { code: "1.4", description: "Menjamin akses yang sama terhadap sumber daya ekonomi", campusAction: "Fasilitasi akses pembiayaan mikro syariah bagi kelompok usaha dampingan kampus." }
    ],
    indicators: [
      { name: "Penerima Beasiswa Afirmasi & KIP", target: "600 Mahasiswa", achievement: "642 Mahasiswa", unit: "Orang", year: "2025", source: "Biro Kemahasiswaan UM Buton", updatedAt: "15 Januari 2026" },
      { name: "Desa Dampingan Program Anti-Kemiskinan", target: "12 Desa", achievement: "14 Desa", unit: "Desa", year: "2025", source: "LPPM UM Buton", updatedAt: "10 Desember 2025" }
    ],
    programs: ["Beasiswa KIP & LazisMu Peduli", "KKN Tematik Pemberdayaan Pesisir", "Inkubasi UMKM Mandiri Buton"],
    pic: { unit: "Biro Kemahasiswaan & LPPM", head: "Dr. La Ode Sahidin, S.P., M.P.", email: "kemahasiswaan@umbuton.ac.id", phone: "+62 402 2821234" }
  },
  {
    id: 2,
    slug: "tanpa-kelaparan",
    name: "Tanpa Kelaparan",
    englishName: "Zero Hunger",
    color: "#DDA63A",
    textColor: "#ffffff",
    icon: "Utensils",
    shortDesc: "Menghilangkan kelaparan, mencapai ketahanan pangan dan nutrisi yang baik.",
    fullDesc: "Melalui Fakultas Pertanian dan Perikanan UM Buton, kampus mendorong ketahanan pangan kepulauan, diversifikasi pangan lokal berbasis ubi Buton dan sagu, serta riset akuakultur berkelanjutan.",
    universityCommitment: "Pengembangan bibit pangan lokal tahan salinitas dan program penurunan angka stunting di wilayah Kepulauan Buton dan sekitarnya.",
    targets: [
      { code: "2.1", description: "Akses terhadap pangan bergizi", campusAction: "Dapur gizi sehat mahasiswa dan posko konsultasi gizi terpadu di desa binaan." },
      { code: "2.2", description: "Mengakhiri segala bentuk malnutrisi & stunting", campusAction: "Gerakan mahasiswa cegah stunting bersama BKKBN dan Dinkes Baubau." },
      { code: "2.4", description: "Sistem produksi pangan berkelanjutan", campusAction: "Penerapan teknologi pertanian pesisir ramah lingkungan dan hidroponik kampus." }
    ],
    indicators: [
      { name: "Balita Terdampingi Program Bebas Stunting", target: "300 Balita", achievement: "385 Balita", unit: "Anak", year: "2025", source: "Fakultas Kesehatan Masyarakat UM Buton", updatedAt: "20 Januari 2026" },
      { name: "Inovasi Produk Olahan Pangan Lokal", target: "8 Produk", achievement: "11 Produk", unit: "Inovasi", year: "2025", source: "Fakultas Pertanian UM Buton", updatedAt: "5 Januari 2026" }
    ],
    programs: ["Klinik Kampus Sadar Gizi", "Pertanian Berkelanjutan Lahan Karst", "Pendampingan Ketahanan Pangan Pesisir"],
    pic: { unit: "Fakultas Pertanian & LPPM", head: "Ir. Wa Ode Rustiani, M.Si.", email: "faperta@umbuton.ac.id", phone: "+62 402 2821235" }
  },
  {
    id: 3,
    slug: "kehidupan-sehat-dan-sejahtera",
    name: "Kehidupan Sehat & Sejahtera",
    englishName: "Good Health and Well-Being",
    color: "#4C9F38",
    textColor: "#ffffff",
    icon: "HeartPulse",
    shortDesc: "Menjamin kehidupan yang sehat dan mendorong kesejahteraan bagi semua usia.",
    fullDesc: "Mewujudkan sivitas akademika yang sehat secara jasmani dan rohani, serta layanan pengobatan cuma-cuma dan edukasi promotif-preventif bagi masyarakat pulau terluar di Sulawesi Tenggara.",
    universityCommitment: "Kawasan kampus bebas asap rokok 100%, penyediaan fasilitas konseling psikologis gratis, dan klinik pratama kampus berstandar nasional.",
    targets: [
      { code: "3.4", description: "Menurunkan kematian akibat penyakit tidak menular & kesehatan jiwa", campusAction: "Layanan konseling mental health mahasiswa serta skrining kesehatan rutin pegawai." },
      { code: "3.8", description: "Mencapai cakupan kesehatan semesta", campusAction: "Skema jaminan kesehatan universitas bagi seluruh mahasiswa aktif." }
    ],
    indicators: [
      { name: "Sivitas Akademika Terlayani Konseling & Skrining", target: "1.500 Orang", achievement: "1.820 Orang", unit: "Orang", year: "2025", source: "Klinik Pratama UM Buton", updatedAt: "12 Januari 2026" },
      { name: "Bakti Kesehatan Masyarakat Terpencil", target: "6 Kali", achievement: "8 Kali", unit: "Kegiatan", year: "2025", source: "Biro Kemahasiswaan", updatedAt: "18 Desember 2025" }
    ],
    programs: ["Campus Smoke-Free Policy", "Program Sahabat Jiwa UM Buton", "Ekspedisi Medis Pulau Terluar"],
    pic: { unit: "Klinik Pratama & Fakultas Keperawatan", head: "Ns. La Ode Abdul Rahman, S.Kep., M.Kes.", email: "klinik@umbuton.ac.id", phone: "+62 402 2821236" }
  },
  {
    id: 4,
    slug: "pendidikan-berkualitas",
    name: "Pendidikan Berkualitas",
    englishName: "Quality Education",
    color: "#C5192D",
    textColor: "#ffffff",
    icon: "BookOpen",
    shortDesc: "Menjamin pendidikan yang inklusif dan berkualitas setara, serta mendukung kesempatan belajar seumur hidup.",
    fullDesc: "Fokus utama catur dharma UM Buton dalam menghasilkan lulusan berkarakter Islami, kompeten, dan siap berkontribusi pada pembangunan kepulauan melalui kurikulum berbasis luaran (OBE) dan digital learning.",
    universityCommitment: "Akreditasi unggul bagi program studi, akses pembelajaran terbuka digital untuk guru kepulauan, dan fasilitas ramah difabel.",
    targets: [
      { code: "4.3", description: "Akses setara terhadap pendidikan tinggi bermutu", campusAction: "Penerapan SPP berkeadilan berjenjang dan kuota bagi masyarakat kepulauan terpencil." },
      { code: "4.4", description: "Peningkatan keterampilan siap kerja & berwirausaha", campusAction: "Integrasi modul kewirausahaan berbasis kearifan lokal di seluruh kurikulum prodi." },
      { code: "4.7", description: "Pendidikan untuk pembangunan berkelanjutan", campusAction: "Mata kuliah wajib SDGs & Wawasan Kemaritiman untuk seluruh mahasiswa baru." }
    ],
    indicators: [
      { name: "Prodi Terakreditasi Unggul/Baik Sekali", target: "80%", achievement: "84%", unit: "%", year: "2025", source: "BPM UM Buton", updatedAt: "10 Januari 2026" },
      { name: "Mahasiswa Terlibat Program MBKM Berkelanjutan", target: "1.200 Orang", achievement: "1.410 Orang", unit: "Orang", year: "2025", source: "Pusat MBKM UM Buton", updatedAt: "22 Januari 2026" }
    ],
    programs: ["Digital Learning Platform UM Buton", "Pelatihan Guru Sekolah Kepulauan", "Sertifikasi Kompetensi Keahlian"],
    pic: { unit: "Biro Administrasi Akademik (BAA)", head: "Dr. Wa Ode Hamsinah, M.Pd.", email: "akademik@umbuton.ac.id", phone: "+62 402 2821237" }
  },
  {
    id: 5,
    slug: "kesetaraan-gender",
    name: "Kesetaraan Gender",
    englishName: "Gender Equality",
    color: "#FF3A21",
    textColor: "#ffffff",
    icon: "Users",
    shortDesc: "Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan.",
    fullDesc: "Menjamin keterwakilan perempuan dalam posisi kepemimpinan struktural universitas, pencegahan dan penanganan kekerasan seksual (PPKS), serta pendampingan ekonomi perempuan pesisir.",
    universityCommitment: "Nol toleransi terhadap segala bentuk pelecehan dan diskriminasi gender di lingkungan kampus, serta pembinaan kepemimpinan 'Aisyiyah.",
    targets: [
      { code: "5.5", description: "Partisipasi penuh perempuan dalam kepemimpinan", campusAction: "Kebijakan kuota minimal 40% kepemimpinan struktural bagi dosen/tendik perempuan." },
      { code: "5.2", description: "Penghapusan segala bentuk kekerasan berbasis gender", campusAction: "Satgas PPKS aktif dengan kanal aduan aman, terlindungi, dan terintegrasi." }
    ],
    indicators: [
      { name: "Proporsi Perempuan di Jabatan Pimpinan Kampus", target: "40%", achievement: "42.5%", unit: "%", year: "2025", source: "Biro Kepegawaian UM Buton", updatedAt: "8 Januari 2026" },
      { name: "Sosialisasi & Workshop PPKS Mahasiswa Baru", target: "100%", achievement: "100%", unit: "%", year: "2025", source: "Satgas PPKS UM Buton", updatedAt: "15 September 2025" }
    ],
    programs: ["Satgas PPKS Responsif & Aman", "Sekolah Kepemimpinan Perempuan Mahasiswi", "Pendampingan Usaha Kelompok Ibu Pesisir"],
    pic: { unit: "Satgas PPKS & Pusat Studi Gender", head: "Dr. Asmin, S.Pd., M.Hum.", email: "ppks@umbuton.ac.id", phone: "+62 402 2821238" }
  },
  {
    id: 6,
    slug: "air-bersih-dan-sanitasi-layak",
    name: "Air Bersih & Sanitasi Layak",
    englishName: "Clean Water and Sanitation",
    color: "#26BDE2",
    textColor: "#ffffff",
    icon: "Droplets",
    shortDesc: "Menjamin ketersediaan serta pengelolaan air bersih dan sanitasi yang berkelanjutan untuk semua.",
    fullDesc: "Pengelolaan air bersih hemat konsumsi di lingkungan kampus, filtrasi air minum gratis di setiap gedung fakultas, serta program teknologi desalinasi sederhana untuk masyarakat kepulauan terpencil.",
    universityCommitment: "Stasiun air minum higienis gratis di setiap gedung dan konservasi tangkapan air hujan kampus.",
    targets: [
      { code: "6.1", description: "Akses universal terhadap air minum aman", campusAction: "Instalasi dispenser air minum Reverse Osmosis (RO) gratis bagi seluruh sivitas." },
      { code: "6.4", description: "Peningkatan efisiensi pemanfaatan air", campusAction: "Pemasangan kran otomatis hemat air dan sistem penampungan air hujan (rainwater harvesting)." }
    ],
    indicators: [
      { name: "Stasiun Air Minum Gratis Beroperasi di Kampus", target: "18 Unit", achievement: "22 Unit", unit: "Stasiun", year: "2025", source: "Biro Umum & Sarpras UM Buton", updatedAt: "14 Januari 2026" },
      { name: "Air Hujan yang Dimanfaatkan untuk Sanitasi Kampus", target: "35%", achievement: "41%", unit: "%", year: "2025", source: "Pusat Kampus Hijau UM Buton", updatedAt: "10 Januari 2026" }
    ],
    programs: ["Water Refill Station Campus", "Konservasi Sumber Air Karst Buton", "Sanitasi Pesisir Sehat Desa Binaan"],
    pic: { unit: "Biro Sarpras & Teknik Sipil", head: "La Ode Muhammad Arsyad, S.T., M.T.", email: "sarpras@umbuton.ac.id", phone: "+62 402 2821239" }
  },
  {
    id: 7,
    slug: "energi-bersih-dan-terjangkau",
    name: "Energi Bersih & Terjangkau",
    englishName: "Affordable and Clean Energy",
    color: "#FCC30B",
    textColor: "#263548",
    icon: "Zap",
    shortDesc: "Menjamin akses terhadap energi yang terjangkau, andal, berkelanjutan, dan modern bagi semua.",
    fullDesc: "Transisi energi mandiri di lingkungan kampus UM Buton melalui implementasi panel surya (PLTS Atap) pada gedung rektorat dan perpustakaan, serta riset mikrohidro dan biomassa kelapa.",
    universityCommitment: "Target 25% pasokan listrik universitas bersumber dari energi baru terbarukan pada tahun 2028.",
    targets: [
      { code: "7.2", description: "Meningkatkan pangsa energi terbarukan", campusAction: "Pemasangan PLTS Rooftop 50 kWp di atap Gedung Rektorat UM Buton." },
      { code: "7.3", description: "Menggandakan laju perbaikan efisiensi energi", campusAction: "Konversi 100% lampu penerangan kampus ke LED cerdas sensor gerak." }
    ],
    indicators: [
      { name: "Kapasitas PLTS Terpasang di Lingkungan Kampus", target: "40 kWp", achievement: "50 kWp", unit: "kWp", year: "2025", source: "Fakultas Teknik UM Buton", updatedAt: "19 Januari 2026" },
      { name: "Penurunan Konsumsi Listrik Konvensional per Mahasiswa", target: "15%", achievement: "18.2%", unit: "%", year: "2025", source: "Biro Sarpras", updatedAt: "20 Desember 2025" }
    ],
    programs: ["Pemasangan Solar Cell Kampus", "Audit Energi Gedung Bertingkat", "Edukasi Hemat Energi Komunitas"],
    pic: { unit: "Fakultas Teknik Elektro", head: "Ir. Muhammad Firman, S.T., M.Eng.", email: "teknik@umbuton.ac.id", phone: "+62 402 2821240" }
  },
  {
    id: 8,
    slug: "pekerjaan-layak-dan-pertumbuhan-ekonomi",
    name: "Pekerjaan Layak & Pertumbuhan Ekonomi",
    englishName: "Decent Work and Economic Growth",
    color: "#A21942",
    textColor: "#ffffff",
    icon: "TrendingUp",
    shortDesc: "Mendorong pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif.",
    fullDesc: "Mempersiapkan lulusan berdaya saing global melalui Career Development Center (CDC), inkubator bisnis mahasiswa berbasis potensi maritim Buton, dan jaminan upah layak bagi seluruh staf kampus.",
    universityCommitment: "Tingkat keterserapan kerja lulusan >80% dalam waktu 6 bulan pasca kelulusan dan upah di atas UMK Baubau.",
    targets: [
      { code: "8.5", description: "Pekerjaan layak bagi semua perempuan dan laki-laki", campusAction: "Standardisasi upah tenaga kependidikan dan asisten dosen di atas UMK regional." },
      { code: "8.6", description: "Mengurangi proporsi pemuda yang tidak bekerja atau sekolah", campusAction: "Bursa kerja berkala (Job Fair) dan pelatihan keahlian industri digital bagi pemuda Baubau." }
    ],
    indicators: [
      { name: "Lulusan Bekerja / Wirausaha < 6 Bulan", target: "75%", achievement: "79.3%", unit: "%", year: "2025", source: "CDC UM Buton", updatedAt: "12 Januari 2026" },
      { name: "Start-up / Wirausaha Mahasiswa Didanai", target: "25 Usaha", achievement: "32 Usaha", unit: "Unit Bisnis", year: "2025", source: "Inkubator Bisnis UM Buton", updatedAt: "5 Januari 2026" }
    ],
    programs: ["Inkubasi Bisnis Maritim Muda", "Campus Job Fair Terpadu", "Koperasi Karyawan & Dosen Sejahtera"],
    pic: { unit: "Career Development Center & FEB", head: "Dr. H. Ruslan, S.E., M.Si.", email: "cdc@umbuton.ac.id", phone: "+62 402 2821241" }
  },
  {
    id: 9,
    slug: "industri-inovasi-dan-infrastruktur",
    name: "Industri, Inovasi & Infrastruktur",
    englishName: "Industry, Innovation and Infrastructure",
    color: "#FD6925",
    textColor: "#ffffff",
    icon: "Boxes",
    shortDesc: "Membangun infrastruktur yang tangguh, mempromosikan industrialisasi inklusif dan mendorong inovasi.",
    fullDesc: "Pengembangan riset terapan aspal Buton, hilirisasi produk perikanan kepulauan, serta penyediaan fasilitas laboratorium terstandar dan infrastruktur jaringan internet kampus berkecepatan tinggi.",
    universityCommitment: "Peningkatan jumlah paten dan hak cipta terdaftar universitas serta laboratorium inovasi teknologi terapan.",
    targets: [
      { code: "9.5", description: "Meningkatkan penelitian ilmiah dan kemampuan teknologi", campusAction: "Alokasi dana riset internal minimal 15% dari anggaran operasional akademik universitas." },
      { code: "9.c", description: "Akses signifikan terhadap teknologi informasi dan internet", campusAction: "Penyediaan Wi-Fi 6 berkecepatan 1 Gbps yang menjangkau 100% area ruang belajar kampus." }
    ],
    indicators: [
      { name: "Paten & HKI Terdaftar Nasional", target: "30 HKI", achievement: "38 HKI", unit: "Paten/HKI", year: "2025", source: "Sentra HKI LPPM UM Buton", updatedAt: "15 Januari 2026" },
      { name: "Laboratorium Terakreditasi Standar ISO", target: "4 Lab", achievement: "4 Lab", unit: "Laboratorium", year: "2025", source: "Biro Akademik UM Buton", updatedAt: "20 Desember 2025" }
    ],
    programs: ["Sentra Inovasi Aspal & Maritim Buton", "Modernisasi Smart Campus & IoT", "Bina Laboratorium Unggulan Terpadu"],
    pic: { unit: "Sentra Inovasi & LPPM", head: "Dr. Eng. Suwardi, S.T., M.T.", email: "inovasi@umbuton.ac.id", phone: "+62 402 2821242" }
  },
  {
    id: 10,
    slug: "berkurangnya-kesenjangan",
    name: "Berkurangnya Kesenjangan",
    englishName: "Reduced Inequalities",
    color: "#DD1367",
    textColor: "#ffffff",
    icon: "Scale",
    shortDesc: "Mengurangi kesenjangan intra dan antar negara.",
    fullDesc: "Menjamin keterbukaan akses pendidikan bagi penyandang disabilitas, kelompok adat terpencil di Kepulauan Buton, dan pemuda dari pulau-pulau 3T (Terdepan, Terluar, Tertinggal).",
    universityCommitment: "Aksesibilitas ramah disabilitas di seluruh gedung kampus dan beasiswa khusus pulau 3T.",
    targets: [
      { code: "10.2", description: "Memberdayakan dan mendorong inklusi sosial, ekonomi dan politik", campusAction: "Pusat Layanan Disabilitas Kampus untuk pendampingan studi mahasiswa berkebutuhan khusus." },
      { code: "10.3", description: "Menjamin kesempatan yang sama dan mengurangi kesenjangan hasil", campusAction: "Penghapusan biaya pendaftaran bagi calon mahasiswa dari wilayah 3T." }
    ],
    indicators: [
      { name: "Gedung dengan Fasilitas Ramah Disabilitas", target: "75%", achievement: "82%", unit: "%", year: "2025", source: "Biro Sarpras UM Buton", updatedAt: "16 Januari 2026" },
      { name: "Mahasiswa dari Wilayah 3T Sulawesi Tenggara", target: "450 Orang", achievement: "512 Orang", unit: "Orang", year: "2025", source: "BAA UM Buton", updatedAt: "10 Januari 2026" }
    ],
    programs: ["Pusat Layanan Disabilitas Kampus", "Beasiswa Afirmasi Putra Kepulauan 3T", "Forum Dialog Inklusi Sivitas"],
    pic: { unit: "Pusat Layanan Disabilitas & Kemahasiswaan", head: "Dra. Siti Rahmah, M.Si.", email: "pld@umbuton.ac.id", phone: "+62 402 2821243" }
  },
  {
    id: 11,
    slug: "kota-dan-komunitas-yang-berkelanjutan",
    name: "Kota & Komunitas Berkelanjutan",
    englishName: "Sustainable Cities and Communities",
    color: "#FD9D24",
    textColor: "#ffffff",
    icon: "Building2",
    shortDesc: "Menjadikan kota dan permukiman inklusif, aman, tangguh, dan berkelanjutan.",
    fullDesc: "Pelestarian cagar budaya Benteng Keraton Buton melalui riset arkeologi dan arsitektur, penataan ruang kampus hijau terbuka, serta kemitraan dengan Pemkot Baubau dalam mitigasi bencana pesisir.",
    universityCommitment: "Pelestarian warisan budaya Buton, penyediaan 40% ruang terbuka hijau (RTH) di dalam kampus, dan simulasi tanggap bencana.",
    targets: [
      { code: "11.4", description: "Memperkuat upaya perlindungan warisan budaya dan alam", campusAction: "Pusat Studi Kebudayaan Buton untuk inventarisasi dan digitalisasi naskah kuno Kesultanan Buton." },
      { code: "11.7", description: "Menyediakan akses universal ke ruang publik yang hijau dan aman", campusAction: "Taman literasi terbuka hijau kampus UM Buton yang dapat diakses publik secara bebas." }
    ],
    indicators: [
      { name: "Ruang Terbuka Hijau (RTH) Kampus", target: "35%", achievement: "41.5%", unit: "%", year: "2025", source: "Pusat Kampus Hijau UM Buton", updatedAt: "17 Januari 2026" },
      { name: "Naskah Kuno Budaya Buton yang Didigitalisasi", target: "50 Naskah", achievement: "68 Naskah", unit: "Naskah", year: "2025", source: "Perpustakaan UM Buton", updatedAt: "8 Januari 2026" }
    ],
    programs: ["Konservasi Budaya Keraton Buton", "Kampus Ramah Pejalan Kaki & Sepeda", "Mitigasi Gempa & Tsunami Pesisir"],
    pic: { unit: "Fakultas Teknik & Pusat Studi Budaya", head: "Dr. La Ode Alirman, S.T., M.Si.", email: "budaya@umbuton.ac.id", phone: "+62 402 2821244" }
  },
  {
    id: 12,
    slug: "konsumsi-dan-produksi-yang-bertanggung-jawab",
    name: "Konsumsi & Produksi Bertanggung Jawab",
    englishName: "Responsible Consumption and Production",
    color: "#BF8B2E",
    textColor: "#ffffff",
    icon: "Repeat",
    shortDesc: "Menjamin pola konsumsi dan produksi yang berkelanjutan.",
    fullDesc: "Kebijakan bebas plastik sekali pakai di kantin universitas, digitalisasi administrasi tanpa kertas (paperless office), dan pengolahan limbah laboratorium secara terstandar ramah lingkungan.",
    universityCommitment: "Reduksi limbah plastik kampus hingga 80% dan pengelolaan sampah organik menjadi pupuk kompos mandiri.",
    targets: [
      { code: "12.5", description: "Mengurangi timbulan sampah melalui 3R (Reuse, Reduce, Recycle)", campusAction: "Pemisahan sampah 4 kategori di setiap lantai gedung dan operasional bank sampah kampus." },
      { code: "12.8", description: "Menjamin masyarakat memiliki informasi & kesadaran gaya hidup selaras alam", campusAction: "Kampanye berkala gaya hidup minim sampah (Zero Waste Lifestyle) bagi sivitas akademika." }
    ],
    indicators: [
      { name: "Penurunan Penggunaan Kertas Administrasi Kampus", target: "60%", achievement: "71.4%", unit: "%", year: "2025", source: "Biro TI & Sistem Informasi", updatedAt: "14 Januari 2026" },
      { name: "Sampah Organik Diolah Menjadi Kompos", target: "15 Ton", achievement: "18.6 Ton", unit: "Ton/Tahun", year: "2025", source: "Unit Pengelolaan Limbah UM Buton", updatedAt: "23 Desember 2025" }
    ],
    programs: ["Paperless Campus Administration", "Bank Sampah Sivitas Sejahtera", "Kantin Sehat Bebas Styrofoam"],
    pic: { unit: "Pusat Pengelolaan Lingkungan & Sarpras", head: "Ir. Wa Ode Zusnita, S.P., M.P.", email: "lingkungan@umbuton.ac.id", phone: "+62 402 2821245" }
  },
  {
    id: 13,
    slug: "penanganan-perubahan-iklim",
    name: "Penanganan Perubahan Iklim",
    englishName: "Climate Action",
    color: "#3F7E44",
    textColor: "#ffffff",
    icon: "CloudRain",
    shortDesc: "Mengambil tindakan cepat untuk mengatasi perubahan iklim dan dampaknya.",
    fullDesc: "Program penanaman mangrove di pesisir Baubau dan Buton Tengah, edukasi adaptasi iklim bagi nelayan tradisional, serta inventarisasi jejak karbon (carbon footprint) kampus UM Buton.",
    universityCommitment: "Target Net Zero Emission kampus tahun 2040 dan penanaman minimal 10.000 bibit mangrove per tahun.",
    targets: [
      { code: "13.1", description: "Memperkuat ketahanan dan kapasitas adaptasi bencana iklim", campusAction: "Pelatihan relawan kebencanaan MDMC (Muhammadiyah Disaster Management Center) kampus." },
      { code: "13.3", description: "Meningkatkan pendidikan, kesadaran, dan kapasitas kelembagaan mitigasi iklim", campusAction: "Kuliah umum dan riset kolaboratif pemodelan kenaikan air laut di kawasan Wallacea." }
    ],
    indicators: [
      { name: "Bibit Mangrove Ditanam di Wilayah Pesisir", target: "10.000 Bibit", achievement: "12.500 Bibit", unit: "Pohon", year: "2025", source: "LPPM & Mahapala UM Buton", updatedAt: "18 Januari 2026" },
      { name: "Pengurangan Emisi Karbon Operasional Kampus", target: "12%", achievement: "14.8%", unit: "%", year: "2025", source: "Pusat Riset Iklim UM Buton", updatedAt: "5 Januari 2026" }
    ],
    programs: ["Aksi Mangrove Lestari Pesisir Buton", "Relawan Siaga Bencana MDMC", "Audit Emisi Gas Rumah Kaca Kampus"],
    pic: { unit: "Pusat Riset Iklim & MDMC UM Buton", head: "Dr. La Ode Muh. Arifin, M.Si.", email: "climate@umbuton.ac.id", phone: "+62 402 2821246" }
  },
  {
    id: 14,
    slug: "ekosistem-lautan",
    name: "Ekosistem Lautan",
    englishName: "Life Below Water",
    color: "#0A97D9",
    textColor: "#ffffff",
    icon: "Fish",
    shortDesc: "Melestarikan dan memanfaatkan secara berkelanjutan sumber daya kelautan dan samudra.",
    fullDesc: "Sebagai perguruan tinggi di kawasan maritim strategis, UM Buton memprioritaskan konservasi terumbu karang di Selat Buton, pembersihan pantai dari mikroplastik, serta pemberdayaan nelayan ramah lingkungan.",
    universityCommitment: "Adopsi zona konservasi terumbu karang seluas 20 hektar dan riset biodiversitas perairan Buton.",
    targets: [
      { code: "14.1", description: "Mencegah dan secara signifikan mengurangi pencemaran laut", campusAction: "Gerakan rutin 'Beach Clean-Up' bersama komunitas pesisir dan mahasiswa setiap bulan." },
      { code: "14.2", description: "Mengelola dan melindungi ekosistem laut dan pesisir secara berkelanjutan", campusAction: "Restorasi terumbu karang menggunakan metode biorock dan spider web di perairan Baubau." }
    ],
    indicators: [
      { name: "Transplantasi Terumbu Karang Berhasil Tumbuh", target: "3.000 Fragmen", achievement: "3.650 Fragmen", unit: "Fragmen", year: "2025", source: "Fakultas Perikanan UM Buton", updatedAt: "15 Januari 2026" },
      { name: "Sampah Plastik Pesisir yang Berhasil Diangkat", target: "8 Ton", achievement: "9.8 Ton", unit: "Ton", year: "2025", source: "Pusat Kajian Kelautan UM Buton", updatedAt: "10 Januari 2026" }
    ],
    programs: ["Konservasi Karang Selat Buton", "Ekspedisi Laut Biru Mahasiswa", "Bina Nelayan Ramah Lingkungan"],
    pic: { unit: "Fakultas Perikanan & Ilmu Kelautan", head: "Dr. La Ode M. Aslan, S.Pi., M.Si.", email: "perikanan@umbuton.ac.id", phone: "+62 402 2821247" }
  },
  {
    id: 15,
    slug: "ekosistem-daratan",
    name: "Ekosistem Daratan",
    englishName: "Life on Land",
    color: "#56C02B",
    textColor: "#ffffff",
    icon: "Trees",
    shortDesc: "Melindungi, memulihkan dan mendukung penggunaan berkelanjutan ekosistem daratan.",
    fullDesc: "Pelestarian kawasan hutan karst Lambusango Buton yang menjadi rumah bagi satwa endemik seperti Anoa dan Tarsius Buton, serta penghijauan kampus dan penanaman pohon buah lokal.",
    universityCommitment: "Riset keanekaragaman hayati karst Buton dan arboretum mini flora lokal di kampus baru.",
    targets: [
      { code: "15.1", description: "Konservasi dan pemulihan ekosistem daratan dan air tawar", campusAction: "Kemitraan konservasi Hutan Lindung Lambusango bersama BKSDA Sultra." },
      { code: "15.5", description: "Mengurangi degradasi habitat alami dan menghentikan hilangnya keanekaragaman hayati", campusAction: "Monitoring populasi satwa endemik Buton melalui camera trap kolaboratif." }
    ],
    indicators: [
      { name: "Pohon Endemik Ditanam di Lingkungan Kampus", target: "500 Pohon", achievement: "620 Pohon", unit: "Pohon", year: "2025", source: "Pusat Kampus Hijau UM Buton", updatedAt: "11 Januari 2026" },
      { name: "Publikasi Keanekaragaman Hayati Hutan Karst", target: "5 Jurnal", achievement: "7 Jurnal", unit: "Publikasi", year: "2025", source: "LPPM UM Buton", updatedAt: "28 Desember 2025" }
    ],
    programs: ["Arboretum Flora Karst Kampus", "Ekspedisi Lambusango Lestari", "Kampus Bebas Perburuan Liar"],
    pic: { unit: "Fakultas Kehutanan/Pertanian & Mahapala", head: "Ir. La Ode Safuan, M.P.", email: "kehutanan@umbuton.ac.id", phone: "+62 402 2821248" }
  },
  {
    id: 16,
    slug: "perdamaian-keadilan-dan-kelembagaan-yang-tangguh",
    name: "Perdamaian, Keadilan & Kelembagaan Tangguh",
    englishName: "Peace, Justice and Strong Institutions",
    color: "#00689D",
    textColor: "#ffffff",
    icon: "Landmark",
    shortDesc: "Mendorong masyarakat yang damai dan inklusif untuk pembangunan berkelanjutan, serta menyediakan akses keadilan.",
    fullDesc: "Biro Bantuan Hukum (BBH) Fakultas Hukum UM Buton menyediakan layanan konsultasi dan bantuan hukum pro-bono bagi warga tidak mampu, tata kelola universitas yang transparan, akuntabel, dan bebas gratifikasi.",
    universityCommitment: "Zona Integritas Wilayah Bebas dari Korupsi (WBK) kampus dan pendampingan hukum cuma-cuma bagi masyarakat rentan.",
    targets: [
      { code: "16.3", description: "Mempromosikan supremasi hukum di tingkat nasional dan akses keadilan", campusAction: "Layanan konsultasi hukum gratis oleh Biro Bantuan Hukum (BBH) UM Buton." },
      { code: "16.6", description: "Mengembangkan lembaga yang efektif, akuntabel, dan transparan", campusAction: "Publikasi laporan keuangan universitas yang telah diaudit oleh akuntan publik independen." }
    ],
    indicators: [
      { name: "Kasus Hukum Warga Kurang Mampu Terdampingi Pro-Bono", target: "40 Kasus", achievement: "52 Kasus", unit: "Kasus", year: "2025", source: "Biro Bantuan Hukum (BBH) UM Buton", updatedAt: "19 Januari 2026" },
      { name: "Indeks Keterbukaan Informasi & Kepuasan Layanan Kampus", target: "85%", achievement: "89.4%", unit: "%", year: "2025", source: "Badan Penjaminan Mutu (BPM)", updatedAt: "5 Januari 2026" }
    ],
    programs: ["Biro Bantuan Hukum (BBH) Pro-Bono", "Zona Integritas Anti-Korupsi", "Pendidikan Anti-Kekerasan Sivitas"],
    pic: { unit: "Fakultas Hukum & Biro Bantuan Hukum", head: "Dr. La Ode Syarifuddin, S.H., M.H.", email: "hukum@umbuton.ac.id", phone: "+62 402 2821249" }
  },
  {
    id: 17,
    slug: "kemitraan-untuk-mencapai-tujuan",
    name: "Kemitraan untuk Mencapai Tujuan",
    englishName: "Partnerships for the Goals",
    color: "#19486A",
    textColor: "#ffffff",
    icon: "Network",
    shortDesc: "Memperkuat sarana pelaksanaan dan merevitalisasi kemitraan global untuk pembangunan berkelanjutan.",
    fullDesc: "Membangun kolaborasi pentahelix yang kuat antara UM Buton, Pemerintah Daerah di Kepulauan Buton, dunia usaha, media, dan jejaring universitas nasional maupun internasional dalam pencapaian agenda SDGs 2030.",
    universityCommitment: "Pusat Kolaborasi SDGs UM Buton aktif bekerjasama dengan Bappeda, industri maritim, dan asosiasi perguruan tinggi Muhammadiyah se-Indonesia.",
    targets: [
      { code: "17.16", description: "Meningkatkan kemitraan global untuk pembangunan berkelanjutan", campusAction: "MoU aktif dengan 30+ mitra pemerintah daerah, BUMN, LSM lingkungan, dan kampus luar negeri." },
      { code: "17.17", description: "Mendorong dan meningkatkan kemitraan efektif publik-swasta dan masyarakat", campusAction: "Penyusunan Roadmap SDGs Kabupaten/Kota di wilayah Kepulauan Buton bersama Bappeda." }
    ],
    indicators: [
      { name: "Kemitraan SDGs Aktif (Pentahelix)", target: "30 Mitra", achievement: "38 Mitra", unit: "Mitra", year: "2025", source: "Kantor Urusan Internasional & Kemitraan", updatedAt: "20 Januari 2026" },
      { name: "Program Kolaborasi Riset & Pengabdian Bersama Pemda", target: "15 Program", achievement: "19 Program", unit: "Program", year: "2025", source: "LPPM UM Buton", updatedAt: "12 Januari 2026" }
    ],
    programs: ["SDGs Center UM Buton Collaboration Hub", "Pentahelix Development Forum", "Konsorsium Riset Kemaritiman Kepulauan"],
    pic: { unit: "Kantor Urusan Internasional & Kerjasama", head: "Dr. Wa Ode Alzarliani, S.P., M.M.", email: "kerjasama@umbuton.ac.id", phone: "+62 402 2821250" }
  }
];

export const PROGRAMS_LIST: ProgramItem[] = [
  {
    id: "prog-1",
    title: "Green Campus & Zero Waste Action",
    category: "Kampus Berkelanjutan",
    sdgIds: [6, 7, 11, 12, 13],
    unit: "Pusat Kampus Hijau & Biro Sarpras",
    lead: "Ir. Wa Ode Zusnita, S.P., M.P.",
    period: "2024 - 2028 (Berkelanjutan)",
    location: "Kampus Utama UM Buton, Baubau",
    status: "Sedang Berjalan",
    summary: "Transformasi kampus menuju ramah lingkungan melalui panel surya, bank sampah organik, kran hemat air, dan larangan plastik sekali pakai.",
    description: "Program komprehensif Green Campus UM Buton mengintegrasikan pengelolaan energi surya mandiri berkapasitas 50 kWp, stasiun pengisian air minum gratis (water refill stations) di seluruh lantai gedung, komposter mandiri untuk sisa makanan kantin, serta penghijauan lanskap dengan pohon peneduh lokal. Program ini secara langsung mendukung UI GreenMetric dan target Net-Zero Emission.",
    impactMetrics: ["50 kWp Listrik Tenaga Surya", "18.6 Ton Kompos per Tahun", "22 Stasiun Air Minum Gratis", "Penurunan 71% Sampah Plastik"],
    imageUrl: "/images/hero-campus.png"
  },
  {
    id: "prog-2",
    title: "Pendidikan Berkualitas & Beasiswa Afirmasi Kepulauan",
    category: "Pendidikan",
    sdgIds: [1, 4, 10],
    unit: "Biro Administrasi Akademik & Kemahasiswaan",
    lead: "Dr. Wa Ode Hamsinah, M.Pd.",
    period: "2023 - 2027",
    location: "Seluruh Fakultas UM Buton",
    status: "Sedang Berjalan",
    summary: "Pemberian beasiswa penuh KIP-Kuliah dan LazisMu bagi mahasiswa prasejahtera, peningkatan kurikulum OBE, dan digital learning merata.",
    description: "Menjamin tidak ada anak berprestasi di Kepulauan Buton yang putus kuliah karena kendala ekonomi. Program ini mendanai lebih dari 640 mahasiswa penerima beasiswa, menyediakan laboratorium multimedia modern, serta melatih guru-guru madrasah dan sekolah pulau terpencil melalui portal pembelajaran daring terbuka.",
    impactMetrics: ["642 Mahasiswa Terbantu", "84% Prodi Akreditasi Unggul/Baik Sekali", "512 Mahasiswa Wilayah 3T", "12 Sekolah Binaan"],
    imageUrl: "/images/hero-campus.png"
  },
  {
    id: "prog-3",
    title: "Pengabdian Masyarakat: Pemberdayaan UMKM & Nelayan Pesisir",
    category: "Pengabdian Masyarakat",
    sdgIds: [1, 2, 8, 14],
    unit: "Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM)",
    lead: "Dr. La Ode Sahidin, S.P., M.P.",
    period: "Tahunan (Mei - Oktober)",
    location: "Kawasan Pesisir Buton, Buton Selatan & Buton Tengah",
    status: "Berkelanjutan",
    summary: "Pendampingan inovasi pengolahan hasil tangkapan laut, legalitas usaha mikro syariah, dan literasi keuangan digital bagi keluarga nelayan.",
    description: "Dosen dan mahasiswa KKN Tematik diterjunkan langsung ke desa-desa pesisir untuk memberikan pelatihan pengolahan abon ikan tuna, rumput laut kering siap saji, dan minyak kelapa murni (VCO). Program ini juga memfasilitasi sertifikasi halal dan izin P-IRT gratis untuk produk unggulan lokal.",
    impactMetrics: ["14 Desa Pesisir Binaan", "385 Balita Terdampingi Bebas Stunting", "32 Unit Bisnis UMKM Didanai", "9.8 Ton Sampah Pantai Terangkat"],
    imageUrl: "/images/news-3.png"
  },
  {
    id: "prog-4",
    title: "Konservasi Terumbu Karang & Ekosistem Pesisir Selat Buton",
    category: "Penelitian & Inovasi",
    sdgIds: [13, 14, 15, 17],
    unit: "Fakultas Perikanan & Ilmu Kelautan",
    lead: "Dr. La Ode M. Aslan, S.Pi., M.Si.",
    period: "2024 - 2026",
    location: "Perairan Baubau & Selat Buton",
    status: "Sedang Berjalan",
    summary: "Transplantasi terumbu karang dengan metode biorock ramah lingkungan, pemantauan kualitas perairan, dan rehabilitasi hutan mangrove.",
    description: "Kegiatan riset terapan kelautan yang melibatkan mahasiswa selam ilmiah (scientific diving) untuk merehabilitasi terumbu karang yang rusak akibat destructive fishing di masa lalu. Berkolaborasi dengan dinas kelautan dan kelompok nelayan tradisional untuk membentuk zona perlindungan laut berbasis kearifan lokal (Ombo).",
    impactMetrics: ["3.650 Fragmen Karang Hidup", "12.500 Bibit Mangrove", "20 Hektar Zona Konservasi Adopsi", "8 Tim Penyelam Ilmiah"],
    imageUrl: "/images/news-1.png"
  },
  {
    id: "prog-5",
    title: "Kemitraan Pentahelix SDGs & Akselerasi Pembangunan Daerah",
    category: "Kemitraan",
    sdgIds: [16, 17],
    unit: "Kantor Kerjasama & SDGs Center UM Buton",
    lead: "Dr. Wa Ode Alzarliani, S.P., M.M.",
    period: "2023 - 2030",
    location: "Sulawesi Tenggara",
    status: "Sedang Berjalan",
    summary: "Kolaborasi strategis dengan Bappeda, dunia industri, perbankan syariah, dan komunitas masyarakat sipil dalam akselerasi target SDGs.",
    description: "SDGs Center UM Buton memposisikan universitas sebagai think-tank dan fasilitator independen bagi pemerintah daerah di Kepulauan Buton dalam menyusun rencana aksi daerah (RAD) SDGs, evaluasi data indikator terukur, serta sinergi program CSR perusahaan.",
    impactMetrics: ["38 Kemitraan Pentahelix Aktif", "19 Riset Kebijakan Bersama Pemda", "52 Bantuan Hukum Pro-Bono", "5 Dokumen RAD SDGs"],
    imageUrl: "/images/news-2.png"
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: "berita-1",
    slug: "um-buton-gelar-penanaman-pohon-hari-lingkungan-hidup",
    title: "UM Buton Gelar Program Penanaman Pohon Dalam Rangka Hari Lingkungan Hidup",
    date: "5 Juni 2025",
    category: "Lingkungan & Kampus Hijau",
    sdgIds: [13, 15],
    author: "Humas UM Buton",
    summary: "Dalam rangka memperingati Hari Lingkungan Hidup Sedunia, ratusan mahasiswa dan dosen UM Buton menanam 1.000 bibit pohon peneduh dan mangrove di pesisir Baubau.",
    content: [
      "Universitas Muhammadiyah Buton kembali menegaskan komitmennya terhadap pelestarian lingkungan hidup dan mitigasi perubahan iklim melalui aksi nyata penanaman 1.000 bibit pohon dan mangrove pada Kamis (5/6). Kegiatan yang dipusatkan di pesisir pantai Baubau ini diikuti oleh sivitas akademika, pimpinan universitas, serta komunitas pecinta alam Mahapala UM Buton.",
      "Rektor UM Buton dalam sambutannya menyampaikan bahwa krisis iklim memerlukan tindakan kolektif nyata, bukan sekadar wacana di ruang seminar. 'Pohon-pohon yang kita tanam hari ini adalah investasi masa depan bagi keberlanjutan ekosistem pesisir Buton. Sebagai perguruan tinggi maritim, kita bertanggung jawab menjaga benteng alami pulau dari abrasi dan degradasi lingkungan,' ungkapnya.",
      "Bibit yang ditanam terdiri atas mangrove jenis Rhizophora mucronata serta pohon buah lokal yang tahan terhadap cuaca ekstrem pesisir. Seluruh tanaman akan dipantau perkembangannya secara berkala oleh tim relawan kampus hijau untuk memastikan tingkat kelangsungan hidup di atas 90%."
    ],
    imageUrl: "/images/news-1.png",
    readingTime: "3 menit baca"
  },
  {
    id: "berita-2",
    slug: "workshop-implementasi-sdgs-di-lingkungan-perguruan-tinggi",
    title: "Workshop Implementasi SDGs di Lingkungan Perguruan Tinggi",
    date: "20 Mei 2025",
    category: "Tata Kelola & Kemitraan",
    sdgIds: [4, 16, 17],
    author: "Biro Kerjasama UM Buton",
    summary: "SDGs Center UM Buton menyelenggarakan workshop intensif penyelarasan kurikulum prodi dan roadmap riset dengan 17 indikator tujuan pembangunan berkelanjutan.",
    content: [
      "Sebagai bagian dari akselerasi integrasi Tujuan Pembangunan Berkelanjutan (SDGs) ke dalam tri dharma perguruan tinggi, SDGs Center UM Buton menyelenggarakan Workshop bertajuk 'Pengarusutamaan SDGs dalam Kurikulum dan Riset Terapan di Kawasan Kepulauan' pada 20 Mei 2025 di Aula Rektorat.",
      "Kegiatan ini menghadirkan narasumber dari Sekretariat Nasional SDGs Kementerian PPN/Bappenas dan pakar lingkungan hidup. Lebih dari 80 peserta yang terdiri atas dekan, ketua program studi, dan perwakilan peneliti aktif mendiskusikan mekanisme pelaporan data capaian tahunan kampus.",
      "Hasil dari workshop ini melahirkan rekomendasi penyusunan mata kuliah wajib universitas tentang Pembangunan Berkelanjutan dan panduan hibah riset bertema SDGs untuk dosen muda."
    ],
    imageUrl: "/images/news-2.png",
    readingTime: "4 menit baca"
  },
  {
    id: "berita-3",
    slug: "pengabdian-masyarakat-pemberdayaan-umkm-lokal",
    title: "Pengabdian Masyarakat: Pemberdayaan UMKM Lokal Berbasis Kearifan Buton",
    date: "12 Mei 2025",
    category: "Pengabdian Masyarakat",
    sdgIds: [1, 8, 12],
    author: "LPPM UM Buton",
    summary: "Tim Pengabdian LPPM UM Buton melatih kelompok perempuan pengrajin tenun dan olahan pangan lokal dalam pemanfaatan e-commerce serta sertifikasi halal.",
    content: [
      "Fakultas Ekonomi dan Bisnis bersama LPPM UM Buton menggelar program pengabdian kepada masyarakat yang menyasar puluhan pelaku UMKM di sentra kerajinan tenun Buton dan makanan tradisional di Baubau pada Senin (12/5).",
      "Pelatihan menitikberatkan pada peningkatan nilai tambah produk melalui pengemasan ramah lingkungan (eco-friendly packaging), fotografi produk menggunakan gawai pintar, dan pendaftaran sertifikasi halal 'Self-Declare' melalui Lembaga Pendamping PPH Muhammadiyah.",
      "Para pelaku usaha menyambut antusias program ini karena berhasil membuka akses pemasaran baru hingga ke pasar nasional secara digital."
    ],
    imageUrl: "/images/news-3.png",
    readingTime: "3 menit baca"
  }
];

export const PUBLICATIONS_LIST: PublicationItem[] = [
  {
    id: "pub-1",
    title: "Laporan Capaian SDGs Universitas Muhammadiyah Buton 2025",
    type: "Laporan SDGs",
    year: 2025,
    sdgIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    fileSize: "8.4 MB",
    format: "PDF",
    description: "Laporan tahunan komprehensif berisi dokumentasi program, data statistik capaian, target terukur, serta evaluasi tri dharma terhadap 17 SDGs.",
    downloadUrl: "#",
    publishedBy: "Pusat SDGs & Lembaga Penjaminan Mutu UM Buton"
  },
  {
    id: "pub-2",
    title: "Panduan Kampus Hijau & Kebijakan Nol Sampah Plastik UM Buton",
    type: "Kebijakan & Panduan",
    year: 2024,
    sdgIds: [11, 12, 13],
    fileSize: "2.1 MB",
    format: "PDF",
    description: "Surat Keputusan Rektor dan panduan operasional standar mengenai larangan kemasan plastik sekali pakai dan pengelolaan energi terbarukan di kampus.",
    downloadUrl: "#",
    publishedBy: "Biro Sarana dan Prasarana UM Buton"
  },
  {
    id: "pub-3",
    title: "Buku Putih Potensi & Konservasi Sumber Daya Kelautan Buton",
    type: "Jurnal & Riset",
    year: 2025,
    sdgIds: [14, 15, 17],
    fileSize: "14.2 MB",
    format: "PDF",
    description: "Kumpulan riset biodiversitas perairan Selat Buton, status terumbu karang, dan rekomendasi kebijakan pemanfaatan lestari bagi pemda.",
    downloadUrl: "#",
    publishedBy: "Fakultas Perikanan dan Kelautan UM Buton"
  },
  {
    id: "pub-4",
    title: "Infografik Capaian Indikator SDGs Pendidikan & Inklusi 2025",
    type: "Infografik",
    year: 2025,
    sdgIds: [4, 5, 10],
    fileSize: "3.5 MB",
    format: "PDF",
    description: "Ringkasan visual sebaran penerima beasiswa, mahasiswa penyandang disabilitas, dan keterlibatan riset dosen muda berbasis SDGs.",
    downloadUrl: "#",
    publishedBy: "Biro Humas & SDGs Center UM Buton"
  }
];

export const GALLERY_LIST: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Aksi Bersih Pantai & Penanaman Mangrove Mahapala",
    category: "Kampus Hijau",
    date: "5 Juni 2025",
    imageUrl: "/images/news-1.png",
    caption: "Aksi bersih pantai dan penanaman 1.000 bibit mangrove di pesisir pantai Baubau.",
    sdgId: 13
  },
  {
    id: "gal-2",
    title: "Workshop Penguatan SDGs bagi Pimpinan Fakultas & Dosen",
    category: "Pendidikan",
    date: "20 Mei 2025",
    imageUrl: "/images/news-2.png",
    caption: "Penyelarasan kurikulum tri dharma perguruan tinggi dengan indikator global SDGs.",
    sdgId: 4
  },
  {
    id: "gal-3",
    title: "Pendampingan Usaha Mikro & Pengrajin Tenun Tradisional",
    category: "Pengabdian",
    date: "12 Mei 2025",
    imageUrl: "/images/news-3.png",
    caption: "Fasilitasi legalitas halal dan digital marketing bagi pelaku UMKM di Kepulauan Buton.",
    sdgId: 8
  },
  {
    id: "gal-4",
    title: "Gedung Rektorat dan Pemandangan Kampus Hijau UM Buton",
    category: "Kampus Hijau",
    date: "1 Januari 2025",
    imageUrl: "/images/hero-campus.png",
    caption: "Fasilitas kampus terpadu Universitas Muhammadiyah Buton yang asri dan modern.",
    sdgId: 11
  }
];

export const IMPACT_STATS = [
  { label: "Tujuan SDGs Terintegrasi", value: "17", suffix: "Goals", icon: "Globe", desc: "Mencakup seluruh 17 tujuan agenda global 2030" },
  { label: "Penerima Beasiswa Afirmasi", value: "642", suffix: "+ Mahasiswa", icon: "GraduationCap", desc: "Akses pendidikan adil bagi keluarga prasejahtera & 3T" },
  { label: "Desa Binaan & KKN Tematik", value: "48", suffix: "Desa", icon: "MapPin", desc: "Pemberdayaan ekonomi, kesehatan & lingkungan pesisir" },
  { label: "Riset & Publikasi Terverifikasi", value: "140", suffix: "+ Artikel", icon: "FileText", desc: "Publikasi ilmiah bereputasi bertema keberlanjutan" },
  { label: "Kemitraan Pentahelix Aktif", value: "38", suffix: "Mitra", icon: "Handshake", desc: "Kolaborasi pemda, industri, NGO & perguruan tinggi" },
  { label: "Luas Terumbu Karang Diadopsi", value: "20", suffix: "Hektar", icon: "Waves", desc: "Zona konservasi restorasi karang di perairan Selat Buton" }
];
