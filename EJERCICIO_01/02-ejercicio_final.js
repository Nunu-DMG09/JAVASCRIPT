// EJERCICIO FINAL 

const usuario = {
  nombre: "David",
  edad: 22,
  tecnologias_1: ["HTML", "JS", "React"]
};

function presentarUsuario(persona) {
  let esMayor = persona.edad >= 18 ? "mayor" : "menor";
  return `Hola, soy ${persona.nombre} y soy ${esMayor} de edad.`;
}

const mostrarTecnologias = (lista) => {
  lista.forEach((tech, index) => {
    console.log(`Tecnología ${index + 1}: ${tech}`);
  });
};

console.log(presentarUsuario(usuario));
mostrarTecnologias(usuario.tecnologias_1);

// Callback con tiempo
setTimeout(() => {
  console.log("Gracias por practicar JavaScript");
}, 2000);