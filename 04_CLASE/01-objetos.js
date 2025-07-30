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