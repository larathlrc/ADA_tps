/* Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación. */

const nombreMascota = prompt("Ingresá el nombre de tu mascota:");
const estaVacunada = prompt(
  `¿${nombreMascota} está vacunada? (responde "sí" o "no")`
).toLowerCase();

const verificarVacunacion = (vacunacion) => {
  return vacunacion === "sí"
    ? `${nombreMascota} está vacunada. 🐾`
    : `${nombreMascota} no está vacunada. 🐾 Por favor, dirigite a la opción de "Turnos" para más información.`;
};

if (estaVacunada === "sí" || estaVacunada === "no") {
  console.log(verificarVacunacion(estaVacunada));
} else {
  console.log('Por favor, respondé con "sí" o "no".');
} 
