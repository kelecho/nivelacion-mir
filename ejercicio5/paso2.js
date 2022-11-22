function max(numbers){
    let auxiliary = 0;
    if (numbers.length === 0) return;
    
    for(let i = 0; i < numbers.length; i++){
        if ( numbers[i] > auxiliary ) 
            auxiliary = numbers[i];
    }
    return auxiliary;
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));