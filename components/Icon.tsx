// Ikon garis 24px, stroke 1.5px, satu warna — mengikuti spesifikasi Ikon Layanan Notive.
type Name = "social" | "camera" | "plan" | "ads" | "arrow" | "instagram" | "whatsapp" | "mail" | "pin" | "check" | "menu" | "close";

const paths: Record<Name, React.ReactNode> = {
  social: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.8" cy="7.2" r="0.6" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="6.5" width="13" height="11" rx="2.5" />
      <path d="M16 10.5l5-3v9l-5-3" />
    </>
  ),
  plan: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M4 9.5h16M8.5 3v4M15.5 3v4M8 13.5h3M8 16.5h6" />
    </>
  ),
  ads: (
    <>
      <path d="M4 14V10l11-5v14L4 14z" />
      <path d="M7 14.5l1.2 4.5h2.6L9.8 15M18 9.5a3 3 0 010 5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.9" cy="7.1" r="0.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1112 20a8 8 0 01-3.9-1z" />
      <path d="M9.3 8.8c.2 2.9 2.9 5.6 5.9 5.9l.9-1.3-1.7-.9-.8.8c-1-.4-2.2-1.6-2.7-2.7l.8-.8-.9-1.7z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({ name, size = 24, className }: { name: Name; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
