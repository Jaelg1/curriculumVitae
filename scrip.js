document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link'); // Todos los enlaces del menú
    const sections = document.querySelectorAll('section'); // Todas las secciones

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

            // Eliminar la clase "activo" de todas las secciones
            sections.forEach(section => {
                section.classList.remove('activo');
            });

            // Agregar la clase "activo" a la sección correspondiente
            const targetId = link.getAttribute('href').substring(1); // Obtener el id del enlace (sin el '#')
            const targetSection = document.getElementById(targetId); // Obtener la sección correspondiente
            targetSection.classList.add('activo');
        });
    });
});



