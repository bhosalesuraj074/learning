const array = [2, 3, 4, 5, 9];
array.forEach( function( currentValue, index, array ) {
    console.log(currentValue, index, array);
});

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});

console.log("Array sum");
let sum =0;
array.forEach(element => {
    sum += element;
});
console.log("Even index");
console.log(sum);
array.forEach((element,index) => {
     if(index % 2== 0)
     {
        console.log(element);
     }
});
