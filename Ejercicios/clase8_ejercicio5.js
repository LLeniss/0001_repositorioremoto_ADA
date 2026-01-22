// Solicitar el nombre al usuario
let nombre = prompt("Ingresa tu nombre:");

// Validar que solo contenga letras y espacios
if (nombre.trim() === "") {
    console.log("No ingresaste un nombre válido");
} else if (/[0-9]/.test(nombre)) {
    console.log("El nombre no puede contener números");
} else if (/[^a-zA-Z\u00C0-\u017F\s]/.test(nombre)) {
    console.log("El nombre no puede contener caracteres especiales o puntuación");
} else {
    console.log("¡Hola, " + nombre + "! Bienvenido/a.");
}