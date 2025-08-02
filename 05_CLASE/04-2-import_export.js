// BUENAS PRACTICAS EN ESTE CASO SON ARRIBA DE TODO IMPORTS - EXPORTS

import { superheroes, villanos } from './04_1-import_export.js';

const superHereoCard = () => {
    superheroes.map((superhero) => {
        console.log(`Nombre: ${superhero.nombre}`);
        console.log(`Poder: ${superhero.poder}`);
    })
}

console.log(superheroes); 
console.log(villanos);

export default superHereoCard;

