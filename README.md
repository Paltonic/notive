# Notive — Landing Page (Next.js)

Landing page Notive dengan Next.js 15 (App Router) + TypeScript. Warna dan font mengikuti Brand Guideline Notive 2026
(Violet, Magenta, Indigo, Midnight, Gradasi Notive · Playfair Display, Plus Jakarta Sans, Roboto Mono).

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run build && npm start   # mode produksi
```

Deploy paling mudah: push ke GitHub lalu import di Vercel.

## Yang perlu diisi sebelum online

1. **`lib/site.ts`** — nomor WhatsApp (`whatsapp`, format 62…), email, dan lokasi.
2. **Logo** — taruh file master logo di `/public`, lalu ganti isi `components/Logo.tsx` (petunjuk ada di file itu).
   Sekarang masih placeholder teks karena guideline melarang mengetik ulang logo.
3. Cek ulang isi paket & harga di `lib/site.ts` (diambil dari dokumen Our Packages).

## Struktur

```
app/layout.tsx        font + metadata SEO
app/page.tsx          seluruh section: Hero, Layanan, Proses, Paket, Kontak, Footer
app/globals.css       token warna & semua style
components/           Nav (menu mobile), ContactForm (kirim ke WhatsApp), Icon, Logo
lib/site.ts           data kontak, layanan, proses, paket
```

Form kontak tidak butuh backend: isian disusun jadi pesan lalu dibuka di WhatsApp.
