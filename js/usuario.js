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

function redirectToPasswordPage() {
  window.location.href = "Cambiarcontraseña.html";
}

const favoritosboton = document.createElement("input");
favoritosboton.type = "button";
favoritosboton.value = "Todos los Favoritos";
favoritosboton.id = "guardar";

document.getElementById("imagen").appendChild(favoritosboton);

favoritosboton.onclick = function() {
  window.location.href = "Favoritos.html";
};

var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
if (loggedUser) {
  var username = loggedUser.username;
  document.getElementById("H1").textContent = username;
}
if (loggedUser) {
var username = loggedUser.username;
var usernameWithAt = "@" + username;
document.getElementById("P").textContent = usernameWithAt;
}



// var users = JSON.parse(localStorage.getItem("users"));
//if (users && users.length > 0) {
    //var lastUser = users[users.length - 1];
  //var usernameWithAt = "@" + lastUser.username;
//document.getElementById("H1").textContent = usernameWithAt;
  //document.getElementById("P").textContent = usernameWithAt;}
