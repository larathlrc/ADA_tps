/* Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número
y devuelva su factorial.
Fórmula del factorial: n! = n * (n - 1) * (n - 2) * ... * 1 */

let calcularFactorial = function(n) {

  if (typeof n !== "number" || isNaN(n)) {  
    throw new Error("Ingresa solo números válidos.");
  }

  if (n < 0) {
    throw new Error("El factorial no está definido para números negativos.");
  }

  if (n === 0) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
};

let numero = parseInt(prompt("Ingrese un número:"));

try {
  console.log(`El factorial de ${numero} es: ${calcularFactorial(numero)}`);
} catch (error) {
  console.error(error.message);
}
