/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000. */

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4] 
    [5, 5, 5097, 100, 4]
];

let suma = 0; // Variable para almacenar la suma

for (let i = 0; i < matriz.length; i++) { // Recorro las filas de la matriz 
    for (let j = 0; j < matriz[i].length; j++) { // Recorro las columnas de la matriz
        if (matriz[i][j] >= 10 && matriz[i][j] < 1000) { // Verifico si el número está entre 10 y 1000 
            suma += matriz[i][j]; // Si cumple la condición, lo sumo a la variable suma
        }
    }
}

console.log("La suma de los números mayores o iguales a 10 y menores que 1000 es: " + suma);   // Muestro el resultado en consola
