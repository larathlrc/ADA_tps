/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos.
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana
y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc.
Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un día en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las
columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas
para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
día que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados. */

let gastos = [
  [1135, 2500,  900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300,  898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [ 800, 1250, 1430, 2100, 1980, 1270,  950]
 ];
// a) Total de gastos en una semana
function totalSemana(gastos, numeroSemana) {
  let total = 0;
  for (let i = 0; i < gastos[numeroSemana].length; i++) {
    total += gastos[numeroSemana][i];
  }
  return total;
}
console.log(`El gasto total de la semana 2 es: $${totalSemana(gastos, 1)}`);

// b) Total de gastos en un día particular
function totalDia(gastos, numeroDia) {
  let total = 0;
  for (let i = 0; i < gastos.length; i++) {
    total += gastos[i][numeroDia];
  }
  return total;
}
console.log(`El gasto total del jueves es: $${totalDia(gastos, 3)}`);

// c) Total de gastos en el mes
function totalMes(gastos) {
  let total = 0;
  for (let i = 0; i < gastos.length; i++) {
    for (let j = 0; j < gastos[i].length; j++) {
      total += gastos[i][j];
    }
  }
  return total;
}
console.log(`El gasto total del mes es: $${totalMes(gastos)}`);

// d) Semana con más gastos y día con más gastos
function semanaYDiaMaximo(gastos) {
  let maxSemana = { numero: 0, total: 0 };
  let maxDia = { numero: 0, total: 0 };  

  // Encontrar la semana con más gastos
  for (let i = 0; i < gastos.length; i++) {
    let totalSemana = 0;
    for (let j = 0; j < gastos[i].length; j++) {
      totalSemana += gastos[i][j];
    }
    if (totalSemana > maxSemana.total) {
      maxSemana = { numero: i, total: totalSemana };
    }
  }


  // Encontrar el día con más gastos
  for (let j = 0; j < gastos[0].length; j++) {
    let totalDia = 0;
    for (let i = 0; i < gastos.length; i++) {
      totalDia += gastos[i][j];
    }
    if (totalDia > maxDia.total) {
      maxDia = { numero: j, total: totalDia };
    }
  }

  return { maxSemana, maxDia };
}



