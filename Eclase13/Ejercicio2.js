/* Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos
números como parámetros y devuelva el número mayor. */

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

let encontrarMayor = function(num1, num2) {
  return (num1 > num2) ? num1 : num2;
};

console.log(`El número mayor entre ${numero1} y ${numero2} es: ${encontrarMayor(numero1, numero2)}`);

