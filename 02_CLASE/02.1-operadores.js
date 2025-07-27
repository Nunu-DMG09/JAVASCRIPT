/*----------------------
OPERADORES EN JAVASCRIPT
-----------------------*/

/*======================
OPERADORES ARITMÉTICOS
========================*/

// Suma

const a = 10;
const b = 5;
const suma = a + b; // 15

// Resta
const resta = a - b; // 5

// Multiplicación
const multiplicacion = a * b; // 50

// División
const division = a / b; // 2

// Módulo (resto de la división)
const modulo = a % b; // 0

// Exponenciación
const exponente = a ** b; // 100000

// Calcula el área de un triángulo (base * altura / 2)
let base = 10;
let altura = 5;
let area = (base * altura) / 2;
console.log("Área del triángulo:", area);

/*========================
OPERADORES DE COMPARACIÓN
=========================*/

// Igualdad
const esIgual = (a == b); // false

// Desigualdad
const esDesigual = (a != b); // true

// Igualdad estricta (tipo y valor)
const esIgualEstricta = (a === b); // false

// Desigualdad estricta
const esDesigualEstricta = (a !== b); // true

// Mayor que
const esMayor = (a > b); // true

// Menor que
const esMenor = (a < b); // false

// Mayor o igual que
const esMayorOIgual = (a >= b); // true

// Menor o igual que
const esMenorOIgual = (a <= b); // false

let edad = 18;
console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad");

/*=========================
OPERADORES LÓGICOS
==========================*/

// AND (&&)
const and = (a > 0 && b > 0); // true

// OR (||)
const or = (a > 0 || b < 0); // true

// NOT (!)
const not = !(a > b); // true

let tieneEntrada = true;
let es_Mayor = false;

if (tieneEntrada && es_Mayor) {
  console.log("Puedes ingresar");
} else {
  console.log("Acceso denegado");
}

/*=========================
OPERADORES DE ASIGNACIÓN
==========================*/

// Asignación simple
let x = 10;

// Asignación con suma
x += 5; // x = x + 5; // 15

// Asignación con resta
x -= 3; // x = x - 3; // 12

// Asignación con multiplicación
x *= 2; // x = x * 2; // 24

// Asignación con división
x /= 4; // x = x / 4; // 6

// Asignación con módulo
x %= 2; // x = x % 2; // 0

// Asignación con exponenciación
x **= 3; // x = x ** 3; // 0 (cualquier número elevado a la potencia de 0 es 1)

let puntos = 10;
puntos += 5; // puntos ahora es 15
console.log(puntos);

/*=========================
OPERADORES DE TERNARIO
==========================*/

// condición ? valorSiTrue : valorSiFalse

// Operador ternario
const edadPersona = 20;

const mensaje_1 = (edadPersona >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje_1); // "Es mayor de edad"

let temperatura = 30;
let mensaje = temperatura > 25 ? "Hace calor" : "Hace frío";
console.log(mensaje);


/*=========================
OPERADORES DE EVALUACIÓN
==========================*/

// Operador de coalescencia nula (??) -> Devuelve el valor de la derecha si el de la izquierda es null o undefined.
const valor = null;

const resultado = valor ?? "Valor por defecto"; // "Valor por defecto"
console.log(resultado);

// Operador de encadenamiento opcional (?.) -> Evita errores si una propiedad no existe.
const objeto = { usuario: { nombre: "Ana" } };
const nombreUsuario = objeto.usuario?.nombre || "Usuario desconocido"; // "Ana"
console.log(nombreUsuario);

// Operador de propagación (spread operator)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
console.log(combinado);
