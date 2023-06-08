const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  // Validar campos
  if (currentPassword !== 'Amolospokemones') {
    alert('La contraseña actual es incorrecta');
    return;
  }
  if (newPassword === '' || confirmPassword === '') {
    alert('Todos los campos son requeridos');
    return;
  }
  if (newPassword !== confirmPassword) {
    alert('La nueva contraseña y la confirmación no coinciden');
    return;
  }
  if (currentPassword === newPassword) {
    alert('La contraseña actual y la nueva contraseña deben ser diferentes');
    return;
  }
  
  // Mostrar mensaje de éxito
  alert('La contraseña ha sido cambiada con éxito');
  
  // Limpiar campos
  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';
});
