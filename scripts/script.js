// Script para funcionalidades adicionales
document.addEventListener('DOMContentLoaded', () => {
    // Efecto al desplazar en la barra de navegación
    const navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    // Validación del formulario de contacto
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Te responderemos pronto.');
            contactForm.reset();
        });
    }
});
