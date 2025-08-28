import { itemTarea } from "../../modulos/itemTarea.js";


export function tareas(tareasDb) {
    let divtareas = document.createElement('div');
    divtareas.className = "div-tareas";

    tareasDb.forEach((e) => {
        let tarea = itemTarea(
            1, 
            e.nombre,
            e.estado_tarea, 
            e.fecha_asignada, 
            e.fecha_entrega, []);
        divtareas.appendChild(tarea);
    });

    return divtareas;
}