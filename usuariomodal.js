var abrir = document.getElementById("avatar");
var menu = document.getElementById("ocultar");

function abrirmenu() {
  menu.style.display = 'block';
  document.addEventListener('click', cerrarModalExternamente);
}

function cerrarmenu() {
  menu.style.display = 'none';
  document.removeEventListener('click', cerrarModalExternamente);
}

function cerrarModalExternamente(event) {
  if (!menu.contains(event.target) && event.target !== abrir) {
    cerrarmenu();
  }
}