// Código compatible con Node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', (entrada) => {
  // Convertir el texto a número
  let numero = parseFloat(entrada);
  
  // Verificar si es positivo, negativo o cero
  if (numero > 0) {
    console.log("El número " + numero + " es positivo");
  } else if (numero < 0) {
    console.log("El número " + numero + " es negativo");
  } else if (numero === 0) {
    console.log("El número es igual a cero");
  } else {
    console.log("Eso no es un número válido");
  }
  
  readline.close();
});