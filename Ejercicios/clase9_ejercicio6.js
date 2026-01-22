// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

// ========== EJERCICIO 6: Mayor o menor de edad ==========
console.log("\n--- EJERCICIO 6: Edad ---");
let edad = parseInt(prompt("Ingresa tu edad:"));

if (isNaN(edad)) {
    console.log("Error: Ingresa un número válido.");
} else if (edad >= 18) {
    console.log("Eres mayor de edad. ¡Bienvenido!");
} else {
    console.log("Eres menor de edad. Aún te falta para los 18.");
}