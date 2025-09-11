/* Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo) */

let nombres = []; 

for (let i = 0; i < 5; i++) { //el usuario tiene que ingresar 5 nombres, por eso < 5.
    let nombre = prompt(`Ingrese el nombre ${i + 1}:`);
    nombres[i] = nombre; // Almaceno el nombre en la posición correspondiente del array
}

let nombreBuscado = prompt("Ingrese un nombre para buscar 🔍 :"); //Solicito al usuario que ingrese un nombre para buscar

if (nombres.includes(nombreBuscado)) { // Verifico si el nombre ingresado se encuentra en el array
    console.log(`El nombre "${nombreBuscado}" se encuentra en la lista 🥳.`);
} else {
    console.log(`El nombre "${nombreBuscado}" NO se encuentra en la lista.`);
}
