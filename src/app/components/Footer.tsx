import { Recycle } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "#F1EFE8",
        borderTop: "0.5px solid rgba(44,44,42,0.12)",
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Recycle size={16} color="#2DB887" strokeWidth={1.5} />
          <span style={{ fontSize: 13, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif" }}>
            Monte Castro Recicla
          </span>
        </div>
        <span style={{ fontSize: 12, color: "#888780", fontFamily: "Inter, sans-serif" }}>
          © 2026 · Buenos Aires, Argentina
        </span>
      </div>
    </footer>
  );
}
