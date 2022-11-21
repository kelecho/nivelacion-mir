function join(arreglo){
    let result = "";
    for(let i=0; i < arreglo.length; i++){
        result += arreglo[i]
        if ((arreglo.length - 1) !== i ){
            result += " ";
        } 
    }
    return result;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));