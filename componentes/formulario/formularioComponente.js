export function formularioTarea() {
    let form = document.createElement('form');
    form.className = "formulario-tarea";

    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    inputTitulo.required = true;

    let inputDescripcion = document.createElement('textarea');
    inputDescripcion.placeholder = "Descripción";
    inputDescripcion.required = true;

    let selectEstado = document.createElement('select');
    let opciones = ["completado", "pendiente", "incompleto"];
    opciones.forEach(opcionTexto => {
        let opcion = document.createElement('option');
        opcion.value = opcionTexto;
        opcion.textContent = opcionTexto;
        selectEstado.appendChild(opcion);
    });

    let inputFechaAsignacion = document.createElement('input');
    inputFechaAsignacion.type = "date";
    inputFechaAsignacion.valueAsDate = new Date();
    inputFechaAsignacion.disabled = true;

    let inputFechaEntrega = document.createElement('input');
    inputFechaEntrega.type = "date";
    inputFechaEntrega.required = true;

    let btnGuardar = document.createElement('button');
    btnGuardar.type = "submit";
    btnGuardar.textContent = "Guardar";

    form.appendChild(inputTitulo);
    form.appendChild(inputDescripcion);
    form.appendChild(selectEstado);
    form.appendChild(inputFechaAsignacion);
    form.appendChild(inputFechaEntrega);
    form.appendChild(btnGuardar);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nuevaTarea = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            estado: selectEstado.value,
            fechaAsignacion: inputFechaAsignacion.value,
            fechaEntrega: inputFechaEntrega.value
        };

        console.log("📌 Nueva tarea registrada:", nuevaTarea);

        form.reset();
        inputFechaAsignacion.valueAsDate = new Date(); // volver a colocar fecha actual
        form.style.display = "none"; // opcional: ocultar tras guardar
    });

    return form;
}