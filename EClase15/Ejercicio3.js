/* Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y
muéstrala. Finalmente, muestra la lista actualizada. */

let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster");
let atendida = mascotas.shift();
console.log(`La mascota ${atendida} debe ingresar primero debido a su urgencia`);
console.log(`Lista de mascotas a ser atendidas, actualizada por orden de llegada/ urgencia: ${mascotas.join(" - ")}`);


