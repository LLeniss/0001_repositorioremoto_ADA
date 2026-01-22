// Código compatible con Node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', (numero) => {
  let doble = Number(numero) * 2;
  console.log("El doble de " + numero + " es: " + doble);
  readline.close();
});