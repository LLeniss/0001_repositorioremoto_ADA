// Solicitar el primer número
let num1 = prompt("Ingresa el primer número:");

// Solicitar el segundo número
let num2 = prompt("Ingresa el segundo número:");

// Convertir a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Validar que ambos sean números válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log("Uno o ambos valores ingresados no son números válidos");
} else {
    // Calcular la suma
    let suma = num1 + num2;
    
    // Mostrar el resultado
    console.log("La suma de " + num1 + " + " + num2 + " = " + suma);
}