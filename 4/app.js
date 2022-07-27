function calcSum(){
    console.log("Переменная numOme: " + numOne);
    console.log("Переменная numTwo: " + numTwo);

    let sum = numOne + numTwo;
    console.log("Сумма: " + sum)
}

let numOne = prompt("Задайте первое число")
let numTwo = prompt("Задайте второе число")

calcSum(numOne, numTwo)

// function calcSum(numOne, numTwo, plus) {
//     let sum = numOne + numTwo;
//     if(sum< 1000000000000000000000){
//         plus();
//     } else {
//         console.log("Oшибка повторите заново")
//     }
// }

// function showPlus(){
//     console.log(numOne + numTwo)
// }

// calcSum(numOne, numTwo, showPlus)