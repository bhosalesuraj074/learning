// 1. simple function
function demo()
{
    console.log("Hello Chief");
}
demo();
// 2. declare an anonymous function using the arrow function technique
( (name) =>{
  console.log(`Hello ${name} Boss`);
})("Suraj");

//3. The function is then stored in the greet variable. We can call the function by invoking greet().

var greet =function ()
{
    console.log("Hello World");
};

greet();

//4 . self executing  function 

(function(city)
{
 console.log("Hi I am currently in "+city);
})("Rajkot");

//5. we can also declare arrow function  

var greet = ()=>
{
console.log("Hello");
};
greet();
