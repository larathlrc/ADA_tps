/* Objetivo
Desarrollar un sistema de gestión para una biblioteca que permita
administrar libros y usuarios, aplicando los conceptos fundamentales de
JavaScript vistos en el módulo.
Requerimientos

**** 1. ESTRUCTURA DE DATOS ****

a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano). */

//Uso const porque la referencia del array "libros" no va a cambiar, pero su contenido sí.
const libros = [
    {id: 1, titulo: "A Little Life", autor: "Hanya Yanagihara", anio: 2015, genero: "Drama", disponible: true},
    {id: 2, titulo: "The Final Empire", autor: "Brandon Sanderson", anio: 2006, genero: "Ficción", disponible: true},
    {id: 3, titulo: "Just Kids", autor: "Patti Smith", anio: 2010, genero: "Biografía", disponible: false},
    {id: 4, titulo: "Normal People", autor: "Sally Rooney", anio: 2018, genero: "Romance", disponible: true},
    {id: 5, titulo: "The Bell Jar", autor: "Sylvia Plath", anio: 1963, genero: "Drama", disponible: true},
    {id: 6, titulo: "A Room with a View", autor: "Virginia Woolf", anio: 1929, genero: "Ensayo", disponible: false},
    {id: 7, titulo: "The Year of Magical Thinking", autor: "Joan Didion", anio: 2005, genero: "Memorias", disponible: true},
    {id: 8, titulo: "The Handmaid's Tale", autor: "Margaret Atwood", anio: 1985, genero: "Ciencia Ficción", disponible: true},
    {id: 9, titulo: "Lonely Castle In The Mirror", autor: "Mizuki Tsujimura", anio: 2017, genero: "Ficción", disponible: false},
    {id: 10, titulo: "A Short History of Nearly Everything", autor: "Bill Bryson", anio: 2003, genero: "Divulgación Científica", disponible: true},
];

// Muestro en consola todo el array de libros para verificar que esté bien cargado. Uso dos console.log para que se vea mejor en la consola
console.log("Lista de libros:");
console.log(libros); 


/* b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros). */

// Este array mantiene a todos los usuarios de la biblioteca, cada uno con su ID, nombre, correo y los libros que tiene prestados.
// Uso 'const' porque no vamos a reemplazarlo con otro,
// aunque sí podremos actualizar los datos de los usuarios, como agregarles un nuevo libro prestado.
const usuarios = [ 
    {id: 1, nombre: "Lara Theyler", email: "laraTheyler@hotmail.com", librosPrestados: [1, 2]},
    {id: 2, nombre: "Sebastian White", email: "sebastianWhite@gmail.com", librosPrestados: [10]},
    {id: 3, nombre: "Gabriela Cico", email: "gabrielaCico@yahoo.com", librosPrestados: [4, 5]},
    {id: 4, nombre: "Lucia Lopez", email: "luciaLopez@hotmail.com", librosPrestados: [2]},
    {id: 5, nombre: "Brian Lopez", email: "brianLopez@gmail.com", librosPrestados: [6, 8]},
];

// Mostro en consola todo el array de usuarios para verificar que esté bien cargado. Uso dos console.log para que se vea mejor en la consola
console.log("Lista de usuarios:");
console.log(usuarios); 

/*

**** 2. FUNCIONES DE GESTIÓN DE LIBROS ****

a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros. */

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero, disponible: true };
    // pongo push porque quiero agregar un elemento al final del array
    libros.push(nuevoLibro); 
}
 //Pruebo la función agregando un libro nuevo
agregarLibro(11, "Little Women", "Louisa May Alcott", 1868, "Novela");
console.log("Lista de libros actualizada después de agregar un nuevo libro:");
// Verificamos que el libro se haya agregado correctamente
console.log(`Libros: ${libros.map(libro => `${libro.titulo} (${libro.anio}) - ${libro.genero} - ${libro.autor} - ID: ${libro.id}`).join("\n")}`); 

/* b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal. */

