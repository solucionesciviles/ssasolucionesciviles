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

// Volver atrás o a la página de inicio cuando se hace clic en el botón "Volver atrás o a Inicio"
document.getElementById("go-back").onclick = function() {
    if (document.referrer) {
        window.history.back(); // Volver a la página anterior si hay una
    } else {
        window.location.href = 'index.html'; // Ir a la página de inicio si no hay una página anterior
    }
};
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

// Volver atrás o a la página de inicio cuando se hace clic en el botón "Volver atrás o a Inicio"
document.getElementById("go-back").onclick = function() {
    if (document.referrer) {
        window.history.back(); // Volver a la página anterior si hay una
    } else {
        window.location.href = 'index.html'; // Ir a la página de inicio si no hay una página anterior
    }
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
