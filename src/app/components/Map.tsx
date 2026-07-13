import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const POINTS = [
  {
    name: "Plaza Don Bosco",
    address: "Av. Lope de Vega y Elpidio González",
    coords: [-34.626359, -58.508806] as [number, number],
    hours: "Miércoles a viernes, 14 a 19 hs · Sábados y domingos, 12 a 17 hs",
  },
  {
    name: "Plaza Monte Castro",
    address: "Gualeguaychú y Miranda",
    coords: [-34.617799, -58.497970] as [number, number],
    hours: "Miércoles a viernes, 14 a 19 hs · Sábados y domingos, 12 a 17 hs",
  },
];

function makeIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 22px;
        height: 22px;
        background: #2DB887;
        border: 2.5px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 0 1.5px #2DB887;
      "></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
}

export function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [-34.622, -58.503],
      zoom: 14,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    POINTS.forEach((p) => {
      const marker = L.marker(p.coords, { icon: makeIcon() }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: Inter, sans-serif; padding: 4px 2px; min-width: 200px;">
          <p style="margin: 0 0 4px; font-size: 14px; font-weight: 500; color: #2C2C2A;">${p.name}</p>
          <p style="margin: 0 0 6px; font-size: 12px; color: #888780;">${p.address}</p>
          <div style="display: flex; align-items: flex-start; gap: 5px;">
            <span style="font-size: 11px; color: #2DB887; font-weight: 500; line-height: 1.5;">${p.hours}</span>
          </div>
        </div>
      `, {
        closeButton: false,
        className: "mcr-popup",
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <style>{`
        .mcr-popup .leaflet-popup-content-wrapper {
          border-radius: 10px;
          border: 0.5px solid rgba(44,44,42,0.15);
          box-shadow: none;
          padding: 0;
        }
        .mcr-popup .leaflet-popup-content {
          margin: 14px 16px;
        }
        .mcr-popup .leaflet-popup-tip-container {
          display: none;
        }
        .leaflet-control-zoom a {
          font-family: Inter, sans-serif;
          color: #2C2C2A !important;
          border-color: rgba(44,44,42,0.15) !important;
        }
        .leaflet-control-zoom a:hover {
          color: #2DB887 !important;
        }
        .leaflet-control-attribution {
          font-family: Inter, sans-serif;
          font-size: 10px;
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: 400,
          borderRadius: 12,
          border: "0.5px solid rgba(44,44,42,0.12)",
          overflow: "hidden",
        }}
      />
    </>
  );
}
