"use strict";

function calculate(number1, number2, callback) {

    const sum = number1 + number2;

    callback(sum);
}

function printToConsole(sum) {
    console.log(`De som is: ${sum}`);
}

function printToAlert(sum) {
    alert(`De som is: ${sum}`);
}

calculate(5, 9, printToConsole);
calculate(10, 8, printToAlert);