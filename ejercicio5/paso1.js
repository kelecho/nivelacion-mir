function sum(numeros){
    let result = 0;
    for (let i = 0; i < numeros.length; i++){
        result += numeros[i];
    }
    return result;
}

console.log(sum([1, 2 , 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));