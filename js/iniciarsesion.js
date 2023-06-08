const usernameInput = document.getElementById("nombreInput");
const passwordInput = document.querySelector(".contra");
const iniciarSesionBtn = document.getElementById("boton2");

let users = [];

// if (window.localStorage.getItem("users")) {
//   users = JSON.parse(window.localStorage.getItem("users"));
// }

if (
  window.localStorage.getItem("users") === null ||
  window.localStorage.getItem("users") === undefined
) {
  users = [];
} else {
  users = JSON.parse(window.localStorage.getItem("users"));
}

function verificarCampos() {
  if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    iniciarSesionBtn.classList.remove("deButton");
    iniciarSesionBtn.classList.add("activarButton");
    iniciarSesionBtn.disabled = false;
  } else {
    iniciarSesionBtn.classList.remove("activarButton");
    iniciarSesionBtn.classList.add("deButton");
    iniciarSesionBtn.disabled = true;
  }
  // iniciarSesionBtn.disabled = false;
  //} else {
  //  iniciarSesionBtn.disabled = true;
}

verificarCampos();
usernameInput.addEventListener("input", () => {
  verificarCampos();
});
passwordInput.addEventListener("input", () => {
  verificarCampos();
});

iniciarSesionBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let actualUser = users.find((user) => {
    return user.username === usernameInput.value;
  });

  if (actualUser === null || actualUser === undefined) {
    alert("Usuario no registrado");
  } else if (actualUser.password !== passwordInput.value) {
    alert("Credenciales inválidas. Inténtalo de nuevo.");
  } else {
    window.localStorage.setItem("loggeduser", actualUser);
    window.localStorage.setItem("loggedUser", JSON.stringify(actualUser));
    window.location.href = "./Pokedex.html";
    window.location.href = "./Usuario.html";
  }
});
