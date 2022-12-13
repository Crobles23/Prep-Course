// vamo a crear todo lo que aprendimos
//Array
let anonymus = ["carro", "yate","caballo","a ella uu"];
const cris = ["Cristian", "Peruano", "vaachillar", "Bachiller xd"];
let blabla = 24;
var ella = true;
var moto = "blanco y azul";
//se le puede asignar un valor sin string siempre y cuando se encuentre definido for example:
let edad = blabla; // blabla es igual a 24 
function presentacion (){
    let cris = "Cristian;"
    return cris[0] + ", Sea usted bienvenido a la veterinaria Guau Guau.";
}
console.log(presentacion());

var mascotas = {
    perro: "bianca",
    gato1: "axel",
    gato2: "raul",
    gato3: "bills",
    gato4: "slash",
    perro2: "meiko",
    perro3: "pequi",
    saludo: function(){
        "Sea usted bienvenido xd";
    }
}

function motos(color, marca, disponible, año, tienda){
    this.color = ["azul", "negro", "blanco", "rojo", "amarillo"];
    this.marca = ["italika", "discover", "pulsar", "suzuki", "honda", "yamaha", "duke"];
    this.disponible = true;
    this.año = año;
    this.tienda = tienda;
    this.runrun = function(){return "La moto hace run run";}
}
let comprador1 = new motos(motos.color[0], motos.marca[0], 2020, "san juan");
console.log(comprador1);