// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

// ========== EJERCICIO 7: Conversión de KG a Libras ==========
console.log("\n--- EJERCICIO 7: KG a Libras ---");
let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
const FACTOR_CONVERSION = 2.20462;

if (isNaN(pesoKg)) {
    console.log("Error: Ingresa un peso válido.");
} else {
    let pesoLibras = pesoKg * FACTOR_CONVERSION;
    console.log(pesoKg + " kg equivalen a " + pesoLibras.toFixed(2) + " libras.");
}

