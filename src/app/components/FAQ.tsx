import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué días pasa la recolección diferenciada por el barrio?",
    a: "En Monte Castro la recolección diferenciada pasa los martes y viernes. Se recolectan materiales secos reciclables (plásticos, cartones, vidrio, metales). Los residuos orgánicos se retiran junto con los residuos generales de lunes a sábado.",
  },
  {
    q: "¿Tengo que limpiar los envases antes de tirarlos?",
    a: "Sí, es fundamental. Los envases con restos de comida o líquido contaminan al resto del material reciclable y pueden inutilizar todo el tacho. Un simple enjuague con agua es suficiente.",
  },
  {
    q: "¿Qué hago con los residuos electrónicos (RAEE)?",
    a: "Los residuos de aparatos eléctricos y electrónicos (pilas, cargadores, computadoras, celulares) tienen un circuito especial. No van en los tachos verdes. Podés llevarlos al punto RAEE de Av. Rivadavia 7100, los miércoles de 10 a 14 hs.",
  },
  {
    q: "¿Cómo sé si un plástico es reciclable?",
    a: "Los plásticos con los códigos 1 (PET), 2 (PEAD) y 5 (PP) son los más aceptados en los circuitos de reciclaje de la ciudad. Los encontrás grabados en la base del envase. Los de código 7 (otros) generalmente no son reciclables.",
  },
  {
    q: "¿La iniciativa Monte Castro Recicla es parte del gobierno de la ciudad?",
    a: "No. Somos una organización vecinal independiente. Trabajamos en conjunto con la Dirección General de Limpieza del GCBA, pero no somos un organismo público. Toda la gestión de reclamos la derivamos a los canales oficiales.",
  },
  {
    q: "¿Cómo puedo sumarme como voluntario/a?",
    a: "¡Con mucho gusto! Podés escribirnos a voluntarios@montecastrorecicla.org o seguirnos en redes sociales. Hacemos encuentros barriales el primer sábado de cada mes en la Plaza Arenales.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#ffffff",
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#2DB887", fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
            Respondemos tus dudas
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif" }}>
            Preguntas frecuentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "0.5px solid rgba(44,44,42,0.12)",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: isOpen ? "#2DB887" : "#2C2C2A",
                      fontFamily: "Inter, sans-serif",
                      lineHeight: 1.4,
                      transition: "color 0.15s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    color={isOpen ? "#2DB887" : "#888780"}
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s, color 0.15s",
                    }}
                  />
                </button>
                {isOpen && (
                  <p
                    style={{
                      fontSize: 15,
                      color: "#888780",
                      lineHeight: 1.7,
                      fontFamily: "Inter, sans-serif",
                      paddingBottom: 20,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
