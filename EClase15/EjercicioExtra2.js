/* Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1. Dividir la oración en palabras individuales.
2. Clasificar las palabras en dos categorías:
▪ Cortas (menos de 5 letras)
▪ Largas (5 letras o más)
3. Mostrar ambas listas de palabras clasificadas.
4. La oración es: "JavaScript es un lenguaje poderoso y versátil".*/

let oracion = "JavaScript es un lenguaje poderoso y versátil";

let palabras = oracion.split(" ");
let palabrasCortas = palabras.filter(palabra => palabra.length < 5);
let palabrasLargas = palabras.filter(palabra => palabra.length >= 5);

console.log("Palabras cortas con menos de 5 letras:", palabrasCortas);
console.log("Palabras largas con 5 letras o más:", palabrasLargas);
