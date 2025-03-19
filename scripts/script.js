$(document).ready(function () {
    // Cachear elementos para mejorar el rendimiento
    const navBar = $('.navbar');
    const backToTop = $('#back-to-top');
    const goBack = $('#go-back');

    // Función para manejar la clase 'scrolled' en la barra de navegación
    const handleNavBarScroll = () => {
        if ($(window).scrollTop() > 50) {
            navBar.addClass('scrolled');
        } else {
            navBar.removeClass('scrolled');
        }
    };
    // Pausa automática después de 10 segundos
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        $('#projectsCarousel').carousel('pause');
    }, 10000); // Detener el carrusel después de 10,000 ms (10 segundos)
});

    // Función para mostrar/ocultar botones flotantes
    const handleFloatingButtons = () => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 20) {
            backToTop.fadeIn();
            goBack.fadeIn();
        } else {
            backToTop.fadeOut();
            goBack.fadeOut();
        }
    };

    // Scroll suave al hacer clic en "Volver arriba"
    backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600, 'swing'); // Ajuste de duración y animación
        return false;
    });

    // Navegación a la página de servicios
    if (goBack.length) {
        goBack.on('click', function () {
            window.location.href = 'services.html';
        });
    }

    // Interacciones accesibles con teclado
    $('#back-to-top, #go-back').on('keydown', function (e) {
        if (e.key === 'Enter') {
            $(this).trigger('click');
        }
    });

    // Optimización del evento de scroll con debounce para reducir el impacto en el rendimiento
    let debounceTimer;
    $(window).on('scroll', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            handleNavBarScroll();
            handleFloatingButtons();
        }, 100);
    });

    // Llamada inicial para establecer el estado en caso de que la página no esté al tope
    handleNavBarScroll();
    handleFloatingButtons();
});
