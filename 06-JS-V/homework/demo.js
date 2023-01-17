
//clase que va a heredar un objeto. es decir que sus propiedades seran utilizadas invocandolas en la clase por medio de doot-notation
// SE UTILIZA EL "THIS" CUANDO SE ESTABLECE LAS (CLAVES) PROPIEDADES EN UNA CLASE, YA QUE SERÁ INVOCADA POR UN AARGUMENTO.
// EN CASO DE QUE SEA UN OBJETO, SOLO SE ESCRIBE LA CLAVE SIN EL "THIS"
 
// function Usuario(opciones){
//     this.usuario = opciones.usuario,
//     this.nombre = opciones.nombre,
//     this.email = opciones.email,
//     this.password = opciones.password
//   }
//   Usuario.prototype.saludar = function saludar(){
//     return "Hola, mi nombre es " + this.nombre;
//   }
//   return Usuario;
  //                                del cual hereda o utiliza el siguiente objeto
  
  // var opciones = {
  //   usuario: "no se especifica",
  //   nombre: "no se especifica",
  //   email: "no se especifica",
  //   password: "no se especifica",
  // }

  // class Usuario{
  //   constructor(opciones){
  //     this.usuario = opciones.usuario,
  //     this.nombre = opciones.nombre,
  //     this.email = opciones.email,
  //     this.password = opciones.password
  //   }
  //   saludar(){
  //     return "Hola, mi nombre es " + this.nombre
  //   }
  // }
  // return Usuario;

//------------------------------------------------------------------------------------------------



function EstaEsUnaPrueba(nombre, apellido, edad, vehiculo, seguro){
    this.name = nombre || "No se encontró un nombre",
    this.firstname = apellido,
    this.edad = edad,
    this.vehiculo = vehiculo,
    this.color = ["Blanco", "Azul", "Rojo", "Negro"],
    this.seguro = seguro,
    this.licencia = true,
    this.saludo = function hi(){
        return "Sea bienvenido" + this.name + " " + this.firstname; 
    }
}

EstaEsUnaPrueba.prototype.CompradorImpulsivo = function (){
    return console.log("Le ofrecemos nuestra gran variedad de autos, Sr. " + this.name)
}



let usuario1 = new EstaEsUnaPrueba("Cristian", "Robles", 24, "Italika 150", "Rimac");
//console.log(usuario1);

/////////////////////////////////////////////////////////////////////////////////

class Pets{
  constructor(nombre, genero, peso, edad){
    this.name = nombre
    this.genero = genero
    this.raza = "Fino XD"
    this.color = ["Amarillo", "Negro", "Blanco",]
    this.vacunas = true
    this.peso = peso + " Kg"
    this.age = edad + " años"
  }
  saludar(){
    return "Benvenuto " + this.name  + " il miglior animale domestico"
  }
}

let bianca = new Pets("Bianca", "Hembra", 4.2, 3);
//console.log(bianca);

/////////////////////////////////////////////////////////////////////////////
class Education extends Pets{
  constructor(nombre){
    super(nombre)
    this.rutina = true
  }
  Bañosdepets(){
    return this.name + " se baña todas las semanas"
  };

  Juegos(){
    return this.name + " le encanta las caricias"
  }
}

let chaparris = new Education("Bianca");
console.log(chaparris);
console.log(chaparris.Juegos());
console.log(chaparris.Bañosdepets());
/////////////////////////////////////////////////////////////////////////////////


function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.revertido = function(){
    let bubu = "";
  for(let i = this.length -1; i >= 0; i--){bubu = bubu + this[i]};
  return bubu;
  }
}

//Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

    class Persona {
      constructor(nombre, apellido, edad, domicilio){
        this.name = nombre
        this.firstname = apellido
        this.age = edad
        this.addres = domicilio
      }
      detalle(){
        let cajon = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio
      }
      return cajon;
    }

    }