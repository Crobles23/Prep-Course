// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //  let matiz = [];
  //  for(let clave in objeto){
  //   matiz.push([clave, objeto[clave]])
  //  }
  //  return matiz;
  let cajon = Object.entries(objeto);
  return cajon;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let crissius = {};
  for(let i = 0; i < string.length; i++){
    if(crissius.hasOwnProperty(string[i])){
      crissius[string[i]] = crissius[string[i]] + 1;
    }
    else{crissius[string[i]] = 1}
  }
  return crissius;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let contMin = "";
  let contMay = "";
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toLowerCase()){
      contMin = contMin + s[i];
    }
    else{
      contMay = contMay + s[i];
    }
  }
  return contMay + contMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newArra = str.split(" ");
  let revertir = newArra.map(function(item){
    return item.split("").reverse().join("");
  })
   return revertir.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString() === numero.toString().split("").reverse().join("")){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let resto = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      continue;
    }
    else{resto = resto + cadena[i];}
  }
  return resto;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
// Si es negativo item1 va antes que item2
// Si es positivo item2 va antes que item1
  let newOrden = arr.sort(function(item1, item2){
    /*if(item1.length > item2.length){
      return 1;
    }
    else if(item1.length < item2.length){
      return -1;
    }
    else{return 0;}*/
    return item1.length - item2.length; // esta resta esta en forma ascendente y devuelve un +, -, ó 0
   }
  )
    return newOrden;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let coin = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let l = 0; l < arreglo2.length; l++){
      if(arreglo1[i] === arreglo2[l]){
      coin.push(arreglo1[i]);
      }
    }
  } 
  return coin;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

