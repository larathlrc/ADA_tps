/* Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La
lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1. Agregar un nuevo producto "Impresora" al inventario usando el
método adecuado.
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje
adecuado.
3. Eliminar el primer producto del inventario.
4. Mostrar la lista actualizada de productos en una sola cadena,
separados por comas. */

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

inventario.push("Impresora"); 

if (inventario.includes("Tablet")) {
    console.log("El producto 'Tablet' se encuentra en el inventario ✅.");
} else {
    console.log("El producto 'Tablet' NO se encuentra en el inventario.");
}

inventario.shift();

console.log("Inventario actualizado:");
console.log(inventario.join(", "));

