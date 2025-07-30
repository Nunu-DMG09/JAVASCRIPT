// ATRIBUTOS Y METODOS ESTATICOS    

class Mascota{
    static cola = 'larga';
    pelaje = 'lacio';
    static contadorMascota = 0;
    contructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
        this._numero = ++Mascota.contadorMascota;
    }
    get numeroCreacion(){
        return this._numero;
    }
    static saludo(){
        return 'mover la cola';
    }
}

let mascota1 = new Mascota('Firulais', 5);
let mascota2 = new Mascota('Miau', 3);
let mascota3 = new Mascota('Pajarito', 1);


console.log(Mascota.cola);
console.log(mascota1.pelaje); // lacio 

console.log(mascota1.numeroCreacion); // 1
console.log(mascota2.numeroCreacion); // 2 
console.log(mascota3.numeroCreacion); // 3

console.log(Mascota.saludo());

class Perro extends Mascota{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this._raza = raza;
    }
}

console.log(Perro.cola); // larga
console.log(Perro.saludo()); // mover la cola
console.log(Perro.contadorMascota); 

let perro1 = new Perro('Rex', 4, 'Pastor Alemán');

console.log(Perro.contadorMascota); 