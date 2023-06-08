var html = '';

const enviarBoton = document.createElement("input");
enviarBoton.type = "button";
enviarBoton.value = "Enviar";
enviarBoton.className = "Enviar";
enviarBoton.setAttribute("onclick", "comentario()");

document.getElementById("enviarDiv").appendChild(enviarBoton);




  function comentario() {
    var storedUsers = JSON.parse(window.localStorage.getItem("users"));
    var username = document.getElementById("username").value;
    var correo = document.getElementById("correo").value;
    var comentario = document.getElementById("Comentario").value;

    var validUser = false;

    if (storedUsers && Array.isArray(storedUsers)) {
        for (var i = 0; i < storedUsers.length; i++) {
            var user = storedUsers[i];
            if (user.username === username && user.mail === correo) {
                validUser = true;
                break;
            }
        }
    }

    if (!validUser) {
        alert("Por favor ingrese un nombre de usuario y correo electrónico válidos.");
        return;
    }

    if (!comentario) {
        alert("Por favor ingrese un comentario.");
        return;
    }

    alert("Comentario Enviado");

    document.getElementById("Comentario").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("username").value = "";
}
    function redirectToRegistration() {
        window.location.href = "registrarse.html";
      }


const botoniniciarsesion = document.createElement("button");
botoniniciarsesion.id = "iniciarSesion";
botoniniciarsesion.className = "ini";
botoniniciarsesion.textContent = "Iniciar Sesión";

document.querySelector("nav").appendChild(botoniniciarsesion);

botoniniciarsesion.onclick = function() {
    window.location.href = `iniciarsesion.html`;
  }
