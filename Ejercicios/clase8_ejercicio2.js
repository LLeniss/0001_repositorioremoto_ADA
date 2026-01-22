// Solicitar un número al usuario
let numero = prompt("Ingresa un número:");

// Convertir el texto a número
numero = parseFloat(numero);

// Verificar si es positivo, negativo o cero
if (numero > 0) {
    console.log("El número " + numero + " es positivo");
} else if (numero < 0) {
    console.log("El número " + numero + " es negativo");
} else if (numero === 0) {
    console.log("El número es igual a cero");
} else {
    console.log("Eso no es un número válido");
}