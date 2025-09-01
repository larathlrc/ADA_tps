// Clase 8 - Ejercicios resueltos

{ 
/* ===============================================================================
EJERCICIO 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos: 
Utiliza la función prompt() para solicitar el dato al usuario.
Almacena el número ingresado en una variable.
Utiliza un operador aritmético para calcular el doble del número.
==================================================================================*/

const prompt = require("prompt-sync")({ sigint: true });

  console.log('\n Ejercicio 1');

// 1) Pedir un número al usuario
let entrada = prompt("Por favor, ingresa un número: ");

// 2) Convertirlo a número
let numero = Number(entrada);

// 3) Además de convertir la entrada a número, agregué una validación para manejar casos en que el usuario ingrese 
// algo que no sea un número

if (isNaN(numero)) {
    console.log("⚠️ ERROR ⚠️  Solo se aceptan números.");
} else {

    // 4) Calcular el doble
    let doble = numero * 2;

    // 5) Mostrar en consola
    console.log("El doble de tu número es:", doble);
}
}

{ 
/*==============================================================================
EJERCICIO 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
-Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
-Usa parseFloat() para convertir la entrada del usuario a un número.
===============================================================================*/

    console.log('\n Ejercicio 2');

const prompt = require("prompt-sync")({ sigint: true });

// 1) Pedir al usuario que ingrese un número
let entrada = prompt("Por favor, ingresa un número: ");

// 2) Convertir la entrada a número 
let numero = parseFloat(entrada);

// 3) Verificar si el número es positivo, negativo o igual a cero
if (numero > 0) {
    console.log("Positivo");
  } else if (numero < 0) {
    console.log("Negativo");
  } else {
    console.log("Cero");
  }
}

{
/* ===================================================
   EJERCICIO 3: Suma de dos números ingresados por el usuario

   Enunciado:
   Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores aritméticos.
   Escribe un programa que:
     1. Pida al usuario que ingrese dos números.
     2. Sume ambos números.
     3. Muestre el resultado de la suma.

   Requisitos:
     - Utiliza prompt() para recibir los números.
     - Utiliza parseFloat() para convertir las entradas a números.
     - Almacena los resultados en variables adecuadas y muestra el resultado.
=================================================== */

    console.log('\n Ejercicio 3');

const prompt = require("prompt-sync")({ sigint: true });

// 1) Pida al usuario que ingrese dos números.
let entrada1 = prompt("Ingresa el primer número: ");
let entrada2 = prompt("Ingresa el segundo número: ");

// 2) Convertirlos a números
let numero1 = parseFloat(entrada1);
let numero2 = parseFloat(entrada2);

// 3) Sume ambos números.
let suma = numero1 + numero2;

// 4) Muestre el resultado de la suma.
console.log("La suma de los dos números es:", suma);

}

{
/* ===================================================
   EJERCICIO 4: Determinar si un número es par o impar

   Enunciado:
   Este ejercicio te ayudará a practicar operadores aritméticos y condicionales.
   Escribe un programa que:
     1. Solicite al usuario que ingrese un número entero.
     2. Determine si el número es par o impar.
     3. Muestre un mensaje indicando si el número es par o impar.

   Requisitos:
     - Utiliza el operador módulo (%) para comprobar si el número es divisible por 2.
     - Usa una estructura if-else para mostrar el mensaje adecuado.
=================================================== */

const prompt = require("prompt-sync")({ sigint: true });

  console.log('\n Ejercicio 4');

// 1) Solicite al usuario que ingrese un número entero.
let entrada = prompt("Ingresa un número entero: ");

// 2) Convertir la entrada a número
let numero = parseInt(entrada); //use parseInt porque es número entero

// 3) Determine si el número es par o impar.
if (numero % 2 === 0) {
    console.log("El número", numero, "es par.");
} else {
    console.log("El número", numero, "es impar.");
}

}

{
/* ========================================================
EJERCICIO 5: Saludo personalizado
Enunciado:
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
- Utiliza prompt() para recibir el nombre del usuario.
- Muestra un mensaje utilizando concatenación de cadenas.
=================================================== */
const prompt = require("prompt-sync")({ sigint: true });

  console.log('\n Ejercicio 5');

// 1) Solicite al usuario que ingrese su nombre.
let nombre = prompt("¡Hola! Por favor, ingresa tu nombre ")

// 2 Muestre un saludo personalizado usando el nombre ingresado.
let mensaje = "¡Hola, " + nombre +"! ¡Bienvenida a la carpeta de ejercicios del curso de JavaScript! 😊 ";

console.log(mensaje);
}