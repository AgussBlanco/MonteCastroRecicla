import { MapPin, Clock } from "lucide-react";
import { Map } from "./Map";

const points = [
  {
    name: "Plaza Don Bosco",
    address: "Av. Lope de Vega y Elpidio González",
    hours: "Lun a sáb, 8 hs – 20 hs",
  },
  {
    name: "Plaza Monte Castro",
    address: "Gualeguaychú y Miranda, Monte Castro",
    hours: "Lun a sáb, 8 hs – 20 hs",
  },
];

export function GreenPoints() {
  return (
    <section
      id="puntos-verdes"
      style={{
        background: "#ffffff",
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#2DB887", fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
            Dónde reciclar
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", marginBottom: 12 }}>
            Puntos verdes
          </h2>
          <p style={{ fontSize: 16, color: "#888780", lineHeight: 1.7, fontFamily: "Inter, sans-serif", maxWidth: 520 }}>
            Estos son los centros de recolección diferenciada del barrio. Podés llevar tus materiales reciclables en cualquier momento del horario indicado.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
          className="green-points-grid"
        >
          {/* Interactive map */}
          <Map />

          {/* Points list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {points.map((p, i) => (
              <div
                key={p.name}
                style={{
                  padding: "20px 0",
                  borderBottom: i < points.length - 1 ? "0.5px solid rgba(44,44,42,0.12)" : "none",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#2DB887",
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", margin: "0 0 4px" }}>
                    {p.name}
                  </p>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 2 }}>
                    <MapPin size={12} strokeWidth={1.5} color="#888780" />
                    <span style={{ fontSize: 13, color: "#888780", fontFamily: "Inter, sans-serif" }}>{p.address}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <Clock size={12} strokeWidth={1.5} color="#888780" />
                    <span style={{ fontSize: 13, color: "#888780", fontFamily: "Inter, sans-serif" }}>{p.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .green-points-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
