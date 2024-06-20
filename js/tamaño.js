document.addEventListener("DOMContentLoaded", function() {
    function handleOrientationChange() {
        const pcElements = document.querySelectorAll('.pc');
        const celularElements = document.querySelectorAll('.celular');

        if (window.matchMedia("(max-width: 700px)").matches) {
            // Estamos en modo vertical
            pcElements.forEach(el => el.style.display = 'none');
            celularElements.forEach(el => el.style.display = 'flex');
        } else if (window.matchMedia("(max-width: 12000px)").matches) {
            // Estamos en modo horizontal
            pcElements.forEach(el => el.style.display = 'flex');
            celularElements.forEach(el => el.style.display = 'none');
        }
    }

    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange(); // Llama a la función inicialmente para establecer el estado correcto
});