// criterio puede ser "titulo", "autor" o "genero" y valor refiere a la palabra que se busque
function buscarLibro(criterio, valor) { 
    const resultados = []; 

    // Validamos que el criterio sea válido
    const criteriosValidos = ["titulo", "autor", "genero"]; 
    // Si el criterio no está en el array de criterios válidos, es inválido y muestro el mensaje de abajo
    if (!criteriosValidos.includes(criterio)) { 
        console.log("Criterio inválido ❌. Usa 'titulo', 'autor' o 'genero'."); 
        return resultados;
    }

    // Búsqueda lineal
    for (let i = 0; i < libros.length; i++) {
        if (libros[i][criterio].toString().toLowerCase().includes(valor.toString().toLowerCase())) {
            resultados.push(libros[i]);
        }
    }

    return resultados;
}

// Pruebo la función buscando libros por título, autor y género
console.log("Resultados de la búsqueda:");
console.log("Buscando por título 'the':");
console.log(buscarLibro("titulo", "the")); // Debería encontrar varios libros con "the" en el título
console.log("Buscando por autor 'rooney':");
console.log(buscarLibro("autor", "rooney")); // Debería encontrar "Normal People" de Sally Rooney
console.log("Buscando por género 'ficción':");
console.log(buscarLibro("genero", "ficción")); // Debería encontrar varios libros de género "Ficción"
console.log("Buscando por editorial 'penguin':");
console.log(buscarLibro("editorial", "penguin")); // Criterio inválido. No debería encontrar nada (solo el mensaje de error)


/* c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola. */

function ordenarLibros(criterio) { // criterio puede ser "titulo" o "anio"
    // Validamos que el criterio sea válido
    const criteriosValidos = ["titulo", "anio"];
    if (!criteriosValidos.includes(criterio)) { //Si el criterio no está en el array de criterios válidos, es inválido
        console.log("Criterio inválido ❌. Usa 'titulo' o 'anio'."); //Mensaje de error
        return;
    }
//BUBBLE SORT
    for (let i = 0; i < libros.length - 1; i++) { // Recorro todo el array menos el último elemento porque está en su lugar
        for (let j = 0; j < libros.length - 1 - i; j++) { // Recorro todo el array menos los últimos i elementos que ya están ordenados
            if (criterio === "titulo") { // criterio "titulo"
                if (libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) { // Comparo los títulos en minúscula para que no importe si están en mayúscula o minúscula
                    // Intercambio los libros si están en el orden incorrecto
                    [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
                }
            } else { // criterio "anio"
                if (libros[j].anio > libros[j + 1].anio) { // Comparo los años
                    // Intercambio los libros si están en el orden incorrecto
                    [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]]; 
                }
            }
        }
    }

    console.log("Libros ordenados por " + criterio + ":"); // Muestro los libros ordenados
    libros.forEach(libro => { // Recorro el array de libros y muestro el título y el año si el criterio es "anio"
        if (criterio === "titulo") { 
            console.log(libro.titulo); 
        } else { 
            console.log(`${libro.titulo} (${libro.anio})`); // Muestro el título y el año
        }
    });
}

ordenarLibros("anio");   // ordena de menor a mayor año con el año mostrado
console.log(""); // Espacio para que se vea mejor en la consola
console.log(`Ingresaste "editorial":`);
ordenarLibros("editorial"); // Criterio inválido. No debería ordenar ni mostrar nada (solo el mensaje de error)


/* d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro. */

function borrarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id); // Busco el índice del libro con el id dado
    if (indice !== -1) { // Si el libro existe (índice diferente de -1)
        const libroBorrado = libros[indice]; // Guardo el libro que voy a borrar para mostrarlo después
        // Uso pop() para eliminar el libro que está en el índice encontrado
        for (let i = indice; i < libros.length - 1; i++) { // Recorro desde el índice hasta el penúltimo elemento
            libros[i] = libros[i + 1]; // Muevo cada elemento una posición hacia atrás
        }
        libros.pop(); // Elimino el último elemento que ahora está duplicado
        console.log(`El libro con ID "${libroBorrado.id}" y título: "${libroBorrado.titulo}" ha sido borrado.`); // Muestro el libro borrado
    } else {
        console.log(`No se encontró ningún libro con ID "${id}" Intenta con otro ID.`); // Mensaje si no se encuentra el libro
    }
}

