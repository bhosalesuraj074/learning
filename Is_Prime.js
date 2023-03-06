function isPrime(num)
{
 let flag =false;
  for(let i=2;i< num;i++)
  {
    for (let  j= 2;  j <= i; j++) {
        if(j % i== 0)
        {
           flag = true;
           break;
        }  
    }
  }
  if(flag)
  {
    return `${num} is not Prime`;
  }
  else{
    return `${num} is Prime`; 
  }

}

console.log(isPrime(7));
console.log(isPrime(4));