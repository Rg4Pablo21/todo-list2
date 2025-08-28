import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";

// LOCAL: usa tu backend local
const API_TAREAS = "http://localhost:3000/tareas";


export async function dashboard() {
  let tareasDb = [];
  try {
    const resp = await fetch(API_TAREAS, { headers: { Accept: "application/json" } });
    if (!resp.ok) throw new Error(`HTTP ${resp.status} al pedir ${API_TAREAS}`);
    const ctype = resp.headers.get("content-type") || "";
    if (!ctype.includes("application/json")) {
      const texto = await resp.text();
      throw new Error(`Respuesta no JSON (${ctype}). Muestra: ${texto.slice(0,120)}`);
    }
    tareasDb = await resp.json();

    // ⇩⇩ Mostrar en la consola de forma clara
    console.log("Tareas ", tareasDb);
    

  } catch (e) {
    console.error("Fallo al cargar tareas:", e);
    // Fallback para que la UI no se caiga
    tareasDb = [{ nombre:"Demo", estado_tarea:"pendiente", fecha_asignada:"2025-08-20", fecha_entrega:"2025-08-27" }];
  }

  const dashboard = document.createElement("section");
  dashboard.className ="dashboard";

  dashboard.appendChild(header());

  const seccion1 = document.createElement("section");
  seccion1.className = "seccion-1";
  seccion1.appendChild(tareas(tareasDb));
  seccion1.appendChild(informacion(tareasDb[0] || {}));
  dashboard.appendChild(seccion1);

  dashboard.appendChild(footer());
  return dashboard;
}

dashboard().then(el => el && document.body.appendChild(el));
