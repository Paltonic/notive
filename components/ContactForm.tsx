"use client";

import { useState } from "react";
import { site, packages } from "@/lib/site";
import Icon from "./Icon";

// Form ini tidak butuh backend: saat dikirim, pesan disusun lalu dibuka di WhatsApp.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", brand: "", pkg: "Belum tahu", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Halo Notive, saya ${form.name}` +
      (form.brand ? ` dari ${form.brand}` : "") +
      `.\nPaket yang diminati: ${form.pkg}.` +
      (form.message ? `\n\n${form.message}` : "");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label className="field">
          <span>Nama</span>
          <input required value={form.name} onChange={update("name")} placeholder="Nama kamu" autoComplete="name" />
        </label>
        <label className="field">
          <span>Nama bisnis / merek</span>
          <input value={form.brand} onChange={update("brand")} placeholder="Opsional" autoComplete="organization" />
        </label>
      </div>
      <label className="field">
        <span>Paket yang diminati</span>
        <select value={form.pkg} onChange={update("pkg")}>
          <option>Belum tahu</option>
          {packages.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Ceritakan kebutuhanmu</span>
        <textarea rows={4} value={form.message} onChange={update("message")} placeholder="Tujuan, target audiens, atau pertanyaan" />
      </label>
      <button type="submit" className="btn btn--primary btn--block">
        <Icon name="whatsapp" size={20} />
        Kirim lewat WhatsApp
      </button>
    </form>
  );
}
