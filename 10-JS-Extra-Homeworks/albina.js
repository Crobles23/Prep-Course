
let string = "omnipotenteempresario";
let crissius = {};
  for(let i = 0; i < string.length; i++){
    if(crissius.hasOwnProperty(string[i])){
      crissius[string[i]] = crissius[string[i]] + "u";
    }
    else{crissius[string[i]] = "al"}
  }
  //return crissius;
  //console.log(crissius);

  let aminos = "El mas grande del mundo mundial";
  let toArray = aminos.split(" ");
  //console.log(toArray);
  
  let camin = ["Somos", "los", "mejores", "del", "mundo", "mundial"];
  let onion = camin.join(" ");
  //console.log(onion);

  let numb = 123321;
  let conver = numb.toString().split("")
  //console.log(conver);

  let cadena = "iLoveYouArtemisa";
  let resto = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      continue;
    }
    else{resto = resto + cadena[i];}
  }
  //return resto;
  //console.log(resto);

// Si es negativo item1 va antes que item2
// Si es positivo item2 va antes que item1

// inicio   ["Jackeline", "Anahika", "Brenda", "Adria", "Joselyn", "Fleur", "Less"]
// vuelta 1 => Ana < jack -1
// resu     ["Anahika", "Jackeline", "Brenda", "Adria", "Joselyn", "Fleur", "Less"]
// vuelta 1 => bren < jack -1
// resu     ["Anahika", "Brenda", "Jackeline", "Adria", "Joselyn", "Fleur", "Less"]
// vuelta 1 => adri < jack  -1
// resu     ["Anahika", "Brenda", "Adria", "Jackeline", "Joselyn", "Fleur", "Less"]
// vuelta 1 => jos < jack -1
// resu     ["Anahika", "Brenda", "Adria", "Joselyn", "Jackeline", "Fleur", "Less"]
// vuelta 1 => fle < jack -1
// resu     ["Anahika", "Brenda", "Adria", "Joselyn", "Fleur", "Jackeline", "Less"]
// vuelta 1 => less < jack -1
// resu     ["Anahika", "Brenda", "Adria", "Joselyn", "Fleur", "Less", "Jackeline"]  

// vuelta 2 => bre < ana -1
// resu 2   ["Brenda", "Anahika", "Adria", "Joselyn", "Fleur", "Less", "Jackeline"]
// vuelta 2 => adri < ana -1
// resu 2   ["Brenda", "Adria", "Anahika", "Joselyn", "Fleur", "Less", "Jackeline"]
// vuelta 2 => jos = ana
// resu 2   ["Brenda", "Adria", "Anahika", "Joselyn", "Fleur", "Less", "Jackeline"] ana y jos se mantienen, pero queda en memoria para futuras comparaciones

// vuelta 3 => fle < jos -1
// resu 3   ["Brenda", "Adria", "Fleur", "Anahika", "Joselyn", "Less", "Jackeline"] fleur pasa a estar antes que ana por la memoria de igualdad de jos y ana
// vuelta 3 => les < jos -1
// resu 3   ["Brenda", "Adria", "Fleur", "Less", "Anahika", "Joselyn", "Jackeline"]
// vuelta 3 => jack > jos 1
// resu 3   ["Brenda", "Adria", "Fleur", "Less", "Anahika", "Joselyn", "Jackeline"] se conserva la posicion



  let arr = ["Jackeline", "Anahika", "Brenda", "Adria", "Joselyn", "Fleur", "Less"]
  function ord(num1, num2){
    if(num1.length > num2.length){
        return 1;
    }
    if (num1.length < num2.length) {
  return -1;
}
return 0;
}
var ordered = arr.sort(ord);
console.log(ordered)
