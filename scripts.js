document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Verificar si el modo oscuro está habilitado en el almacenamiento local
  if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = 'Modo Claro';
  }

  darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      // Guardar la preferencia del usuario en el almacenamiento local
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
          darkModeToggle.textContent = 'Modo Claro';
      } else {
          localStorage.setItem('darkMode', 'disabled');
          darkModeToggle.textContent = 'Modo Oscuro';
      }
  });
});

// Agregar evento de submit al formulario de contacto
document.getElementById('contactForm').addEventListener('submit', showContactAlert);
