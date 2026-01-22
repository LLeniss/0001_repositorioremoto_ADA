// Código compatible con Node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa tu nombre: ', (nombre) => {
  // Validar que solo contenga letras y espacios
  if (nombre.trim() === "") {
    console.log("No ingresaste un nombre válido");
  } else if (/[0-9]/.test(nombre)) {
    console.log("El nombre no puede contener números");
  } else if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(nombre)) {
    console.log("El nombre no puede contener caracteres especiales o puntuación");
  } else {
    console.log("¡Hola, " + nombre + "! Bienvenido/a.");
  }
  
  readline.close();
});