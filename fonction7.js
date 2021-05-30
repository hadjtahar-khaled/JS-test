// 7)-function that prints all the prime numbers between 0 and limit
// to do this function we creat a function isPrime that test if the number is a prime or not

function primes (limit){
    console.log(limit) ; 
    let List = [] ;  
    for(let i=1 ; i<limit ; i++ ){
        if (isPrime(i) )  {
            List.push(i);
            console.log(i + isPrime(i) )
        } 
    }
    console.log(List);
    return List ; 
}
//function isPrime that test if the number is a prime or not
function isPrime (x){ 
    for(let i=2;i<=Math.sqrt(x);i++){
        if (x % i == 0 ){ 
            return false ; 
            
        }
    }
    return true ;
}
// exemple d'excution
console.log(primes(25));
