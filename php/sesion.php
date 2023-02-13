<?php
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username == 'admin' && $password == 'password') {
    header('Location: welcome.html');
    exit;
  } else {
    echo '<p style="color: red;">Error: nombre de usuario o contraseña incorrectos.</p>';
  }
?>
