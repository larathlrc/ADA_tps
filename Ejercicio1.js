/* Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente
hasta que el usuario ingrese un número negativo. Luego, imprime la suma
de todos los números ingresados. */

let numero = 0; //inicializo la variable numero en 0 para que entre al while
let suma = 0; //La variable suma en 0 para acumular la suma de los numeros ingresados

while (numero >= 0) { //mientras el numero sea mayor o igual a 0, el ciclo continua
  numero = parseFloat(prompt("Ingresa un número. Si queres terminar, ingresa un numero negativo:")); 
  if (numero >= 0) { //si el numero es mayor o igual a 0, se suma a la variable suma
    suma += numero; 
  }
}

console.log("La suma de todos los números que ingresaste es: " + suma); 


