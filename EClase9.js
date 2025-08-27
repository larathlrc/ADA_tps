// ACTIVIDAD CLASE 9 📒📘🖋️
const prompt = require("prompt-sync")({ sigint: true });

/* =======================================================
   EJERCICIO 1
   ======================================================= */
console.log('\n ---- EJERCICIO 1 ---- \n');
let numero1 = parseFloat(prompt('Ingrese el primer número: '));
let numero2 = parseFloat(prompt('Ingrese el segundo número: '));

if (numero1 > numero2) {
  console.log(`El primer número ${numero1} es mayor que el segundo ${numero2}`);
} else if (numero2 > numero1) {
  console.log(`El segundo número ${numero2} es mayor que el primero ${numero1}`);
} else {
  console.log(`Ambos números son iguales: ${numero1}`);
}

/* =======================================================
   EJERCICIO 2
   ======================================================= */
console.log('\n ---- EJERCICIO 2 ---- \n');
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;
let numRango = parseFloat(prompt('Ingrese un número: '));

if (numRango >= RANGO_MINIMO && numRango <= RANGO_MAXIMO) {
  console.log(`✅ El número ${numRango} está dentro del rango [${RANGO_MINIMO}, ${RANGO_MAXIMO}]`);
} else {
  console.log(`❌ El número ${numRango} NO está dentro del rango [${RANGO_MINIMO}, ${RANGO_MAXIMO}]`);
}

/* =======================================================
   EJERCICIO 3
   ======================================================= */
console.log('\n ---- EJERCICIO 3 ---- \n');
let condicion1 = prompt('Ingrese el valor de condicion1 (true/false): ').toLowerCase() === "true";
let condicion2 = prompt('Ingrese el valor de condicion2 (true/false): ').toLowerCase() === "true";

console.log(`condicion1 = ${condicion1}, condicion2 = ${condicion2}`);
console.log(`AND (&&): ${condicion1 && condicion2}`);
console.log(`OR  (||): ${condicion1 || condicion2}`);
console.log(`XOR (!==): ${condicion1 !== condicion2}`);
console.log(`NOT condicion1: ${!condicion1}`);
console.log(`NOT condicion2: ${!condicion2}`);

/* =======================================================
   EJERCICIO 4
   ======================================================= */
console.log('\n ---- EJERCICIO 4 ---- \n');

// Nombre válido registrado (puede ser cualquier nombre de prueba)
const NOMBRE_REGISTRADO = "Ana"; 
let nombreIngresado = prompt('Ingrese su nombre: ');

if (nombreIngresado.toLowerCase() === NOMBRE_REGISTRADO.toLowerCase()) {
  console.log(`✅ El nombre ingresado (${nombreIngresado}) está registrado`);
} else {
  console.log(`❌ El nombre ingresado (${nombreIngresado}) NO está registrado`);
}

/* =======================================================
   EJERCICIO 5
   ======================================================= */
console.log('\n ---- EJERCICIO 5 ---- \n');
let n1 = parseFloat(prompt('Ingrese el primer número: '));
let n2 = parseFloat(prompt('Ingrese el segundo número: '));
let n3 = parseFloat(prompt('Ingrese el tercer número: '));

let mayor = Math.max(n1, n2, n3);
console.log(`El mayor de los tres números (${n1}, ${n2}, ${n3}) es: ${mayor}`);

/* =======================================================
   EJERCICIO 6
   ======================================================= */
console.log('\n ---- EJERCICIO 6 ---- \n');
let edad = parseInt(prompt('Ingrese su edad: '));

if (edad >= 18) {
  console.log(`✅ sos mayor de edad`);
} else {
  console.log(`❌ sos menor de edad`);
}

/* =======================================================
   EJERCICIO 7
   ======================================================= */
console.log('\n ---- EJERCICIO 7 ---- \n');
let kg = parseFloat(prompt('Ingrese su peso en kilogramos: '));
const LIBRAS = kg * 2.20462;
console.log(`${kg} kg equivalen a ${LIBRAS.toFixed(2)} lb`);

/* =======================================================
   EJERCICIO 8
   ======================================================= */
console.log('\n ---- EJERCICIO 8 ---- \n');
let lado1 = parseFloat(prompt('Ingrese el lado 1 del triángulo: '));
let lado2 = parseFloat(prompt('Ingrese el lado 2 del triángulo: '));
let lado3 = parseFloat(prompt('Ingrese el lado 3 del triángulo: '));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log('El triángulo es Equilátero (3 lados iguales)');
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('El triángulo es Isósceles (2 lados iguales)');
  } else {
    console.log('El triángulo es Escaleno (3 lados diferentes)');
  }
} else {
  console.log('❌ Los lados no forman un triángulo válido');
}

/* =======================================================
   EJERCICIO 9
   ======================================================= */
console.log('\n ---- EJERCICIO 9 ---- \n');
const PI = 3.14159;
let radio = parseFloat(prompt('Ingrese el radio del círculo: '));

let area = PI * Math.pow(radio, 2);
let perimetro = 2 * PI * radio;
console.log(`Radio = ${radio} | Área = ${area.toFixed(2)} | Perímetro = ${perimetro.toFixed(2)}`);

/* =======================================================
   EJERCICIO 10
   ======================================================= */
console.log('\n ---- EJERCICIO 10 ---- \n');
let dia = parseInt(prompt('Ingrese un número del 1 al 7: '));

switch (dia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  case 4: console.log("Jueves"); break;
  case 5: console.log("Viernes"); break;
  case 6: console.log("Sábado"); break;
  case 7: console.log("Domingo"); break;
  default: console.log("❌ Error: el número debe estar entre 1 y 7");
}
