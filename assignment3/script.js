let operatorAdd = (input1, input2) => input1 + input2;
let operatorSubtract = (input1, input2) => input1 - input2;
let operatorMultiply = (input1, input2) => input1 * input2;
let operatorDivide = (input1, input2) => input1 / input2;

let operate = (operator, input1, input2) => operator(input1, input2);

let displayTable = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".nmb");
const operatorBtns = document.querySelectorAll(".opt");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#AC");
const floatBtn = document.querySelector("#btnflt");
const backBtn = document.querySelector("#backSpace");

let displayValue = 0;
let displayNumbers = new Array;
let displayOperators = new Array;
var newNumber = true;

numberBtns.forEach((button) => {
	button.addEventListener('click' , () => {
		if(newNumber == true || displayTable.textContent == 'Error!') {
			displayTable.textContent = '';
		}
		newNumber = false;
		displayValue = button.textContent;
		displayTable.textContent += displayValue;
	});
});

floatBtn.addEventListener('click', () => {
	while(newNumber == false && !displayTable.textContent.includes(".")) {
		displayValue = floatBtn.textContent;
		displayTable.textContent += displayValue;
	}
});

backBtn.addEventListener('click', () => {
	let lastCharRemoved = displayTable.textContent.substring(0,displayTable.textContent.length-1);
	displayTable.textContent = lastCharRemoved;
});

operatorBtns.forEach((button) => {
	button.addEventListener('click', () => {
		displayNumbers.push(Number(displayTable.textContent));
		displayOperators.push(button);
		newNumber = true;
		if(displayNumbers.length >= 2) {
			displayCalculationResult(button);
		}
	});
});

equalBtn.addEventListener('click', () => {
	while(displayNumbers.length != 0) {
		if(displayNumbers.length < 2 ) {
			displayNumbers.push(Number(displayTable.textContent));
		}
		displayCalculationResult(displayOperators[displayOperators.length-1]);
		displayNumbers = [];
		displayOperators = [];
	}
});

clearBtn.addEventListener('click', () => {
	displayTable.textContent = '';
	displayNumbers = [];
	displayOperators = [];
});

function displayCalculationResult(operatorInput){
	if(displayNumbers.includes(0) && operatorInput.id === "btnDivide") {
		displayTable.textContent = 'Error!';
		displayNumbers = [];
		displayOperators = [];
	} else {
		let usedOperator = switchOperate(operatorInput);
		displayTable.textContent = operate(usedOperator, displayNumbers[0], displayNumbers[1]);
		displayNumbers = [];
		displayNumbers.push(Number(displayTable.textContent));
	}
}

function switchOperate (button) {
	let convertOpt;
	switch (button.id){
		case "btnAdd":
			convertOpt = operatorAdd;
			break;
		case "btnSubtract":
			convertOpt = operatorSubtract;
			break;
		case "btnMultiply":
			convertOpt = operatorMultiply;
			break;
		case "btnDivide":
			convertOpt = operatorDivide;
	}
	return convertOpt;
}
