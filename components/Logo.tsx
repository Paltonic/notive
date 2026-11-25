// PLACEHOLDER — brand guideline Notive melarang mengetik ulang logo.
// Letakkan file master logo di /public (mis. /public/logo-notive-white.svg & /public/logo-notive-gradient.svg),
// lalu ganti isi komponen ini dengan:
//   <Image src={light ? "/logo-notive-white.svg" : "/logo-notive-gradient.svg"} alt="Notive" width={132} height={32} priority />
// (import Image from "next/image")

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo-placeholder ${light ? "is-light" : ""}`} aria-label="Notive">
      Notive
    </span>
  );
}
