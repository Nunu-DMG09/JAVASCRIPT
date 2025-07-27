/*-----------------------------
FUNCIONES EN JAVASCRIPT
-----------------------------*/


// 1. Declaración de Funciones (Function Declaration) -> Se puede llamar antes de declararla (hoisting) y Tiene su propio this.

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// 2. Expresión de Funciones (Function Expression) -> Una función guardada en una variable. No tiene hoisting y Muy útil en programación funcional.

const despedir = function(nombre) {
  return `Adiós, ${nombre}`;
};

// 3. Funciones Flecha (Arrow Functions) -> Sintaxis más corta, no tiene su propio this y No se puede usar como constructor.

const multiplicar = (a, b) => a * b;

// 4. Callbacks -> Una función que se pasa como argumento a otra función y se ejecuta luego.

function procesarUsuario(nombre, callback) {
  console.log("Procesando usuario...");
  callback(nombre);
}

procesarUsuario("David", (nombre) => {
  console.log(`Bienvenido, ${nombre}`);
});

// 5. Funciones Anónimas -> Funciones sin nombre, comúnmente usadas como callbacks o en expresiones de funciones.

setTimeout(function() {
  console.log("¡Hola después de 1 segundo!");
}, 1000);

// 6. Parámetros y valores por defecto -> Se pueden asignar valores por defecto a los parámetros de una función.

function saludar(nombre = "Invitado") {
  return `Hola, ${nombre}`;
}


/*-----------------------------------
EJERCICIOS PRACTICOS
------------------------------------*/

// funciones clásicas y flecha
function sumar(a, b) {
  return a + b;
}

const restar = (a, b) => a - b;

console.log("Suma:", sumar(5, 3)); // 8
console.log("Resta:", restar(5, 3)); // 2


// Callback personalizado

function mostrarResultado(resultado) {
  console.log("Resultado:", resultado);
}

function operacion(a, b, callback) {
  const suma = a + b;
  callback(suma);
}

operacion(10, 5, mostrarResultado); // Resultado: 15


// setTimeout y funciones flecha

console.log("Espera...");

setTimeout(() => {
  console.log("¡Tiempo cumplido!");
}, 2000);


// función que reciba otra función como parámetro

function procesarMensaje(mensaje, callback) {
  const modificado = mensaje.toUpperCase();
  callback(modificado);
}

procesarMensaje("hola sobrino", (msg) => {
  console.log("Mensaje final:", msg);
});

// Función con parámetro por defecto

function bienvenida(nombre = "Invitado") {
  console.log(`Bienvenido, ${nombre}`);
}

bienvenida(); // Bienvenido, Invitado
bienvenida("David"); // Bienvenido, David

