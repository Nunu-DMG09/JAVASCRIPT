/*---------------------------------
ESTRUCTURA DE DATOS EN JAVASCRIPT
---------------------------------*/

// Object -> Colección de propiedades y métodos, representado por pares clave-valor.
// Array -> Lista ordenada de elementos, accesibles por índice.

// Objeto
const persona = {
  nombre: "Luisa",
  edad: 28,
  estudiante: true
};

// Array
const frutas = ["manzana", "plátano", "uva"];


/* --------------------------------------------------------
EJERCICIO:
Crea un objeto que represente un libro (título, autor, año).
Crea un array con tus 3 hobbies favoritos.
Muestra todo por consola.
---------------------------------------------------------*/


const libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  anio: 1967
};

const hobbies = ["programar", "leer", "entrenar"];

console.log("Libro favorito:", libro);
console.log("Mis hobbies:", hobbies);

