function max(numeros){
    let aux = 0;
    if (numeros.length === 0)
        return;
    
    for(let i = 0; i < numeros.length; i++){
        if ( numeros[i] > aux ) 
            aux = numeros[i];
    }
    return aux;
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));