/* Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
devolverlo. */

const nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

const buscarNombre = nombres.find(nombre => nombre === 'Laura');
console.log(`El nombre buscado es "${buscarNombre}" y se encuentra en la lista.`);