/* Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
Fórmula: (°C * 9/5) + 32 = °F */

let celsius = parseInt(prompt('Ingrese la temperatura en grados Celsius: '));

if (isNaN(celsius)) {
  console.log("Ingresa solo números. Intenta nuevamente.");
} else {
  let convertirCelsiusAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
  };
  
  console.log(`La temperatura de ${celsius}°C es igual a ${convertirCelsiusAFahrenheit(celsius)}°F`);
}
  