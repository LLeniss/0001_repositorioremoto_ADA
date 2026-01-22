// Solicitar un número al usuario
let entrada = prompt("Ingresa un número entero:");

// Convertir a número entero
let numero = parseInt(entrada);

// Validar si es un número entero válido
if (isNaN(numero)) {
    console.log("El valor ingresado no es válido");
} else if (entrada.includes('.') || entrada.includes(',')) {
    console.log("El número no es entero. Por favor ingresa un número entero");
} else {
    // Verificar si es par o impar
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par");
    } else {
        console.log("El número " + numero + " es impar");
    }
}
