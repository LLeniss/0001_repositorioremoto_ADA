// Configuración para ambos ambientes
let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();


// ========== EJERCICIO 9: Área y Perímetro del Círculo ==========
console.log("\n--- EJERCICIO 9: Círculo ---");
const PI = 3.14159;
let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

if (isNaN(radio) || radio <= 0) {
    console.log("Error: Ingresa un radio válido mayor a cero.");
} else {
    let area = PI * (radio * radio);
    let perimetro = 2 * PI * radio;
    console.log("Para un radio de " + radio + ":");
    console.log("- Área: " + area.toFixed(4));
    console.log("- Perímetro: " + perimetro.toFixed(4));
}

