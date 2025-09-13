/* Ejercicio 9: Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y
use un bucle para imprimir todos los números desde 1 hasta ese número. */

let numero = parseInt(prompt("Ingrese un número:"));
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

if (!isNaN(numero)) {
    contarHasta(numero);
} else {
    console.log("Por favor, ingresa un número válido.");
}
