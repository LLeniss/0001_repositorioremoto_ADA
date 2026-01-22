let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("\n--- EJERCICIO 2: Verificar rango ---");

// Constantes del rango
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

let numero = parseFloat(prompt("Ingresa un número:"));

if (isNaN(numero)) {
    console.log("Error: Debes ingresar un número válido");
} else if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número " + numero + " está dentro del rango [" + RANGO_MINIMO + ", " + RANGO_MAXIMO + "]");
} else {
    console.log("El número " + numero + " está FUERA del rango [" + RANGO_MINIMO + ", " + RANGO_MAXIMO + "]");
}