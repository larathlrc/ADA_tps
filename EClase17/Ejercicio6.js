/* • Ejercicio 4: Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array.
Pista: Usa un ciclo */

let numerosPares = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log(`Los números pares del 0 al 100 son: ${numerosPares.join(", ")}`);