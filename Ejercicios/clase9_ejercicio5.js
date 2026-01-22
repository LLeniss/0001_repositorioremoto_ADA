let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("\n--- EJERCICIO 5: Mayor de tres números ---");

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Error: Debes ingresar tres números válidos");
} else {
    let mayor;
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    
    console.log("El número mayor es: " + mayor);
}