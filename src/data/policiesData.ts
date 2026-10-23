export interface PolicyItem {
  slug: string;
  title: string;
  skNumber: string;
  year: number;
  sdgIds: number[];
  category: string;
  summary: string;
  clauses: {
    number: string;
    heading: string;
    content: string;
  }[];
  fileSize: string;
  unit: string;
}

export const POLICIES_DATA: PolicyItem[] = [
  {
    slug: "sustainable-green-campus-policy",
    title: "Sustainable Green Campus Policy",
    skNumber: "SK Rektor No. 142/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [6, 7, 11, 12, 13, 15],
    category: "Tata Kelola Lingkungan",
    summary: "Kebijakan komprehensif mengenai penataan ruang terbuka hijau kampus minimal 40%, pengelolaan sampah 3R, larangan plastik sekali pakai di kantin, dan konservasi air tanah di kawasan karst.",
    clauses: [
      { number: "Pasal 1", heading: "Kawasan Bebas Plastik Sekali Pakai", content: "Seluruh kegiatan resmi universitas, rapat dinas, dan kantin kampus dilarang menyediakan air minum dalam kemasan plastik sekali pakai dan kantong kresek." },
      { number: "Pasal 2", heading: "Penataan Ruang Terbuka Hijau", content: "Mempertahankan dan menambah rasio vegetasi pohon peneduh lokal Buton minimal 40% dari total luas kawasan kampus." },
      { number: "Pasal 3", heading: "Konservasi & Pemanfaatan Air", content: "Instalasi rainwater harvesting (pemanen air hujan) dan sumur resapan biopori di setiap gedung baru." }
    ],
    fileSize: "2.4 MB (PDF)",
    unit: "Pusat Kampus Hijau & Biro Sarana Prasarana"
  },
  {
    slug: "sustainable-procurement-policy",
    title: "Sustainable Procurement Policy",
    skNumber: "SK Rektor No. 168/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [8, 12, 17],
    category: "Pengadaan & Logistik",
    summary: "Pedoman pengadaan barang dan jasa universitas yang memprioritaskan produk bersertifikasi ramah lingkungan, efisiensi energi A+, produk lokal Kepulauan Buton, dan mitra yang menerapkan standar upah layak.",
    clauses: [
      { number: "Pasal 1", heading: "Kriteria Ramah Lingkungan", content: "Setiap pengadaan peralatan elektronik wajib memiliki sertifikasi Energy Star atau rating efisiensi energi tinggi." },
      { number: "Pasal 2", heading: "Pemberdayaan Pemasok Lokal", content: "Memberikan preferensi kepada UMKM lokal dan kelompok tani/nelayan binaan dalam penyediaan konsumsi kegiatan kampus." }
    ],
    fileSize: "1.8 MB (PDF)",
    unit: "Biro Keuangan dan Pengadaan Barang/Jasa"
  },
  {
    slug: "investment-and-asset-utilisation-policy",
    title: "Investment and Asset Utilisation Policy",
    skNumber: "SK Rektor No. 089/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [8, 9, 11],
    category: "Investasi & Aset",
    summary: "Aturan pemanfaatan aset dan portofolio investasi universitas yang berorientasi pada prinsip syariah, etika keberlanjutan sosial (ESG), dan dampak kemakmuran jangka panjang bagi sivitas akademika.",
    clauses: [
      { number: "Pasal 1", heading: "Skrining Etis Investasi", content: "Universitas dilarang menempatkan dana pada industri yang merusak lingkungan, eksploitasi perikanan ilegal, atau bertentangan dengan prinsip syariah Islam." },
      { number: "Pasal 2", heading: "Optimalisasi Aset Kampus untuk Publik", content: "Gedung olahraga dan taman literasi kampus dapat diakses oleh masyarakat umum dengan pengaturan tertib." }
    ],
    fileSize: "2.1 MB (PDF)",
    unit: "Badan Pengelola Usaha & Aset Universitas"
  },
  {
    slug: "equality-diversity-and-inclusion-policy",
    title: "Equality, Diversity and Inclusion Policy",
    skNumber: "SK Rektor No. 204/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [5, 10, 16],
    category: "Inklusi & Hak Asasi",
    summary: "Jaminan kesetaraan hak bagi seluruh mahasiswa, dosen, dan tenaga kependidikan tanpa diskriminasi suku, gender, status sosial, maupun kondisi fisik disabilitas.",
    clauses: [
      { number: "Pasal 1", heading: "Aksesibilitas Ramah Disabilitas", content: "Semua gedung perkuliahan wajib menyediakan jalur ramah kursi roda (ramp), toilet disabilitas, dan lift aksesibel." },
      { number: "Pasal 2", heading: "Pencegahan Diskriminasi & Kekerasan", content: "Satgas PPKS dan Komite Etik diberikan kewenangan penuh dalam mendampingi dan melindungi korban diskriminasi." }
    ],
    fileSize: "1.9 MB (PDF)",
    unit: "Pusat Studi Gender & Layanan Disabilitas"
  },
  {
    slug: "anti-gratification-policy",
    title: "Anti-Gratification Policy",
    skNumber: "SK Rektor No. 045/KEP/II.3.AU/F/2023",
    year: 2023,
    sdgIds: [16],
    category: "Integritas & Anti Korupsi",
    summary: "Kebijakan nol toleransi terhadap segala bentuk suap, gratifikasi, pungutan liar dalam proses akademik, pengurusan nilai, maupun penerimaan mahasiswa baru di UM Buton.",
    clauses: [
      { number: "Pasal 1", heading: "Kanal Pelaporan Whistleblowing (WBS)", content: "Menyediakan saluran pengaduan daring anonim dan terenkripsi untuk pelaporan dugaan gratifikasi." },
      { number: "Pasal 2", heading: "Sanksi Pemberhentian", content: "Pelanggaran terbukti atas gratifikasi nilai atau uang pelicin dikenakan sanksi tegas hingga pemberhentian tidak dengan hormat." }
    ],
    fileSize: "1.5 MB (PDF)",
    unit: "Satuan Pengawas Internal (SPI) & BPM"
  },
  {
    slug: "renovation-and-energy-efficient-building-policy",
    title: "Renovation and Energy-Efficient Building Policy",
    skNumber: "SK Rektor No. 177/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [7, 9, 11, 13],
    category: "Infrastruktur & Energi",
    summary: "Standar teknis renovasi gedung dan pembangunan fasilitas baru yang mengadopsi ventilasi alami, pencahayaan alami maksimal, material lokal aspal Buton, dan sensor otomatis hemat daya.",
    clauses: [
      { number: "Pasal 1", heading: "Pencahayaan & Ventilasi Alami", content: "Rasio bukaan jendela minimal 20% dari luas lantai untuk mengurangi penggunaan pendingin udara (AC) di siang hari." },
      { number: "Pasal 2", heading: "Penggunaan Cat Ramah Lingkungan", content: "Wajib menggunakan cat rendah Volatile Organic Compounds (Low-VOC) pada interior ruangan." }
    ],
    fileSize: "2.7 MB (PDF)",
    unit: "Fakultas Teknik & Biro Perencanaan Sarpras"
  },
  {
    slug: "policy-on-energy-consumption-reduction",
    title: "Policy on Energy Consumption Reduction",
    skNumber: "SK Rektor No. 210/KEP/II.3.AU/F/2024",
    year: 2024,
    sdgIds: [7, 12, 13],
    category: "Konservasi Energi",
    summary: "Program reduksi beban puncak listrik melalui otomasi pendingin ruangan pada suhu 24°C, pemasangan panel surya rooftop bertahap, dan pemadaman komputer/lampu di luar jam operasional.",
    clauses: [
      { number: "Pasal 1", heading: "Standar Suhu Pendingin Ruangan", content: "Suhu pendingin udara di seluruh ruang kantor dan perkuliahan diatur standar pada 24°C - 25°C." },
      { number: "Pasal 2", heading: "Audit Energi Berkala", content: "Audit konsumsi kWh per meter persegi dilakukan setiap semester oleh tim teknis independen." }
    ],
    fileSize: "2.2 MB (PDF)",
    unit: "Pusat Riset Energi Terbarukan & Sarpras"
  }
];
