// Define la dirección de la página a la que deseas redirigir
const pageToRedirect = '.page/guardia.html';

// Selecciona el botón
const redirectButton = document.querySelector('#redirect-button');

// Agrega un evento de clic al botón
redirectButton.addEventListener('click', function() {
  // Redirige a la página especificada
  window.location.href = pageToRedirect;
});

/*const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();
  
  const username = formLogin.elements.username.value;
  const password = formLogin.elements.password.value;
  
  console.log('username:', username);
  console.log('password:', password);
  
  // Aquí deberías enviar la información a través de una petición HTTP (por ejemplo, con AJAX) para validar el usuario y la contraseña.
  
  // Si la validación es exitosa, puedes redirigir al usuario a otra página.
  window.location.href = './page/guardia.html';
});*/
