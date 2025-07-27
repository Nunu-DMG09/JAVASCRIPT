/*-----------------------
TIPO DE DATOS PRIMITIVOS
-----------------------*/

// string -> 	Texto. Se escribe entre comillas.
// number -> 	Números enteros o decimales.
// boolean -> 	Valores lógicos: true o false.
// null -> 	Valor nulo, ausencia de valor.
// undefined -> 	Variable declarada pero sin valor asignado.
// symbol -> 	Valor único e inmutable, usado para identificadores únicos.
// bigint -> 	Números enteros grandes, más allá del límite de number.

let texto = "Hola mundo";      // string
let numero = 42;               // number
let esValido = true;           // boolean
let vacio = null;              // null
let noDefinido;                // undefined
let id = Symbol("id");         // symbol
let grande = 123456789012345678901234567890n; // bigint

/* ------------------------------------
EJERCICIO:
Declara una variable de cada tipo 
primitivo y muestra su tipo con typeof.
--------------------------------------*/


let cadena = "Aprendiendo JS";
let edad = 25;
let activo = true;
let nulo = null;
let indefinido;
let simbolo = Symbol("clave");
let numeroGigante = 99999999999999999n;

console.log(typeof cadena);       // string
console.log(typeof edad);         // number
console.log(typeof activo);       // boolean
console.log(typeof nulo);         // object (bug histórico de JS)
console.log(typeof indefinido);   // undefined
console.log(typeof simbolo);      // symbol
console.log(typeof numeroGigante);// bigint