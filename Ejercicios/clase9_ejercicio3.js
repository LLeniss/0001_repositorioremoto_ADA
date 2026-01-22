let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("\n--- EJERCICIO 3: Operaciones lógicas ---");

let entrada1 = prompt("Ingresa el primer valor booleano (true/false):").toLowerCase();
let entrada2 = prompt("Ingresa el segundo valor booleano (true/false):").toLowerCase();

// Convertir texto a booleano
let condicion1 = entrada1 === "true";
let condicion2 = entrada2 === "true";

console.log("\nResultados:");
console.log("condicion1: " + condicion1);
console.log("condicion2: " + condicion2);
console.log("\nOperaciones lógicas:");
console.log("condicion1 AND condicion2: " + (condicion1 && condicion2));
console.log("condicion1 OR condicion2: " + (condicion1 || condicion2));
console.log("NOT condicion1: " + (!condicion1));
console.log("NOT condicion2: " + (!condicion2));
console.log("condicion1 XOR condicion2: " + (condicion1 !== condicion2));