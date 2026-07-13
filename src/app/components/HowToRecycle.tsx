import { Apple, Package, Trash2, Info, Clock, MapPin } from "lucide-react";

const bins = [
  {
    color: "#2DB887",
    bgLight: "#EAF3DE",
    label: "Orgánicos",
    icon: <Apple size={28} strokeWidth={1.5} color="#2DB887" />,
    items: ["Restos de frutas y verduras", "Yerba y té usados", "Restos de comida cocida", "Cáscaras de huevo"],
  },
  {
    color: "#378ADD",
    bgLight: "#EBF3FC",
    label: "Reciclables",
    icon: <Package size={28} strokeWidth={1.5} color="#378ADD" />,
    items: ["Cartón y papel limpio", "Botellas de plástico", "Latas de aluminio", "Vidrio (sin tapas metálicas)"],
  },
  {
    color: "#888780",
    bgLight: "#F1EFE8",
    label: "No reciclables",
    icon: <Trash2 size={28} strokeWidth={1.5} color="#888780" />,
    items: ["Papel higiénico y servilletas", "Pañales y toallitas", "Telgopor y adhesivos", "Residuos sanitarios"],
  },
];

const tips = [
  {
    icon: <Info size={20} strokeWidth={1.5} color="#2DB887" />,
    title: "Enjuagá antes de tirar",
    desc: "Los envases con restos de comida o líquido contaminan el resto del reciclable. Un enjuague rápido alcanza.",
  },
  {
    icon: <Clock size={20} strokeWidth={1.5} color="#2DB887" />,
    title: "Horarios de recolección",
    desc: "En Monte Castro la recolección diferenciada pasa los martes y viernes por la mañana. Sacá el tacho la noche anterior.",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} color="#2DB887" />,
    title: "Usá los puntos verdes",
    desc: "Si te quedás con material reciclable entre semanas, llevalo al punto verde más cercano. Funcionan todos los días.",
  },
];

export function HowToRecycle() {
  return (
    <section
      id="como-reciclar"
      style={{
        background: "#F1EFE8",
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
            Guía práctica
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", marginBottom: 12 }}>
            ¿Cómo reciclar?
          </h2>
          <p style={{ fontSize: 16, color: "#888780", lineHeight: 1.7, fontFamily: "Inter, sans-serif", maxWidth: 520 }}>
            Separar la basura en casa es el primer paso. Conocé qué va en cada tacho y hacé la diferencia desde tu cocina.
          </p>
        </div>

        {/* Bin cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {bins.map((bin) => (
            <div
              key={bin.label}
              style={{
                background: "#ffffff",
                border: `0.5px solid rgba(44,44,42,0.12)`,
                borderRadius: 12,
                padding: 28,
                borderTop: `3px solid ${bin.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: bin.bgLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {bin.icon}
                </div>
                <span style={{ fontSize: 16, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif" }}>
                  {bin.label}
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {bin.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: 14,
                      color: "#2C2C2A",
                      lineHeight: 1.5,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: bin.color,
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tips cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {tips.map((tip) => (
            <div
              key={tip.title}
              style={{
                background: "#ffffff",
                border: "0.5px solid rgba(44,44,42,0.12)",
                borderRadius: 10,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#EAF3DE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tip.icon}
              </div>
              <p style={{ fontSize: 15, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", margin: 0 }}>
                {tip.title}
              </p>
              <p style={{ fontSize: 14, color: "#888780", lineHeight: 1.7, fontFamily: "Inter, sans-serif", margin: 0 }}>
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
