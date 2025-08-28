export function footer() {
    let footer = document.createElement('footer');
    footer.className = 'footer';

    // Línea horizontal
    let linea = document.createElement('hr');
    linea.className = 'footer-line';
    footer.appendChild(linea);

    // Párrafo
    let texto = document.createElement('p');
    texto.className = 'footer-text';

    // Enlace
    let enlace = document.createElement('a');
    enlace.href = 'https://github.com/Rg4Pablo21/todo-list2.git';  
    enlace.textContent = 'GitHub';
    enlace.target = '_blank';

    // Añadir el enlace al párrafo
    texto.appendChild(enlace);

    // Añadir el párrafo al footer
    footer.appendChild(texto);

    return footer;
}