// FETCH

const url='https://fakestoreapi.in/api/products'
fetch(url).then((respuesta) => respuesta.json()).
then((data) => console.log(data));


const api = fetch("https://fakestoreapi.in/api/products");


    api
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("Fetch completed"));