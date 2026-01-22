// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();



// ========== EJERCICIO 8: Tipo de Triángulo ==========
console.log("\n--- EJERCICIO 8: Tipo de Triángulo ---");
let lado1 = parseFloat(prompt("Longitud del lado 1:"));
let lado2 = parseFloat(prompt("Longitud del lado 2:"));
let lado3 = parseFloat(prompt("Longitud del lado 3:"));

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    console.log("Error: Ingresa longitudes válidas.");
} else {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es Equilátero (todos los lados iguales).");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("El triángulo es Isósceles (dos lados iguales).");
    } else {
        console.log("El triángulo es Escaleno (todos los lados diferentes).");
    }
}

