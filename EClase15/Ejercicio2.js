/* Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El
último invitado no puede asistir. Elimina al último invitado y muestra quién
fue eliminado y el estado actualizado de la lista. */

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let eliminado = invitados.pop();
console.log(`Invitados que no pueden asistir: ${eliminado}`);
console.log(`Lista de invitados actualizada: ${invitados.join(", ")}`);
