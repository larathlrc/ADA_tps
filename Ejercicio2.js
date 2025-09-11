/* Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese
la correcta. La contraseña correcta es "1234". */

let contraseña;

do {
  contraseña = prompt("Ingrese la contraseña secreta 🕵🏻‍♀️:"); 
} while (contraseña !== "1234"); //el ciclo continua hasta que la contraseña sea "1234"
console.log("¡Contraseña correcta! Bienvenido/a. 🎉"); //si es correcta, se imprime este mensaje.
