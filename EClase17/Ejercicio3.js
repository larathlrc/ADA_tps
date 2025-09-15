/* • Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos.*/

const convertirDolaresAPesos = (montoDolares, tasaDeCambio) => {
  return montoDolares * tasaDeCambio;
};

const montoDolares = parseFloat(prompt("Ingresá el monto en dólares:"));
const tasaDeCambio = parseFloat(prompt("Ingresá la tasa de cambio a pesos:"));

if (!isNaN(montoDolares) && !isNaN(tasaDeCambio)) {
  const montoPesos = convertirDolaresAPesos(montoDolares, tasaDeCambio);
  console.log(`El monto en pesos es: $${montoPesos.toFixed(2)}`);
} else {
  console.log("Por favor, ingresá valores numéricos válidos.");
}
