/* Ejercicio Resuelto en clase (2): Cálculo de descuento por edad
Solicita al usuario su edad y usa una función flecha para aplicar un descuento
dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
✓ 65 anos = 15% de descuento
✓ Menor a 65 = No hay descuento */

let edad = prompt("Ingresá tu edad");
const calcularDescuento = (edad) => {
  if (edad >= 65) {
    return "Tenés un descuento del 15% en tu compra 🥳";
  } else {
    return "No tenés descuento";
  }
};
console.log(calcularDescuento(edad));