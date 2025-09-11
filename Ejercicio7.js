/* Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivos. Luego, escribe un algoritmo para sumar todos
los números en la matriz. */

let matriz = [
  [6,16,100,23,45],
  [12,34,56,78,90],
  [11,22,33,44,55],
  [9,8,7,6,5],
  [1,2,3,4,5]
];

let suma = 0; // Variable para almacenar la suma

for (let i = 0; i < matriz.length; i++) { // Recorro las filas de la matriz
    for (let j = 0; j < matriz[i].length; j++) { // Recorro las columnas de la matriz
        suma += matriz[i][j]; // Sumo el valor actual a la suma
    }
}

console.log("La suma de todos los números en la matriz es: " + suma); 

