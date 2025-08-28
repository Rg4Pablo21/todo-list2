import { formularioTarea } from "../formulario/formularioComponente.js";

export function informacion(datos) {
    // Panel derecho
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-info";

    // Botones superiores
    let contenedorBotones = document.createElement('div');
    contenedorBotones.className = "contenedor-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.textContent = "+ tarea";

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.textContent = "Archivados";

    contenedorBotones.appendChild(btnTarea);
    contenedorBotones.appendChild(btnArchivados);

    // Formulario oculto
    let formulario = formularioTarea();
    formulario.style.display = "none";

    btnTarea.addEventListener('click', () => {
        formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });

    // Tarjeta de información
    let tarjeta = document.createElement('div');
    tarjeta.className = "tarjeta-informacion";

    let estado = document.createElement('span');
    estado.className = "estado";
    estado.textContent = datos.estado_tarea || "pendiente";

    let titulo = document.createElement('h3');
    titulo.className = "titulo-tarea";
    titulo.textContent = datos.nombre || "Título de la asignación";

    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-tarea";
    descripcion.textContent = datos.descripcion || "Descripción de la tarea";

    let textoIntegrantes = document.createElement('p');
    textoIntegrantes.textContent = "Integrantes";

    let contenedorIntegrantes = document.createElement('div');
    contenedorIntegrantes.className = "contenedor-integrantes";

    tarjeta.appendChild(estado);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(textoIntegrantes);
    tarjeta.appendChild(contenedorIntegrantes);

    // Ensamblar la columna derecha
    divInformacion.appendChild(contenedorBotones);
    divInformacion.appendChild(formulario);
    divInformacion.appendChild(tarjeta);

    return divInformacion;
}
