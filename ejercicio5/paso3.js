function maxIndex(numeros){
    let indexMayor = 0, mayor = 0;

    if (numeros.length === 0) return -1; 

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
            indexMayor = i;
        }
    }
    
    return indexMayor;
} 

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
