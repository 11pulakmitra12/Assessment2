
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

module.exports = {
    add
}