// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();


// ========== EJERCICIO 10: Días de la semana ==========
console.log("\n--- EJERCICIO 10: Días de la semana ---");
let diaNumero = parseInt(prompt("Ingresa un número del 1 al 7:"));

if (diaNumero === 1) {
    console.log("Lunes");
} else if (diaNumero === 2) {
    console.log("Martes");
} else if (diaNumero === 3) {
    console.log("Miércoles");
} else if (diaNumero === 4) {
    console.log("Jueves");
} else if (diaNumero === 5) {
    console.log("Viernes");
} else if (diaNumero === 6) {
    console.log("Sábado");
} else if (diaNumero === 7) {
    console.log("Domingo");
} else {
    console.log("Error: El número debe estar entre 1 y 7.");
}