
let operatorAdd = (input1, input2) => input1 + input2;
let operatorSubtract = (input1, input2) => input1 - input2;
let operatorMultiply = (input1, input2) => input1 * input2;
let operatorDivide = (input1, input2) => input1 / input2;

let operate = (operator, input1, input2) => operator(input1, input2)

let displayValue = 0;
let displayNumbers = [];
let displayOperators = [];

let displayTable = document.querySelector("#display")

let numberButtons = document.querySelector(".numContainer")
let operatorButtons = document.querySelector(".opContainer")
let eqButtons = document.querySelector(".eqContainer")

numberButtons.addEventListener('click', function(event) {

    //displayOperators.push 

    for(let i = 0; i < 10; i++){
        if(event.target.matches("#btn" + i)) {
            displayValue = i;
        };
    }

    displayTable.textContent += displayValue;
    var Numbers = displayTable.textContent;
});


console.log(Numbers)

displayNumbers.push = Number(displayTable.textContent);


operatorButtons.addEventListener('click', function(event) {
    displayNumbers.push = displayTable.textContent;
    displayTable.textContent = '';

    if(event.target.matches("#btnAdd")) {
        displayValue = '+';
    }
    displayTable.textContent += displayValue;
});

// if(event.target.matches("#AC")) {
//    displayTable.textContent = '';
// }
