/* Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras. */

let numero = parseInt(prompt("Ingresá un número natural de hasta 2 cifras:"));
let minimoFaltante;

if (numero >= 0 && numero <= 9) {
    minimoFaltante = 10 - numero;
    console.log("Le falta " + minimoFaltante + " para ser un número de 2 cifras.");
} else if (numero >= 10 && numero <= 99) {
    minimoFaltante = 100 - numero;
    console.log("Le falta " + minimoFaltante + " para ser un número de 3 cifras.");
} else {
    console.log("Por favor, ingresá un número válido de hasta 2 cifras.");
}