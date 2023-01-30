// function decirHola(usuario){
//     return "Hola " + usuario + "!"
// }


// function decirAdios(usuario){
//     return "Adios " + usuario + "!"
// }


// function crearSaludo(usuario, callBack){
//     return callBack(usuario);
// }


// console.log(decirHola("Criss"))
// console.log(decirAdios("Criss"))

// console.log(crearSaludo("Criss", decirHola));

let cajita = ["Luis", "Lotso", "Juan", "Christoper", "Leslie"];
let metrica = [98, 33, 94, 26, 52];
let edades = [22, 26, 18, 24, 25];

 for(let i = 0; i < cajita.length; i++){
     //console.log(cajita[i])
 }
 function recorrido(my){
     //console.log("Hola ", my)
 }
// cajita.forEach(recorrido)

let mochila = cajita.map(
    function(amigo, ind){
        //return "Querido(a) " + amigo + ind
        return amigo[ind]
    }
)

console.log(mochila);

//console.log(mochila)
function reducto(redu, valore){
    return redu += valore
}

let caramelo = metrica.reduce(reducto);
//console.log(caramelo)

let probando = edades.reduce(function(acum, indi, i){
        if(indi === 24 || i === 0){

        } else {acum = acum + indi}
    return acum;
}, 0)
//console.log(probando)