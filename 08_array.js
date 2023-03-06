let arr= [2,0,11,34,6,3,5];
console.log(arr);
//console.table(arr)
console.log("length of the array :"+arr.length)
//is array contains 0 element
console.log("is array contains 0 element: ",arr.includes(0));
// finding the element in the index
console.log("finding the index of element of 11: "+arr.indexOf(11))
// finding the 3rd index value
console.log(`finding the 3rd index value:` + arr[3]);
// update value at index 3r
arr[3]=35
console.log("==== Adding element in the last using push() === ");
arr.push(40);
console.log(arr);
console.log("==== Adding element in the first using unshift() === ");
arr.unshift(5);
console.log(arr)
console.log("Removing the last element: "+arr.pop());
console.log("Removing the first name: "+arr.shift());
console.log(arr)
console.log("finding element from 3 ",arr.slice(3));
console.log("finding element from 3 to 7",arr.slice(3,7));
splicedArrayWithDeleteCount = arr.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arr)
let arr1= [2,0,11,34,6,3,5];
console.log("==================================================");
console.log(arr1);
console.log("remove the 2nd index value" +arr1.splice(2,1));

