function toggleMenu() {
    var overlay = document.getElementById("overlay");
    overlay.style.display === "block" ? overlay.style.display = "none" : overlay.style.display = "block";
}

function closeMenu() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

document.addEventListener('DOMContentLoaded', (event) => {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Asegurarse de que el overlay esté oculto al cargar la página
});
