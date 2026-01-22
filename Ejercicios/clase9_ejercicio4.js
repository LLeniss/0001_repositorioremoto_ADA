let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("\n--- EJERCICIO 4: Verificar nombre ---");

// Tu nombre (puedes cambiarlo)
const MI_NOMBRE = "Carlos";

let nombre = prompt("Ingresa tu nombre:");

if (nombre.trim() === "") {
    console.log("Error: No ingresaste ningún nombre");
} else if (nombre === MI_NOMBRE) {
    console.log("¡Tu nombre es igual al mío! Ambos nos llamamos " + MI_NOMBRE);
} else {
    console.log("Tu nombre (" + nombre + ") es diferente al mío (" + MI_NOMBRE + ")");
}