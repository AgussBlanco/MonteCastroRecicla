import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

const problemTypes = [
  "Basura acumulada en la vereda",
  "Tacho verde dañado o faltante",
  "Recolección no realizada",
  "Vuelco ilegal de escombros",
  "Contenedor desbordado",
  "Otro problema",
];

export function ClaimForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    type: "",
    detail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    fontSize: 15,
    color: "#2C2C2A",
    background: "#ffffff",
    border: "0.5px solid rgba(44,44,42,0.25)",
    borderRadius: 8,
    outline: "none",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 500,
    color: "#2C2C2A",
    fontFamily: "Inter, sans-serif",
    display: "block",
    marginBottom: 6,
  };

  return (
    <section
      id="reclamo"
      style={{
        background: "#F1EFE8",
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#2DB887", fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
            Reportá un problema
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", marginBottom: 12 }}>
            Hacé tu reclamo
          </h2>
          <p style={{ fontSize: 16, color: "#888780", lineHeight: 1.7, fontFamily: "Inter, sans-serif" }}>
            Si hay algo que no funciona bien en tu cuadra, contanos. Revisamos cada reclamo y lo derivamos al área correspondiente del gobierno de la ciudad.
          </p>
        </div>

        {sent ? (
          <div
            style={{
              background: "#ffffff",
              border: "0.5px solid rgba(44,44,42,0.12)",
              borderRadius: 12,
              padding: 48,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <CheckCircle size={40} strokeWidth={1.5} color="#2DB887" />
            <p style={{ fontSize: 17, fontWeight: 500, color: "#2C2C2A", fontFamily: "Inter, sans-serif", margin: 0 }}>
              ¡Reclamo enviado!
            </p>
            <p style={{ fontSize: 15, color: "#888780", fontFamily: "Inter, sans-serif", margin: 0, lineHeight: 1.6 }}>
              Recibimos tu reporte. En las próximas 48 horas hábiles te informamos el seguimiento por email.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", address: "", type: "", detail: "" }); }}
              style={{
                marginTop: 8,
                background: "transparent",
                border: "0.5px solid #2DB887",
                color: "#2DB887",
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: 14,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Hacer otro reclamo
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#ffffff",
              border: "0.5px solid rgba(44,44,42,0.12)",
              borderRadius: 12,
              padding: "36px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Name */}
            <div>
              <label style={labelStyle} htmlFor="name">Nombre completo</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ej: María González"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2DB887")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(44,44,42,0.25)")}
              />
            </div>

            {/* Address */}
            <div>
              <label style={labelStyle} htmlFor="address">Dirección de la cuadra</label>
              <input
                id="address"
                name="address"
                type="text"
                required
                placeholder="Ej: Bermúdez 3200 entre Avelino y Helguera"
                value={form.address}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2DB887")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(44,44,42,0.25)")}
              />
            </div>

            {/* Type */}
            <div>
              <label style={labelStyle} htmlFor="type">Tipo de problema</label>
              <select
                id="type"
                name="type"
                required
                value={form.type}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2DB887")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(44,44,42,0.25)")}
              >
                <option value="" disabled>Seleccioná una opción</option>
                {problemTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Detail */}
            <div>
              <label style={labelStyle} htmlFor="detail">Descripción del problema</label>
              <textarea
                id="detail"
                name="detail"
                required
                rows={4}
                placeholder="Contanos con más detalle qué está pasando…"
                value={form.detail}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2DB887")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(44,44,42,0.25)")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#2DB887",
                color: "#ffffff",
                border: "none",
                borderRadius: 8,
                padding: "13px 24px",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "background 0.15s",
                marginTop: 4,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1D9E75")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB887")}
            >
              <Send size={15} strokeWidth={1.5} />
              Enviar reclamo
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
