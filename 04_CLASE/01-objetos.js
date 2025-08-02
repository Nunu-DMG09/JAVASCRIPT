// OBJETOS - JAVASCRIPT

let usuario = {
    nombre: "David",
    edad: 20,
    estudiante: true,
    lenguajes: ["JavaScript", "Python", "Java"],
    'tiene pasaporte': true,
    idiomas: {
        nativo: 'español',
        extranjero: {
            ingles: 'intermedio',
            frances: 'básico'
        }
    }
}

console.log(usuario); // Imprime el objeto completo
console.log(usuario.nombre); // Imprime el nombre del usuario
console.log(usuario.edad); // Imprime la edad del usuario
console.log(usuario.estudiante);

//Agregar propiedades 

usuario.carrera = 'Ingeniería de Software';
console.log(usuario);

//Eliminar propiedades 
delete usuario.lenguajes;
console.log(usuario);

//Metodo de corchetes 

console.log(usuario['estudiante']);
console.log(usuario['tiene pasaporte']);

console.log(usuario.idiomas.extranjero.frances)
console.log(usuario.idiomas['extranjero'].frances)

// CONSTRUCTORES DE OBJETOS

function Disco(artista, album, años){
    this.artista = artista;
    this.album = album;
    this.años = años;
}

let disco3 = new Disco('Beach House', 'Bloom', 2012);
console.log(disco3);

let disco4 = new Disco('Bjork', 'volka', 2004);
console.log(disco4);


// UN POCO MAS DE NIVEL CON LOS OBJETOS

const user1 = {
    nombre: "David",
    edad: 20,
}

const {nombre, edad} = user1; // Desestructuración de objetos

console.log(nombre); // David
console.log(edad); // 20


// TENER COPIAS PARA OBJETVOS NUEVOS

const user2 = {...user1}; // Copia superficial del objeto

user2.nombre = "Ana"; // Cambiamos el nombre en la copia

console.log(user2.nombre); // Ana

console.log(user1.nombre); // David (original no cambia)

// TAMBIEN HAY OTRA FORMA DE HACER COPIAS

const user3 = {...user1, edad: 25, nombre: "Matias"}; // Copia con modificación

console.log(user3); // { nombre: 'Matias', edad: 25 }