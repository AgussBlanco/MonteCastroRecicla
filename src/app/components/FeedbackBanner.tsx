import { ExternalLink, MessageSquare } from "lucide-react";

const FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLScY2XnqMNLb1S7xb1VjjKm3icD-W3naErfRznWvC9JeXJ8LdA/viewform?usp=publish-editor";

export function FeedbackBanner() {
  return (
    <section
      style={{
        background: "#EAF3DE",
        borderTop: "0.5px solid rgba(44,44,42,0.12)",
        borderBottom: "0.5px solid rgba(44,44,42,0.12)",
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "#ffffff",
              border: "0.5px solid rgba(44,44,42,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MessageSquare size={18} strokeWidth={1.5} color="#2DB887" />
          </div>
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#2C2C2A",
                fontFamily: "Inter, sans-serif",
                margin: "0 0 4px",
              }}
            >
              ¿Qué te parece esta página?
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#888780",
                fontFamily: "Inter, sans-serif",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Tu opinión nos ayuda a mejorar. Completá el formulario, son solo 2 minutos.
            </p>
          </div>
        </div>

        <a
          href={FORMS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#2DB887",
            color: "#ffffff",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background 0.15s",
            fontFamily: "Inter, sans-serif",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1D9E75")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB887")}
        >
          Dar mi opinión
          <ExternalLink size={13} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
