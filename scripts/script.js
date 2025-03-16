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
// Mostrar los botones cuando se hace scroll hacia abajo
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    var goBackButton = document.getElementById("go-back");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        goBackButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
        goBackButton.style.display = "none";
    }
};

// Volver al inicio cuando se hace clic en el botón "Volver arriba"
document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};

// Volver a la página de servicios cuando se hace clic en el botón "Volver a Servicios"
document.getElementById("go-back").onclick = function() {
    window.location.href = 'services.html'; // Redirigir a la página de servicios
};
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
