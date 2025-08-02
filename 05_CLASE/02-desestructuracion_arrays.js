// DESESTRCUTURACION DE ARRAYS
// Permite extraer valores de un array y asignarlos a variables individuales.

const estado = [
    "Hola Comunudad",
    function(mensaje){
        console.log(mensaje);
    },
];

const [texto, setMensaje] = estado;

console.log(texto); // "Hola Comunudad"
setMensaje(texto); // "Hola Comunudad"

// DESESTRUCTURACION DE OBJETOS

const user = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    direccion: {
        ciudad: "Madrid",
        pais: "España",
        codigoPostal: "28001",
        geo: {
            lat: "40.4168",
            lng: "-3.7038",
        },
    },
}

/*const {lat} = user.direccion.geo;
const {lng} = user.direccion.geo;

console.log(lat); // 40.4168
console.log(lng); // -3.7038*/


// OTRA FORMA DE DESESTRUCTURAR OBJETOS

const{
    direccion: {
        geo: {lat: latitud, lng: longitud},
    },
} = user;

console.log(latitud); // 40.4168
console.log(longitud); // -3.7038