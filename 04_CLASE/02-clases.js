 // CLASES - JAVASCRIPT

 class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    saltar(){}
    correr(){}
    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es de color ${this._colorSombrero}`;
    }

    get nombre(){
        return this._nombre;
    }
    set cambiarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
 }





 let player1 = new Player('Mario', 'rojo');
 let player2 = new Player('Luigi', 'verde');

 console.log(player1); // Player { _nombre: 'Mario', _colorSombrero: 'rojo' }
 console.log(player1.saludar()); // Hola soy Mario y mi sombrero es de color rojo
 console.log(player2.saludar()); // Hola soy Luigi y mi sombrero es de color verde

 // GET 

 console.log(player1.nombre); // Mario

 // SET
 player1.cambiarNombre = 'Peach';
 console.log(player1.nombre); // Peach


 // SUBCLASES

 // CREACION DE SUBCLASE

 class Pet extends Player{
    constructor(nombre, colorSombrero, colorPiel){
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }
    get colorPiel(){
        return this._colorPiel;
    }

    set colorPiel(NuevoColorPiel){
        this._colorPiel = NuevoColorPiel;
    }
    comer(){
        return 'Yo como manzanas'
    }
    saludar(){
        return super.saludar() + ` y mi piel es de color ${this._colorPiel}`;
    }
 }

 let pet1 = new Pet('Yoshi', 'Invisible', 'verde');
 console.log(pet1);
 console.log(pet1.nombre)

 pet1.cambiarNombre = 'Rufus';
 console.log(pet1.nombre); // Rufus

// GET 
console.log(pet1.colorPiel); // verde
// SET
pet1.colorPiel = 'Purpura';
console.log(pet1.colorPiel); // Purpura

console.log(pet1.comer()); // Yo como manzanas
console.log(pet1.saludar()); // Hola soy Rufus y mi sombrero es de color Invisible y mi piel es de color Purpura




 