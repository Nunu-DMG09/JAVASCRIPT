import { miPrimeraPromesa } from "./05_1-promesas";
import { getProducts } from "./05_1-promesas";

miPrimeraPromesa()
    .then((respuesta) => console.log(respuesta))
    .catch((error)=> console.log(error)); 


getProducts().then((respuesta=> console.log(respuesta)))