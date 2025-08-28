export function itemTarea(indice, titulo,estado, fechaAsignacion, fechaEntrega, listaIntegrantes) {
    let divItem = document.createElement('div');
    divItem.className = "item-tarea"; // clase única para todo el componente

    // Número de la tarea
    let divNumero = document.createElement('div');
    divNumero.className = "tarea-numero";
    divNumero.textContent = indice;

    // Título
    let divTitulo = document.createElement('div');
    divTitulo.className = "tarea-titulo";
    divTitulo.textContent = titulo;


    // Estado
    let spanEstado = document.createElement('span');
    spanEstado.className = `tarea-estado tarea-estado-${estado?.toLowerCase() || "pendiente"}`;
    spanEstado.textContent = estado;

    // Fecha de asignación
    let fechaAsig = document.createElement('div');
    fechaAsig.className = "tarea-fecha-asignacion";
    fechaAsig.textContent = fechaAsignacion;

    // Fecha de entrega
    let fechaEnt = document.createElement('div');
    fechaEnt.className = "tarea-fecha-entrega";
    fechaEnt.textContent = fechaEntrega;

    // Listado de integrantes (emojis o íconos)
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    listaIntegrantes.forEach((emoji) => {
        let spanEmoji = document.createElement('span');
        spanEmoji.className = "tarea-integrante";
        spanEmoji.textContent = emoji;
        divIntegrantes.appendChild(spanEmoji);
    });

    // Botón eliminar
    let btnEliminar = document.createElement('button');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.textContent = "🗑️";
    // Aquí podrías agregar el evento para eliminarlo si quieres

    // Añadir todos los elementos al div principal
    divItem.appendChild(divNumero);
    divItem.appendChild(divTitulo);
    divItem.appendChild(spanEstado);
    divItem.appendChild(fechaAsig);
    divItem.appendChild(fechaEnt);
    divItem.appendChild(divIntegrantes);
    divItem.appendChild(btnEliminar);
    //divItem.appendChild(divDescripcion);

    return divItem;
}