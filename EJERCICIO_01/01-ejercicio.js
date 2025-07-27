/*===========================

1. VARIABLES Y TIPOS DE DATOS

============================*/


// Ejercicio 1: Declaración y reasignación
let nombre = "David";
const edad = 20;

nombre = "Luis"; 

console.log(`Hola ${nombre}, tiene ${edad} años.`);

// Ejercicio 2: Tipos de datos
let texto = "JavaScript";
let numero = 2025;
let booleano = true;
let vacio = null;
let indefinido;
let simbolo = Symbol("clave");
let big = 1234567890123456789012345678901234567890n;

console.log(typeof texto);       // string
console.log(typeof numero);      // number
console.log(typeof booleano);    // boolean
console.log(typeof vacio);       // object 😮 curiosidad de JS
console.log(typeof indefinido);  // undefined
console.log(typeof simbolo);     // symbol
console.log(typeof big);         // bigint

// Ejercicio 3: Objetos y Arrays
let persona = {
    name: "David",
    edad_años: 20,
    activo: true
};

let tecnologias = ["JavaScript", "Python", "Java"];

console.log(persona.nombre);
console.log(tecnologias[2]);

/*===========================

2. OPERADORES

============================*/


// Ejercicio 4: Aritméticos
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); // a elevado a la b


// Ejercicio 5: Comparación
console.log(5 == "5");   // true (compara valor)
console.log(5 === "5");  // false (compara valor y tipo)
console.log(10 != 5);    // true
console.log(10 !== "10");// true


// Ejercicio 6: Lógicos y Asignación
let online = true;
let registrado = false;

console.log(online && registrado); // false
console.log(online || registrado); // true
console.log(!registrado);          // true

let puntos = 10;
puntos += 5;  // puntos = puntos + 5
console.log(puntos); // 15


// Ejercicio 7: Ternario y nullish
let edad_a = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);


let carro = 20000;
let mensaje_cosa = carro >= 500 ? "ES CARO" : "ES BARATO";
console.log(mensaje_cosa); // "ES CARO"

let user = null;
let nombre_a = user ?? "Invitado"; // si user es null o undefined
console.log(nombre_a);


//  Ejercicio 8: Optional chaining
let usuario = {
  nombre: "Luis",
  direccion: {
    ciudad: "Lima"
  }
};

console.log(usuario?.direccion?.ciudad);      // Lima
console.log(usuario?.trabajo?.empresa);       // undefined (sin error)

/*===========================

3. FUNCIONES

============================*/


// Ejercicio 9: Función clásica
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Sobrino"));

// Ejercicio 10: Función flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 6));

//Ejercicio 11: Callback simple
function ejecutarCallback(callback) {
  console.log("Inicio");
  callback();
  console.log("Fin");
}

ejecutarCallback(() => {
  console.log("Esto es el callback.");
});

// Ejercicio 12: Simulación asíncrona con setTimeout
console.log("Esperando...");

setTimeout(() => {
  console.log("1 segundo después");
}, 1000);