borrarLibro(8); // Pruebo la función borrando el libro con id 8
console.log("Lista de libros actualizada después de borrar un libro:");
console.log(`Libros: \n ${libros.map(libro => `${libro.titulo} (${libro.anio}) - ${libro.genero} - ${libro.autor} - ID: ${libro.id}`).join("\n")}`); // Verificamos que el libro se haya borrado correctamente
borrarLibro(98); // Pruebo la función borrando un libro que no existe (id 98) para ver el mensaje de error

/*

**** 3. GESTIÓN DE USUARIOS ****

a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios. */ 

function registrarUsuario(nombre, email) { // Nombre y email del usuario que se va a registrar
    // El id es el largo del array +1 porque así no se repite y librosPrestados es un array vacío porque el usuario no tiene libros prestados al registrarse
    const usuarioNuevo = { id: usuarios.length + 1, nombre, email, librosPrestados: [] }; 
    usuarios.push(usuarioNuevo); // Uso push para agregar el nuevo usuario al final del array de usuarios. 
    console.log(`Usuario ${nombre} (${email}) registrado con éxito.`); // Mensaje de confirmación 
}

registrarUsuario("Brad Pitt", "brad.pitt@gmail.com"); // Pruebo la función registrando un nuevo usuario
console.log("Lista de usuarios actualizada después de registrar un nuevo usuario:");
// Verificamos que el usuario se haya registrado correctamente. pongo \n para que se vea mejor en la consola (cada usuario en una línea)
console.log(`Lista de usuarios: \n ${usuarios.map(usuario => `${usuario.nombre} (${usuario.email}) - Libros prestados: ${usuario.librosPrestados.join(", ")}`).join("\n")}`); 

/* b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios */

//Esta función nos da la lista completa de todos los usuarios. Cuando la llamamos, devuelve el array "usuarios".
function mostrarTodosLosUsuarios() {
    return usuarios;
}
// Probamos la función para verificar que muestra la lista completa.
console.log("Lista completa de usuarios:");
console.log(mostrarTodosLosUsuarios());

/* c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email. */

function buscarUsuario(email) {
    const usuario = usuarios.find(usuario => usuario.email === email); // Busco el usuario por email. Pongo "===" para que sea exacto
    if (usuario) { // Si se encuentra el usuario...
        return usuario; // Devuelvo el usuario encontrado
    } else { // Si no se encuentra el usuario...
        return null; // Devuelvo null
    }
}
console.log("Buscando usuario por email 'brad.pitt@gmail.com':");
console.log(buscarUsuario("brad.pitt@gmail.com")); // Pruebo la función buscando un usuario por email
console.log("Buscando usuario por email 'no_existe@gmail.com':"); // Pruebo la función buscando un usuario que no existe
console.log(buscarUsuario("no_existe@gmail.com")); // Devuelve null porque el usuario no existe


/* d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado. */

// "borrarUsuario" busca y elimina un usuario del array.
// Usa el nombre y el email para encontrar al usuario correcto y lo elimina de la lista.
function borrarUsuario(nombre, email) {
    // Buscamos la posición del usuario en el array usando "findIndex".
    const indice = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);

    // Si "findIndex" no encuentra el usuario, devuelve -1.
    if (indice !== -1) {
        // Guardamos el usuario antes de borrarlo para poder mostrar un mensaje de confirmación.
        const usuarioBorrado = usuarios[indice];

        // Use "splice()" para eliminar el usuario del array en la posición encontrada.
        // El 1 quiere decir que solo queremos borrar un elemento.
        usuarios.splice(indice, 1);

        console.log(`✅ El usuario "${usuarioBorrado.nombre}" ha sido eliminado del sistema.`);
    } else {
        // Si el usuario no existe, mostramos un mensaje de error.
        console.log(`❌ No se encontró ningún usuario con nombre "${nombre}" y email "${email}".`);
    }
}

// Probamos la función borrando un usuario.
borrarUsuario("Brad Pitt", "brad.pitt@gmail.com");

// Verificamos el resultado.
console.log("---");
console.log("Lista de usuarios actualizada después de borrar un usuario:");
console.log(`Usuarios: \n ${usuarios.map(usuario => `${usuario.nombre} - ID: ${usuario.id}`).join("\n")}`);
/*

**** 4. SISTEMA DE PRÉSTAMOS ****

a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario. */

