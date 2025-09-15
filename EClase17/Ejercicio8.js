/* Ejercicio 6: Numero N
Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado. */

let numero = parseInt(prompt("Ingresá un número límite: "));
let suma = 0;

for (let i = 1; i <= numero; i++) {
  suma += i;
}

console.log(`La suma de los primeros ${numero} números naturales es: ${suma}`); 
