// SPREAD OPERATOR EN JAVASCRIPT
// Permite descomponer elementos iterables (arrays, objetos, cadenas, etc.) en elementos individuales.

const alumnos = ['David', 'Ana', 'Juan'];
const alumnas = ['Maria', 'Laura', 'Pedro'];

// EJEMPLO 1: CONCATENAR ARRAYS

/*const estudiantes = alumnos.concat(alumnas);
console.log(estudiantes); // ['David', 'Ana', 'Juan', 'Maria', 'Laura', 'Pedro']*/

const estudiantes = [...alumnos, ...alumnas];
console.log(estudiantes); // ['David', 'Ana', 'Juan', 'Maria', 'Laura', 'Pedro']


// EJEMPLO 2: CLONAR UN ARRAY

const estudiantes2 = [...estudiantes, "Flor"];
console.log(estudiantes2); // ['David', 'Ana', 'Juan', 'Maria', 'Laura', 'Pedro', 'Flor']