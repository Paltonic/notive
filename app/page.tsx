import Nav from "@/components/Nav";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";
import { site, services, steps, packages } from "@/lib/site";

export default function Home() {
  const year = "2025";

  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO — Mode Gradasi */}
        <section className="hero">
          <div className="hero__n" aria-hidden="true">N</div>
          <div className="container hero__inner">
            <p className="eyebrow eyebrow--light">Digital marketing · Instagram &amp; TikTok</p>
            <h1 className="hero__title">
              Konten konsisten, <em>merek</em> diingat.
            </h1>
            <p className="hero__lead">
              Notive membantu bisnismu tumbuh di media sosial: dari riset, produksi konten, sampai promosi — kreatif di
              ide, terukur di hasil.
            </p>
            <div className="hero__actions">
              <a href="#kontak" className="btn btn--light">
                Konsultasi gratis <Icon name="arrow" size={20} />
              </a>
              <a href="#paket" className="btn btn--ghost">
                Lihat paket
              </a>
            </div>
          </div>
        </section>

        {/* LAYANAN */}
        <section id="layanan" className="section">
          <div className="container">
            <p className="eyebrow">Layanan</p>
            <h2 className="h2">
              Satu tim, dari ide sampai <em>tayang</em>.
            </h2>
            <p className="lead">
              Kamu cukup berkoordinasi dengan satu PIC. Riset, perencanaan, produksi, copywriting, publikasi, dan promosi
              kami tangani dalam satu alur kerja.
            </p>
            <div className="services">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <span className="card__icon">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROSES */}
        <section id="proses" className="section section--tint">
          <div className="container">
            <p className="eyebrow">Cara kami bekerja</p>
            <h2 className="h2">
              Pendekatan yang <em>terukur</em>.
            </h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.no} className="step">
                  <span className="step__no">{s.no}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PAKET */}
        <section id="paket" className="section">
          <div className="container">
            <p className="eyebrow">Paket</p>
            <h2 className="h2">
              Bersama tumbuhkan <em>brand</em> kamu.
            </h2>
            <p className="lead">Harga per bulan, mulai dari. Penawaran final menyesuaikan kebutuhan bisnismu.</p>
            <div className="packages">
              {packages.map((p) => (
                <article key={p.name} className={`pkg ${p.featured ? "pkg--featured" : ""}`}>
                  {p.featured && <span className="pkg__badge">Paling populer</span>}
                  <h3 className="pkg__name">{p.name}</h3>
                  <p className="pkg__fit">{p.fit}</p>
                  <p className="pkg__price">
                    <span className="pkg__from">Mulai dari</span>
                    <span className="pkg__amount">
                      <span className="mono">Rp</span> {p.price}
                    </span>
                    <span className="pkg__per">/ bulan</span>
                  </p>
                  <ul className="pkg__list">
                    {p.items.map((i) => (
                      <li key={i}>
                        <Icon name="check" size={18} />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a href="#kontak" className={`btn btn--block ${p.featured ? "btn--primary" : "btn--outline"}`}>
                    Pilih {p.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAK — Mode Gradasi */}
        <section id="kontak" className="contact">
          <div className="container contact__inner">
            <div className="contact__intro">
              <p className="eyebrow eyebrow--light">Kontak</p>
              <h2 className="h2 h2--light">
                More than just <em>social media.</em>
              </h2>
              <p className="contact__lead">
                Ceritakan bisnismu, kami bantu tentukan langkah pertama. Konsultasi awal tanpa biaya.
              </p>
              <ul className="contact__list">
                <li>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" /> @{site.instagram}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>
                    <Icon name="mail" /> {site.email}
                  </a>
                </li>
                <li>
                  <span>
                    <Icon name="pin" /> {site.location}
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact__card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <p>
            © {year} Notive · <a href={site.instagramUrl}>@{site.instagram}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
