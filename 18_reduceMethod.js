const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51 ];
let sumOfArrayElement = array.reduce( (runningTotal, value) => {
    return runningTotal+value;
} );
console.log(sumOfArrayElement);