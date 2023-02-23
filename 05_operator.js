var num1=15;
var num2=10;
console.log(`--------------------------------------------------------`);
console.log(`Addition= ${num1+num2}`);
console.log(`--------------------------------------------------------`);
console.log(`subtraction = ${num1-num2}`);
console.log(`--------------------------------------------------------`);
console.log(`multiplication = ${num1*num2}`);
console.log(`--------------------------------------------------------`);
console.log(`Division = ${num1/num2}`);
console.log(`--------------------------------------------------------`);
console.log(`Reminder = ${num1 % num2}`);
console.log(`--------------------------------------------------------`);
console.log(`Pre Increment = ${++num1}`);
console.log(`--------------------------------------------------------`);
console.log(`Post Increment = ${num1++}`);
console.log(`--------------------------------------------------------`);
var int=10;
int +=20;
console.log(`Compound Addition = ${int}`);
console.log(`--------------------------------------------------------`);
console.log(`Compare the value ${int === "30"}`);


var age=22;
var result = age>=21 ? "Congratulations" : "Not Eligible";
console.log(result);


var age=21;
var result = age>=18 ? true : false;
console.log(result);

var eo=2;
eo % 2== 0 ? console.log("Even Number") : console.log("Odd Number");

//----------------------------------------------------------------------
function greaterNum(x,y)
{
    return  x > y ? x :y;
}

console.log("Greater Number is: "+greaterNum(800,899));

function evenOrOddNum(str)
{
    return str.length % 2 == 0 ? `${str} has 'EVEN' length ` : `${str} has 'ODD' length `;   
}
console.log(evenOrOddNum("Google Chrome"));