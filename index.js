
// function add() {
//     return 0;
// }


// function add(num1, num2) {
//     if(num1 && num2){
//         return num1+ num2;
//     }
//     else return 0;
// }


function add(...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    else return 0;
}


function sumOfAllDigit(num) {
    let sum = 0;
    if (num !== 0) {
        while (num > 0) {
            sum = sum + (num % 10);
            num = Math.floor(num / 10);
        }
        return sum;
    }
    else return 0;


}

function checkPrime(num) {
    let isPrime = true;

    if (num > 1) {
     // looping through 2 to number/2
     for (let i = 2; i <= num / 2; i++) {
       if (num % i == 0) {
         isPrime = false;
         break;
       }
     }
    
     if (isPrime) {
       return true;
     } else {
        return false;
     }
    }
    else if (num===1){
        return '1 is neighter prime nor composite number'
    }
    else return 0;
    


}





module.exports = {
    add,
    sumOfAllDigit,
    checkPrime
}