function prestarLibro(idLibro, idUsuario) { // Empiezo por definir la función con los parámetros idLibro e idUsuario
    const libro = libros.find(libro => libro.id === idLibro); // Busco el libro por id 
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); // Busco al usuario por id

    if (!libro) { // Si no se encuentra el libro...
        console.log(`📚 No se encontró ningún libro con ID correspondiente a "${idLibro}". Intenta con otro ID.`); // Mensaje de error
        return; // Salgo de la función
    }

    if (!usuario) { // Si no se encuentra el usuario...
        console.log(`👤 No se encontró ningún usuario con ID correspondiente a "${idUsuario}". Intenta con otro ID.`); // Mensaje de error
        return; // Salgo de la función
    }

    if (!libro.disponible) { // Si el libro no está disponible...
        console.log(`El libro "${libro.titulo}" no está disponible para préstamo. Intentalo en unos días.`); // Mensaje de error
        return; // Salgo de la función
    }

    // Si el libro está disponible y el usuario existe...
    libro.disponible = false; // Marco el libro como no disponible
    usuario.librosPrestados.push(libro.id); // Agrego el id del libro a la lista de libros prestados del usuario. Ingreso el id del libro, no el título, para evitar problemas si hay libros con el mismo título
    console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}.`); // Mensaje de confirmación con el título del libro y el nombre del usuario
}

prestarLibro(5, 1); // Pruebo la función prestando el libro con id 5 al usuario con id 1
console.log("Lista de libros actualizada después de prestar un libro:");
console.log(`Libros: \n ${libros.map(libro => `${libro.titulo} - Disponible: ${libro.disponible}`).join("\n")}`); // Verificamos que el libro se haya prestado correctamente mostrando su disponibilidad
console.log("Lista de usuarios actualizada después de prestar un libro:");
console.log(`Usuarios: \n ${usuarios.map(usuario => `${usuario.nombre} - Libros prestados: ${usuario.librosPrestados.join(", ")}`).join("\n")}`); // Verificamos que el libro se haya agregado a la lista de libros prestados del usuario
prestarLibro(5, 2); // Pruebo la función prestando el mismo libro (id 5) al usuario con id 2 para ver el mensaje de error
prestarLibro(30, 1); // Pruebo la función prestando un libro que no existe (id 30) para ver el mensaje de error
prestarLibro(2, 20); // Pruebo la función prestando un libro al usuario que no existe (id 20) para ver el mensaje de error


/* b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario. */

function devolverLibro(idLibro, idUsuario) { // Empiezo por definir la función con los parámetros idLibro e idUsuario
    const libro = libros.find(libro => libro.id === idLibro); // Busco el libro por id. Uso find porque quiero el objeto completo
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); // Busco al usuario por id

    if (!libro) { // Si no se encuentra el libro...
        console.log(`📚 No se encontró ningún libro con ID correspondiente a "${idLibro}". Intenta con otro ID.`); // Mensaje de error
        return; // Salgo de la función
    }

    if (!usuario) { // Si no se encuentra el usuario...
        console.log(`👤 No se encontró ningún usuario con ID correspondiente a "${idUsuario}". Intenta con otro ID.`); // Mensaje de error
        return; // Salgo de la función
    }

    if (libro.disponible) { // Si el libro ya está disponible...
        console.log(`El libro "${libro.titulo}" está disponible en la biblioteca.`); // Mensaje de error
        return; // Salgo de la función
    }

    const indiceLibroEnUsuario = usuario.librosPrestados.indexOf(libro.id); // Busco la posición del ID del libro en el array de libros prestados del usuario
    if (indiceLibroEnUsuario === -1) { // Si el libro no está en la lista de libros prestados del usuario...
        console.log(`El usuario ${usuario.nombre} no tomó el libro "${libro.titulo}" prestado.`); // Mensaje de error
        return; // Salgo de la función
    }

    // Si se devuelve el libro y el usuario existe...
    libro.disponible = true; // Marco el libro como disponible
    usuario.librosPrestados.splice(indiceLibroEnUsuario, 1); // Elimino el id del libro de la lista de libros prestados del usuario
    console.log(`El libro "${libro.titulo}" ha sido devuelto por ${usuario.nombre}.`); // Mensaje de confirmación con el título del libro y el nombre del usuario
}

devolverLibro(5, 1); // Pruebo la función devolviendo el libro con id 5 del usuario con id 1
console.log("Lista de libros actualizada después de que se haya devuelto un libro:");
console.log(`Libros: \n ${libros.map(libro => `${libro.titulo} - Disponible: ${libro.disponible}`).join("\n")}`); // Verificamos que el libro se haya devuelto correctamente y esté disponible
console.log("Lista de usuarios actualizada después de que se haya devuelto un libro:");
console.log(`Usuarios: \n ${usuarios.map(usuario => `${usuario.nombre} - Libros prestados: ${usuario.librosPrestados.join(", ")}`).join("\n")}`); // Verificamos que el libro se haya eliminado de la lista de libros prestados del usuario


/*
**** 5. REPORTES ****

a) Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo. */

function generarReporteLibros() { // Nombro la función generarReporteLibros
    // Total de libros
    const totalLibros = libros.length;

    // Cantidad de libros prestados
    const librosPrestados = libros.filter(libro => !libro.disponible).length;

    // Cantidad de libros por género
    const librosPorGenero = libros.reduce((acc, libro) => { // Uso reduce para contar la cantidad de libros por género
        acc[libro.genero] = (acc[libro.genero] || 0) + 1; // Si el género ya existe en el acumulador, le sumo 1, si no, lo inicializo en 0 y le sumo 1
        return acc; // Acá se devuelve el acumulador actualizado
    }, {}); // El objeto está vacio porque al principio no hay géneros contados

    // Libro más antiguo
    const libroMasAntiguo = libros.reduce((antiguo, libro) => // Uso reduce para encontrar el libro más antiguo
        libro.anio < antiguo.anio ? libro : antiguo // Uso el operador ternario para comparar los años y devolver el libro más antiguo
    , libros[0]); // Empiezo con el primer libro del array

    // Libro más nuevo
    const libroMasNuevo = libros.reduce((nuevo, libro) => // Uso reduce para encontrar el libro más nuevo
        libro.anio > nuevo.anio ? libro : nuevo // Uso el operador ternario para comparar los años y devolver el libro más nuevo
    , libros[0]); // Empiezo con el primer libro del array

    // Resumen completo
    return { // Devuelvo un objeto con toda la información del reporte
        totalLibros,
        librosPrestados,
        librosPorGenero,
        libroMasAntiguo: { titulo: libroMasAntiguo.titulo, anio: libroMasAntiguo.anio }, // Devuelvo solo el título y el año del libro más antiguo
        libroMasNuevo: { titulo: libroMasNuevo.titulo, anio: libroMasNuevo.anio } // Devuelvo solo el título y el año del libro más nuevo
    };
}

console.log("Reporte de biblioteca:"); // Muestro el mensaje antes del reporte para que se vea mejor en la consola
console.log(generarReporteLibros()); // Pruebo la función 

/*

**** 6. IDENTIFICACIÓN AVANZADA DE LIBROS ****

a) Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres). */

function librosConPalabrasEnTitulo() { // Nombro la función librosConPalabrasEnTitulo
    const resultado = []; // Creo un array vacío para guardar los libros que cumplen la condición

    for (let i = 0; i < libros.length; i++) { // Recorro todos los libros
        const libro = libros[i];
        const palabras = libro.titulo.split(" "); // Divido el título en palabras

        if (palabras.length > 1) { // Si hay más de una palabra
            let soloLetras = true; // Asumo que todas las palabras tienen solo letras
            for (let j = 0; j < palabras.length; j++) { // Recorro cada palabra
                const palabra = palabras[j];
                // Verifico que la palabra contenga solo letras usando un bucle
                for (let k = 0; k < palabra.length; k++) { // Recorro cada carácter de la palabra
                    const char = palabra[k]; 
                    if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) { // Si el carácter no es una letra...
                        soloLetras = false; // Marco que la palabra no tiene solo letras
                        break; // Salgo del bucle de caracteres
                    }
                }
                if (!soloLetras) break; // Si ya encontré una palabra que no tiene solo letras, salgo del bucle 
            }

            if (soloLetras) {
                resultado.push(libro); // Si todas las palabras tienen solo letras, agrego el libro al resultado
            }
        }
    }

    return resultado; // Devuelvo el array con los libros encontrados
}

/* b) La función debe devolver un array con los títulos de esos libros y
mostrarlo en la consola. */

function obtenerLibrosConPalabrasEnTitulo() { // Nombro la función obtenerLibrosConPalabrasEnTitulo
    const librosFiltrados = librosConPalabrasEnTitulo(); // Llamo a la función anterior para obtener los libros que cumplen la condición de tener más de una palabra en el título
    return librosFiltrados.map(libro => libro.titulo); // Devuelvo un array con los títulos de esos libros usando map (solo los títulos)
}

console.log("Títulos de libros con más de una palabra en el título:"); // Muestro el mensaje antes de la lista para que se vea mejor en la consola
console.log(obtenerLibrosConPalabrasEnTitulo().join("\n")); // Pruebo la funcion y separo los títulos con un salto de línea para que se vea mejor en la consola


/*
**** 7. CÁLCULOS ESTADÍSTICOS ****

a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.*/

function calcularEstadisticas() { // Nombro la función calcularEstadisticas
    // Promedio de años de publicación
    const totalAnios = libros.reduce((acc, libro) => acc + libro.anio, 0); // Sumo todos los años de publicación usando reduce
    const promedioAnios = totalAnios / libros.length; // Divido la suma total por la cantidad de libros para obtener el promedio

    // Año de publicación más frecuente
    const frecuenciaAnios = {}; // Creo un objeto vacío para contar la frecuencia de cada año
    libros.forEach(libro => { // Recorro todos los libros usando forEach
        frecuenciaAnios[libro.anio] = (frecuenciaAnios[libro.anio] || 0) + 1; // Si el año existe en el objeto, le sumo 1, si no lo inicializo en 0 y le sumo 1
    });

    let anioMasFrecuente = null; // Variable para guardar el año más frecuente
    let maxFrecuencia = 0; // Variable para guardar la máxima frecuencia
    for (const anio in frecuenciaAnios) { // Recorro el objeto de frecuencias
        if (frecuenciaAnios[anio] > maxFrecuencia) { // Si la frecuencia del año actual es mayor que la máxima frecuencia...
            maxFrecuencia = frecuenciaAnios[anio]; // Actualizo la máxima frecuencia
            anioMasFrecuente = parseInt(anio); // Actualizo el año más frecuente (lo convierto a número)
        }
    }

    // Diferencia en años entre el libro más antiguo y el más nuevo
    const libroMasAntiguo = libros.reduce((antiguo, libro) => // Uso reduce para encontrar el libro más antiguo
        libro.anio < antiguo.anio ? libro : antiguo // Uso el operador ternario para comparar los años y devolver el libro más antiguo
    , libros[0]); // Empiezo con el primer libro del array (porque 0 es el índice del primer elemento y no el id)

    const libroMasNuevo = libros.reduce((nuevo, libro) => // Uso reduce para encontrar el libro más nuevo
        libro.anio > nuevo.anio ? libro : nuevo // Uso el operador ternario para comparar los años y devolver el libro más nuevo
    , libros[0]); // Empiezo con el primer libro del array

    const diferenciaAnios = libroMasNuevo.anio - libroMasAntiguo.anio; // Calculo la diferencia en años entre el libro más nuevo y el más antiguo

    // Resumen final
    return { // Devuelvo un objeto con toda la información de las estadísticas
        promedioAnios: Math.round(promedioAnios * 100) / 100, // Redondeo el promedio a 2 decimales usando Math.round y lo devuelvo
        anioMasFrecuente,
        diferenciaAnios
    };
}

console.log("Estadísticas de la biblioteca:"); // Muestro el mensaje antes de las estadísticas para que se vea mejor en la consola
console.log(calcularEstadisticas()); // Pruebo la función mostrando las estadísticas de la biblioteca

/*
**** 8. MANEJO DE CADENAS

a) Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas. */

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase(); // Convertierto título a mayúsculas con toUpperCase()
        libro.autor = libro.autor.trim(); // Elimino espacios en blanco al inicio y final del nombre del autor con trim()
    });

    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase(); // Formateo los email a minúsculas con toLowerCase()
    });
}
normalizarDatos(); // Pruebo la función normalizando los datos
console.log("Datos normalizados:"); // Muestro el mensaje antes de los datos para que se vea mejor en la consola
console.log("Libros:"); 
console.log(libros); // Verifico que los títulos y autores estén en mayúsculas y sin espacios en blanco y los muestro en consola
console.log("Usuarios:");
console.log(usuarios); // Verifico que los emails estén en minúsculas y los muestro en consola

/*
**** INTERFAZ DE USUARIO POR CONSOLA ****

a) Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt(). 

b) El menú debe incluir opciones para todas las funcionalidades
anteriores y utilizar estructuras de control (if, switch, ciclos) para
manejar la lógica. */

function menuPrincipal() {
    let opcion;
    do {
        opcion = prompt(
            "📚 Menú Principal:\n" +
            "1. Agregar Libro\n" +
            "2. Buscar Libro\n" +
            "3. Ordenar Libros\n" +
            "4. Borrar Libro\n" +
            "5. Registrar Usuario\n" +
            "6. Mostrar Todos Los Usuarios\n" +
            "7. Buscar Usuario\n" +
            "8. Borrar Usuario\n" +
            "9. Prestar Libro\n" +
            "10. Devolver Libro\n" +
            "11. Reporte de Libros\n" +
            "12. Libros con Más de Una Palabra en el Título\n" +
            "13. Calcular Estadísticas\n" +
            "14. Normalizar Datos\n" +
            "0. 👋🏼 Salir\n" +
            "¡Bienvenido al sistema de gestión de biblioteca! Por favor, elija una opción:"
        );
        console.log("\n=============================="); // Separador para que se vea mejor en la consola  

        switch (opcion) { // uso switch para manejar las opciones del menú y cases para cada opción
            case "1":
                const idNuevo = parseInt(prompt("Ingrese el ID del libro:"));
                if (libros.some(libro => libro.id === idNuevo)) { // Verifico que el ID no esté repetido
                    console.log(` ¡Ups! Ya existe un libro con ID "${idNuevo}". Intenta con otro ID.`); // Mensaje de error
                break; // Salgo del case
                }
                if (isNaN(idNuevo)) { console.log("ID inválido. Intente nuevamente"); break; } // Verifico que el ID sea un número
                if (idNuevo <= 0) { console.log("ID debe ser un número positivo. Intente nuevamente"); break; } // Verifico que el ID sea positivo
                //si se agrega correctamente el ID, pido el resto de los datos
                const tituloNuevo = prompt("Ingrese el título del libro:");
                const autorNuevo = prompt("Ingrese el autor del libro:");
                const anioNuevo = parseInt(prompt("Ingrese el año de publicación del libro:"));
                if (isNaN(anioNuevo)) { console.log("Año inválido. Intente nuevamente"); break; } // Verifico que el año sea un número
                const generoNuevo = prompt("Ingrese el género del libro:");
                agregarLibro(idNuevo, tituloNuevo, autorNuevo, anioNuevo, generoNuevo);
                console.log(`Libro "${tituloNuevo}" con ID "${idNuevo}" agregado con éxito ✅`);
            break;
            case "2":
                const criteriodeBusqueda = prompt("¿Qué deseas buscar hoy? Ingrese (titulo, autor, genero):").toLowerCase();
                const valordeBusqueda = prompt(`Ingrese el valor para ${criteriodeBusqueda}:`);
                console.log(buscarLibro(criteriodeBusqueda, valordeBusqueda));
            break;
            case "3":
                const criterioOrden = prompt("Ordenar por (titulo, anio):").toLowerCase();
                ordenarLibros(criterioOrden);
                console.log("Libros ordenados con éxito ✅");
            break;
            case "4":
                //Pedimos al usuario el ID del libro que desea borrar. Use parseInt para convertir la entrada (siempre una cadena) a un número entero
                const idBorrar = parseInt(prompt("Ingrese el ID del libro que desea borrar:"));

                //Validamos la entrada del usuario. Si la entrada no es un número (por ejemplo, si ingresó texto o la canceló),
                // mostramos un mensaje de error y salimos del 'case' para evitar problemas.
                if (isNaN(idBorrar)) {
                console.log("❌ ID inválido. Por favor, ingrese un número.");
            break;
            }
            // Buscamos el libro en el array 'libros' usando el ID que proporcionó el usuario. 
            // Use el método ".find()" para devolver el primer objeto que coincide con la condición o "undefined" si no encuentra ninguno.
            const libroExistente = libros.find(libro => libro.id === idBorrar);

            // Verificamos si el libro existe.
            // Si 'libroExistente' es 'undefined', mostramos un mensaje de error y salimos del case.
            if (!libroExistente) {
                console.log(`❌ No se encontró ningún libro con el ID ${idBorrar}.`);
            break;
            }
            // Solicitamos confirmación para evitar borrados accidentales.
            // El mensaje incluye el título del libro para que el usuario sepa exactamente qué va a borrar.
            const confirmacionBorrar = confirm(`¿Seguro de que desea borrar el libro "${libroExistente.titulo}"?`);
            if (confirmacionBorrar) {
                borrarLibro(idBorrar);
                console.log(`✅ El libro "${libroExistente.titulo}" ha sido borrado con éxito.`); // Mensaje de confirmación
            } else {
                console.log("🚫 Operación de borrado cancelada."); // Mensaje de cancelación
            }
            break;
            case "5":
                const nombreUsuario = prompt("Ingrese el nombre del nuevo usuario:");
                const emailUsuario = prompt("Ingrese el email del nuevo usuario:");
                const resultadoRegistro = registrarUsuario(nombreUsuario, emailUsuario);
                if (resultadoRegistro) {
                    console.log(`✅ El usuario "${nombreUsuario}" ha sido registrado con éxito 🎉`);
                 } else {
                    console.log(`⚠️ No se pudo registrar el usuario. Revisa que el email no esté repetido.`);
                }
            break;
            case "6":
                console.log("--- Lista de Usuarios ---");
            
            // El forEach muestra cada elemento de manera formateada.
            mostrarTodosLosUsuarios().forEach(usuario => {
                console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}, Libros Prestados: ${usuario.librosPrestados.join(", ") || "Ninguno"}`);
            }); 
            break;
            case "7":
                const emailBuscar = prompt("Ingrese el email del usuario que desea buscar:");
                const usuarioEncontrado = buscarUsuario(emailBuscar);
                if (usuarioEncontrado) {
                    console.log("✅ Usuario encontrado:");
                    console.log(usuarioEncontrado);
                } else {
                    console.log("❌ Usuario no encontrado.");
                }        
            break;
            case "8":
                const nombreBorrar = prompt("Ingrese el nombre del usuario a borrar:");
                const emailBorrar = prompt("Ingrese el email del usuario a borrar:");
                const confirmacionBorrar2 = confirm(`¿Seguro que desea borrar al usuario "${nombreBorrar}" con email "${emailBorrar}"?`);
                if (confirmacionBorrar2) {
                        if (borrarUsuario(nombreBorrar, emailBorrar)) {
                            console.log(`✅ El usuario "${nombreBorrar}" ha sido borrado con éxito. 🎉`);
                        } else {
                console.log(`❌ No se pudo borrar el usuario. Es posible que no exista.`);
            }  
            } else {
            console.log(`🚫 Operación de borrado cancelada.`);
            }
            break;
             case "9":
                const idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar:"));
                const idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario:"));
                // La función 'prestarLibro' debe manejar todas las validaciones y mensajes.
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
            break;
            case "10":
                const idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver:")); 
                const idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario:")); 
                // La función 'devolverLibro' debe manejar las validaciones y mensajes
                devolverLibro(idLibroDevolver, idUsuarioDevolver); 
            break;
            case "11":
                console.log(generarReporteLibros());
            break;
            case "12":
                const librosMultipalabra = obtenerLibrosConPalabrasEnTitulo();
                if (librosMultipalabra.length > 0) {
                    console.log("--- Libros con más de una palabra en el título ---");
                    console.log(librosMultipalabra.join("\n"));
                } else {
                    console.log("❌ No se encontraron libros con más de una palabra en el título.");
                 }
            break;
            case "13":
                console.log(calcularEstadisticas());
            break;
            case "14":
                normalizarDatos();
                console.log("✅ Datos normalizados.");
            break;
            case "0":
                    console.log("Gracias por usar nuestra biblioteca virtual. ¡Vuelve pronto! 👋");
            break;
            default:
                console.log("❌ Opción inválida. Por favor, ingrese un número válido.");
            }
            console.log("==============================\n"); // Separador para que se vea mejor en la consola
            
        } while (opcion !== "0");
}

//Llamo a la función para que se inicie el menú principal y el usuario pueda interactuar con el sistema
menuPrincipal(); 