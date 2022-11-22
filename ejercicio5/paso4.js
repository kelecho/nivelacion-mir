function join(arreglo){
    let result = "", last_index = arreglo.length - 1;
    for(let i=0; i < arreglo.length; i++){
        result += arreglo[i]
        if (last_index !== i ){
            result += " ";
        } 
    }
    return result;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));