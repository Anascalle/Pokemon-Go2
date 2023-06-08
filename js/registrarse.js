const usernameInput = document.getElementById("nombreInput");
const passwordInput = document.querySelector('.contra');
const mailInput = document.querySelector('.mail');
const iniciarSesionBtn = document.getElementById("boton2");
let users = [];

if (window.localStorage.getItem("users") === null || window.localStorage.getItem("users") === undefined) {
  users = [];
} else {
  users = JSON.parse(window.localStorage.getItem("users"));
}

function verificarCampos() {
  if (
    usernameInput.value.trim() === '' ||
    passwordInput.value.trim() === '' ||
    mailInput.value.trim() === ''
  ) {
    iniciarSesionBtn.classList.remove("activarButton");
    iniciarSesionBtn.classList.add("deButton");
    iniciarSesionBtn.disabled = true;
  } else {
    iniciarSesionBtn.classList.remove("deButton");
    iniciarSesionBtn.classList.add("activarButton");
    iniciarSesionBtn.disabled = false;
  }
}

usernameInput.addEventListener("input", () => {
  verificarCampos();
});

mailInput.addEventListener("input", () => {
  verificarCampos();
});

passwordInput.addEventListener("input", () => {
  verificarCampos();
});

iniciarSesionBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (passwordInput.value.length < 8 || !mailInput.value.includes('@')) {
    if (passwordInput.value.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
    } 
    if (!mailInput.value.includes('@')) {
      alert("El correo electrónico debe contener el símbolo '@'");
    }
  } else {
    let user = {
      mail: mailInput.value,
      password: passwordInput.value,
      username: usernameInput.value
    };
    users.push(user);
    let JSONUser = JSON.stringify(users);
    window.localStorage.setItem("users", JSONUser);
    window.location.href = "./iniciarsesion.html";
  }
});

