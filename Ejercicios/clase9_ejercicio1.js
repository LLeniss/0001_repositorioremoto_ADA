// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("--- EJERCICIO 1: Comparar dos números ---");

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Debes ingresar números válidos");
} else if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    console.log(numero2 + " es mayor que " + numero1);
} else {
    console.log("Los números son iguales");
}