// FUNCIONES DE ORDEN SUPERIOR

/**** ABSTRACCIÓN DE FUNCIONES ****/ 

function sumarRango(min, max){
    let total = 0;
    for(let i = min ; i <= max; i++){
        total += i;
    }
    return total;
}

console.log(sumarRango(1, 10)); // 55
console.log(sumarRango(5, 15)); // 110


/**** RETORNO DE FUNCIONES ****/

function mayorQue(x){
    return (num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueDiez(15)); // true 

/*const mayorQueDiez = () => {
     return num > 10;
}*/


/**** METODOS DE BUSQUEDA Y TRANSFORMACIÓN ****/

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ['perro', 'gato', 'cisne', 'tortuga'];
const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'pc mesa', precio: 4000},
    { nombre: 'pc portatil', precio: 5000}
]

// forEach = Recorrer el array y ejecutar una función para cada elemento

numeros.forEach((numero) =>{
    console.log(numero);

});

productos.forEach((producto) => {
    console.log(producto.nombre)
    console.log(producto.precio)
});

// find() = Recorrer el array y devolver el primer elemento que cumpla con la condición

const perro = animales.find((animal)=> animal === 'perro');
console.log(perro); // perro


//let producto_elegido = prompt("Ingrese el nombre del producto que desea buscar:");
//console.log(productos.find((producto) => producto.nombre === producto_elegido)); 




// filter() = Recorrer el array y devolver un nuevo array con los elementos que cumplan con la condición

const gato = animales.filter((animal) => animal === 'gato');
console.log(gato); // ['gato']

const producto_elegido2 = productos.filter((producto) => producto.nombre.includes("pc"));
console.log(producto_elegido2)



// some() = Recorrer el array y responder true o false segun si encuentra o no un elemento que cumpla un condicion 

const cisne = animales.some((animal)=> animal === "cisne");
console.log(cisne); // true

const caballo = animales.some((animal)=> animal === "caballo");
console.log(caballo); // false



// map() = Recorrer el Array y retornar un nuevo Array con los elementos transformados del array original

// const nombres = productos.map((producto) => producto.nombre)
// console.log(nombres);

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });
// console.log(productos);
// console.log(preciosActualizados);




// reduce() = Recorrer el Array y retornarnos un unico valor tras hacer una operaciones sobre los elementos

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// console.log(total);

const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalCarrito);




// sort() = Reordenar el Array segun el criterio que le indiquemos 

numeros.sort((a,b) => a - b );
console.log(numeros);


/*** MATH ***/  

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// // min() = Retornar el numero minimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));

// // max() = Retornar el numero maximo de un listado
// console.log(Math.max(50, 12, 37, 17, 25, 6));

// // ceil() = Retornar el numero que le indiquemos redondeando hacia arriba 
// console.log(Math.ceil(numeroDecimal1));

// // floor() = Retornar el numero que le indiquemos redondeando hacia abajo 
// console.log(Math.floor(numeroDecimal1));
// console.log(Math.floor(numeroDecimal2));

// // round() = Retornar el numero que le indiquemos mas cercano 

// console.log(Math.round(1.25));
// console.log(Math.round(1.75));

// random() = Retornar un numero aleatorio entre 0 inclusive y 1 inclusive

console.log(Math.random());
console.log(Math.round( Math.random() * 50 ));
console.log(Math.round( Math.random() * 50 + 20 ));

function GenerarNumero(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min )
}

const numeroRandom = GenerarNumero(1,6)
console.log(numeroRandom);

