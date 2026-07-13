import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section
      style={{
        background: "#ffffff",
        paddingTop: 120,
        paddingBottom: 96,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#EAF3DE",
            color: "#2DB887",
            borderRadius: 100,
            padding: "5px 14px",
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 32,
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Leaf size={13} strokeWidth={1.5} />
          Iniciativa vecinal — Barrio Monte Castro
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 500,
            color: "#2C2C2A",
            lineHeight: 1.2,
            marginBottom: 20,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Reciclar en el barrio es más fácil de lo que pensás
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 17,
            color: "#888780",
            lineHeight: 1.7,
            marginBottom: 40,
            fontFamily: "Inter, sans-serif",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Monte Castro Recicla es una iniciativa vecinal que organiza la separación de residuos, acerca los puntos verdes y facilita los reclamos de limpieza en nuestro barrio.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#como-reciclar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#2DB887",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              cursor: "pointer",
              transition: "background 0.15s",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1D9E75")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB887")}
          >
            Cómo reciclar
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
          <a
            href="#puntos-verdes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "#2DB887",
              border: "0.5px solid #2DB887",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              cursor: "pointer",
              transition: "background 0.15s, color 0.15s",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#EAF3DE";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Ver puntos verdes
          </a>
        </div>
      </div>
    </section>
  );
}
