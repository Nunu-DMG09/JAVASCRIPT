// FUNCIONES FLECHA Y COMPONENTES EN REACT


// FUNCION FLECHA

const miFuncion = () => {
  console.log("Esta es una función flecha");
}

// const suma = (a, b) => a + b;
const suma = (a, b) => {
  return a + b;
}

console.log(suma(5, 3)); // 8


// FUNCION CON OBJETOS 

const getUser = () => ({
    name: "Pablo",
    username: "devtuc",
    pass: "12345678",
});   // LAS PARENTESIS SIRVEN COMO RETURN IMPLICITA



// COMPONENTES EN REACT

const MiComponente = () => {
  return (
    <div>
      <h1>Hola, soy un componente de React</h1>
    </div>
  );
}

// FUNCIONES DENTRO DE EVENTOS EN REACT

<button onClick={() => alert("¡Hola desde un evento!")}>
  Click me
</button>