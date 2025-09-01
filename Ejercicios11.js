
const prompt = require("prompt-sync")({ sigint: true }); //pongo prompt-sync para poder usar prompt en la terminal

/*==============================
EJERCICIO 1: Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso.
===============================*/

console.log("Ejercicio 1: ¿Positivo, negativo o cero?");

let numero = parseFloat(prompt("Por favor, ingrese un número:")); 
//use parseFloat por si el usuario ingresa un número decimal
if (numero > 0) {
    console.log("El número que ingresaste es positivo.");
} else if (numero < 0) { //Use "else if" porque hay condiciones múltiples
    console.log("El número que ingresaste es negativo."); 
} else {
    console.log("El número que ingresaste es cero.");
}     

/*==============================
EJERCICIO 2: Vamos a programar un semáforo. Escribe un programa que le pida al usuario
ingresar un color del semáforo: rojo, amarilo o verde. Dependiendo del color
ingresado, el programa debe imprimir un mensaje con la acción
corespondiente:
• Rojo: "Alto, no puedes avanzar."
• Amarilo: "Precaución, prepárate para avanzar."
• Verde: "Avanza con seguridad."
Si el usuario ingresa un color inválido, el programa debe mostrar un
mensaje: "Color no reconocido, ingresa rojo, amarilo o verde."
Utiliza un switch para resolver este ejercicio.
===============================*/

console.log("Ejercicio 2: Semáforo inteligente");

let color = prompt("Por favor, ingresa un color del semáforo (rojo, amarillo o verde):");

if (color === "rojo") { //use "===" para comparar valores y tipos de datos
    console.log("Alto, no puedes avanzar."); 
} else if (color === "amarillo") { //use "else if" porque hay condiciones múltiples
    console.log("Precaución, prepárate para avanzar.");
} else if (color === "verde") {
    console.log("Avanza con seguridad.");
} else { //si el color no es ninguno de los anteriores, muestro un mensaje de error
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}

/*==============================
EJERCICIO 3: Crea un programa que le pida al usuario un número positivo. El programa
deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
Usa un ciclo for para realizar la tarea.
===============================*/

console.log("Ejercicio 3: ¿Sabes contar?");

let numPositivo = parseInt(prompt("Por favor, ingresa un número positivo:")); 
//use parseInt porque el usuario debe ingresar un número entero
if (numPositivo > 0) { //valido que el número sea positivo
    for (let i = 1; i <= numPositivo; i++) { //use "let" para declarar la variable del ciclo y "i++" para incrementar de a 1
        console.log(i);
    }
} else { //si el número no es positivo, muestro un mensaje de error
    console.log("El número ingresado no es positivo. Por favor, intenta nuevamente."); 
} 

/*==============================
EJERCICIO 4: Los números pueden ser pares o impares. Escribe un programa que le pida al
usuario un número y determine si es par o impar. Muestra un mensaje
explicativo indicando qué significa cada caso.
===============================*/

console.log("Ejercicio 4: ¿Es par o impar?");

let numeroParImpar = parseInt(prompt("Por favor, ingresa un número:"));
if (isNaN(numeroParImpar)) { //valido que el usuario haya ingresado un número
    console.log("El valor ingresado no es un número. Por favor, intenta nuevamente.");
} else if (numeroParImpar % 2 === 0) { //uso el operador módulo para determinar si el número es par o impar
    console.log("El número que ingresaste es par. Los números pares son aquellos que son divisibles por 2 sin dejar residuo.");
} else {
    console.log("El número que ingresaste es impar. Los números impares son aquellos que no son divisibles por 2 y dejan un residuo de 1.");
}

/*==============================
EJERCICIO 5: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el
programa debe mostrar un mensaje indicando que los valores son inválidos.
===============================*/

console.log("Ejercicio 5: Encuentra los números pares entre dos valores");

let inicio = parseInt(prompt("Por favor, ingresa el número inicial (entero):")); //use parseInt porque el usuario debe ingresar un número entero
let fin = parseInt(prompt("Por favor, ingresa el número final (entero):")); 

if (isNaN(inicio) || isNaN(fin)) { //valido que el usuario haya ingresado números con isNaN
    console.log("Uno o ambos valores ingresados no son números. Por favor, intenta nuevamente.");
} else if (inicio > fin) { //valido que el número inicial no sea mayor que el final
    console.log("Los valores son inválidos. El número inicial no puede ser mayor que el número final.");
} else {
    console.log(`Números pares entre ${inicio} y ${fin}:`);
    for (let i = inicio; i <= fin; i++) { //recorro los números entre inicio y fin
        if (i % 2 === 0) { //verifico si el número es par
            console.log(i);
        }
    }
}

/*==============================
EJERCICIO 6: Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.
===============================*/

console.log("Ejercicio 6: La tabla de multiplicar");

