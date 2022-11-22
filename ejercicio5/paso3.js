function maxIndex(numbers){
    let indexMax = 0, max = 0;

    if (numbers.length === 0) return -1; 

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
            indexMax = i;
        }
    }

    return indexMax;
} 

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
