// Semua data kontak & paket ada di sini — ubah file ini saja untuk update isi website.

export const site = {
  name: "Notive",
  tagline: "More than just social media.",
  instagram: "notive._",
  instagramUrl: "https://instagram.com/notive._",
  whatsapp: "62895611179149",
  email: "frederickliko010105@gmail.com",
  location: "Kota Medan, Sumatera Utara, Indonesia",
};

export const services = [
  {
    title: "Manajemen media sosial",
    desc: "Kami kelola dan publikasikan konten Instagram & TikTok kamu, lengkap dengan caption dan copywriting.",
    icon: "social",
  },
  {
    title: "Produksi konten",
    desc: "Video Reels serta foto Feed & Story yang diproduksi sesuai identitas visual merek kamu.",
    icon: "camera",
  },
  {
    title: "Riset & perencanaan",
    desc: "Riset konten, ide, dan content planning bulanan supaya setiap unggahan punya tujuan.",
    icon: "plan",
  },
  {
    title: "Boost Ads",
    desc: "Promosi video pilihan untuk menjangkau audiens yang lebih luas dan relevan.",
    icon: "ads",
  },
] as const;

export const steps = [
  { no: "01", title: "Pahami", desc: "Discovery, audit akun, riset konten dan kompetitor." },
  { no: "02", title: "Rancang", desc: "Pilar konten dan kalender konten bulanan untuk kamu setujui." },
  { no: "03", title: "Produksi & tayang", desc: "Produksi video & foto, copywriting, publikasi, dan Boost Ads." },
  { no: "04", title: "Ukur & optimalkan", desc: "Evaluasi performa jadi bahan perencanaan bulan berikutnya." },
] as const;

export const packages = [
  {
    name: "Basic",
    price: "3.500.000",
    fit: "Membangun kehadiran merek secara konsisten.",
    featured: false,
    items: [
      "8 video Reels Instagram & TikTok",
      "15 foto Feed & Story",
      "Posting + caption & copywriting",
      "Ide konten bulanan",
      "Content research dasar",
      "Boost Ads 1 video",
    ],
  },
  {
    name: "Standard",
    price: "5.000.000",
    fit: "Meningkatkan aktivitas dan engagement.",
    featured: true,
    items: [
      "12 video Reels Instagram & TikTok",
      "30 foto Feed & Story",
      "Posting + caption & copywriting",
      "Monthly content direction",
      "Pengembangan ide konten",
      "Boost Ads maks. 2 video",
      "Evaluasi performa bulanan",
    ],
  },
  {
    name: "Exclusive",
    price: "7.000.000",
    fit: "Strategi menyeluruh dan prioritas produksi.",
    featured: false,
    items: [
      "15 video Reels Instagram & TikTok",
      "40 foto Feed & Story",
      "Creative direction & advanced research",
      "Strategi media sosial bulanan",
      "Konsultasi strategi konten",
      "Boost Ads maks. 3 video",
      "Performance report bulanan",
      "Prioritas jadwal & revisi fleksibel",
    ],
  },
] as const;