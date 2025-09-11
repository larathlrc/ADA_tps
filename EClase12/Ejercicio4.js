/* Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes
usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas
de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una
utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas. */


let notas = []; 
let cantidadEstudiantes = parseInt(prompt("👩🏻‍🎓👨🏻‍🎓 Ingrese la cantidad de estudiantes:")); // Pido la cantidad de estudiantes

for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}:`)); 
    notas[i] = nota; // Asigno la nota a la posición correspondiente del array
}

console.log("Notas ingresadas:");
for (let i = 0; i < notas.length; i++) { //uso .length para obtener la cantidad de notas
    console.log(`Estudiante ${i + 1}: ${notas[i]}`); // Imprimo la nota de los estudiantes en la consola al lado del estudiante correspondiente
}