// Código compatible con Node.js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa el primer número: ', (entrada1) => {
  readline.question('Ingresa el segundo número: ', (entrada2) => {
    
    // Convertir a números
    let num1 = parseFloat(entrada1);
    let num2 = parseFloat(entrada2);
    
    // Validar que ambos sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Uno o ambos valores ingresados no son números válidos");
    } else {
      // Calcular la suma
      let suma = num1 + num2;
      
      // Mostrar el resultado
      console.log("La suma de " + num1 + " + " + num2 + " = " + suma);
    }
    
    readline.close();
  });
});