import { useState } from "react";
import { Recycle, Menu, X } from "lucide-react";

const links = [
  { href: "#como-reciclar", label: "Cómo reciclar" },
  { href: "#puntos-verdes", label: "Puntos verdes" },
  { href: "#reclamo", label: "Hacé tu reclamo" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: "0.5px solid rgba(44,44,42,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "#2C2C2A",
          }}
        >
          <Recycle size={22} color="#2DB887" strokeWidth={1.5} />
          <span style={{ fontWeight: 500, fontSize: 15, color: "#2C2C2A", fontFamily: "Inter, sans-serif" }}>
            Monte Castro Recicla
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#888780",
                textDecoration: "none",
                transition: "color 0.15s",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2DB887")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888780")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "none",
            color: "#2C2C2A",
          }}
          className="nav-hamburger"
          aria-label="Menú"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "0.5px solid rgba(44,44,42,0.12)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          className="nav-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                color: "#2C2C2A",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 701px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