let numeroTabla = parseInt(prompt("Por favor, ingresa un número para ver su tabla de multiplicar:")); 
//use parseInt porque el usuario debe ingresar un número entero
if (isNaN(numeroTabla)) { //valido que el usuario haya ingresado un número
    console.log("El valor ingresado no es un número. Por favor, intenta nuevamente.");
} else {
    console.log(`Tabla de multiplicar del ${numeroTabla}:`);
    for (let i = 1; i <= 10; i++) { //recorro del 1 al 10
        console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`); //muestro el resultado de la multiplicación
    }
}   

/*==============================
EJERCICIO 7: Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.
===============================*/

console.log("Ejercicio 7: Calculadora simple");

let num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let operacion = prompt("Por favor, ingresa qué operación deseas realizar (suma, resta, multiplicación o división):");
operacion = operacion.trim().toLowerCase();
/* probe sin poner este código, pero me daba error si ponía un espacio, así que con operacion.trim()
elimino espacios en blanco y convierto a minúsculas para evitar errores de ingreso*/

if (isNaN(num1) || isNaN(num2)) {
    console.log("Uno o ambos valores que ingresaste no son números. Por favor, intenta nuevamente.");
} else if (operacion === "suma") { //=== para comparar valores y tipos de datos y "else if" porque hay condiciones múltiples
    console.log(`El resultado de la suma es: ${num1 + num2}`); //muestro el resultado de la suma
} else if (operacion === "resta") { 
    console.log(`El resultado de la resta es: ${num1 - num2}`); //muestro el resultado de la resta
} else if (operacion === "multiplicación") {
    console.log(`El resultado de la multiplicación es: ${num1 * num2}`); //muestro el resultado de la multiplicación
} else if (operacion === "división") {
    if (num2 === 0) {
        console.log("Error: No se puede dividir por cero.");
    } else {
        console.log(`El resultado de la división es: ${num1 / num2}`); //muestro el resultado de la división
    }
} else {
    console.log("Operación inválida. Por favor, ingresa suma, resta, multiplicación o división.");
    //si la operación no es ninguna de las anteriores, muestro un mensaje de error
}

/*==============================
EJERCICIO 8: Escribe un programa que le pida al usuario un número entero positivo y
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for
para resolverlo
===============================*/

console.log("Ejercicio 8: Encuentra los múltiplos de un número");

let numeroMultiplo = parseInt(prompt("Por favor, ingresa un número entero positivo:"));
//nuevamente, uso parseInt porque el usuario debe ingresar un número entero

if (isNaN(numeroMultiplo) || numeroMultiplo <= 0) {
    /*valido que el usuario haya ingresado un número positivo y pongo || para evaluar dos condiciones. 
    <= 0 para incluir el 0 y los negativos*/

    console.log("El valor ingresado no es un número entero positivo. Por favor, intenta nuevamente.");
} else { //si el número es válido, procedo a buscar los múltiplos
    console.log(`Múltiplos de ${numeroMultiplo} entre 1 y 100:`); 
    for (let i = 1; i <= 100; i++) { //recorro del 1 al 100
        if (i % numeroMultiplo === 0) { //verifico si el número es múltiplo de numeroMultiplo y muestro el resultado
            console.log(i);
        }
    }
}

/*==============================
EJERCICIO 9: Crea un programa que simule la cuenta regresiva para el lanzamiento de un
cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al
final. Usa un ciclo for para realizar la cuenta regresiva.
===============================*/

console.log("Ejercicio 9: Cuenta regresiva para el despegue");

for (let i = 10; i >= 0; i--) { //inicio en 10, la condición es que i sea mayor o igual a 0 y uso i-- para decrementar de a 1
    console.log(i);
}
console.log("¡Despegue! 🚀"); //muestro el mensaje al final de la cuenta regresiva

/*==============================
EJERCICIO 10: Crea un programa donde la computadora seleccione un número al azar entre 1y 10. 
Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
los intentos restantes. Si no acierta después de los 3 intentos, muestra el
número secreto. Usa un for para resolver este ejercicio.
===============================*/

console.log("Ejercicio 10: Adivina el número");

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
// Math.random genera un número entre 0 y 1, por eso multiplico por 10 y sumo 1
//uso Math.floor para redondear hacia abajo y obtener un número entero entre 1 y 10

let adivinado = false; 

for (let intento = 1; intento <= 3; intento++) { //++intento para incrementar de a 1
    const numeroUsuario = parseInt(prompt(`🔢 Intento ${intento}/3: Ingresa un número entre 1 y 10:`));
//${intento} es para mostrar el número de intento actual
    if (numeroUsuario === numeroSecreto) { 
        console.log("🎉 ¡Felicidades! ¡Adivinaste el número!");
        adivinado = true;
        break; //si adivina, salgo del ciclo
    } 

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) { 
        console.log("❌ Número inválido. Debe ser entre 1 y 10.");
    } else {
        console.log("⚠️ Número incorrecto. Intenta nuevamente.");
    }
}

if (!adivinado) {
    console.log(`💔 Lo siento, no adivinaste. El número secreto era: ${numeroSecreto}`);
}

