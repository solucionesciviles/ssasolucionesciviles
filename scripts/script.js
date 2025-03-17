// Script para funcionalidades adicionales
$(document).ready(function () {
    // Agregar efectos al desplazarse en la barra de navegación
    const navBar = $('.navbar'); // Cambiado a la clase correcta de la barra de navegación
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            navBar.addClass('scrolled');
        } else {
            navBar.removeClass('scrolled');
        }
    });

    // Mostrar botones flotantes al desplazarse hacia abajo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("#back-to-top").fadeIn();
            $("#go-back").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
            $("#go-back").fadeOut();
        }
    });

    // Suavizar el desplazamiento al inicio cuando se hace clic en "Volver arriba"
    $("#back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800); // Animación suave para volver arriba
        return false;
    });

    // Navegar a la página de servicios al hacer clic en "Volver a Servicios"
    $("#go-back").click(function () {
        window.location.href = 'services.html'; // Redirigir a la página de servicios
    });
});
