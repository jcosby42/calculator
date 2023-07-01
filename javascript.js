let displayString = "";
let num1, num2;
let operator = "";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0) return 'ERROR';
    return a/b;
}

function remainder(a,b){
    return a % b;
}

function power(a,b){
    return a**b;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((num) => 
    num.addEventListener("click", () => {
        displayString += num.innerText;
        updateDisplay();
    })
)

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => 
    op.addEventListener("click", () => {
        //check for a num1 and an operator
        //if yes, run operate
        //otherwise do this
        num1 = + displayString;
        operator = op.innerText;
        displayString += " " + op.innerText + " ";
        updateDisplay();
    })
)

const equalSign = document.querySelector("#equals");
equalSign.addEventListener("click", () => {
    //test for single digit
    let result; 
    if (displayString.indexOf(" ") < 0){
        result = + displayString;
    } else {
        num2 = + displayString.slice(displayString.lastIndexOf(" "));
        result = operate(num1, operator, num2);
    }
    displayString = result;
    updateDisplay();
    displayString = "";
    return result;
})

const allClear = document.querySelector("#AC");
allClear.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    displayString = "";
    document.getElementById("viewport").innerText = "0.";
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    let currentNumber;
    //create a new parseNumber function?
    //that's for the other branch
    if (!num1){
        currentNumber = + displayString;
    } else {
        currentNumber = + displayString.slice(displayString.lastIndexOf(" "));
    }
    if (!currentNumber.toString().includes(".")){
        displayString += ".";
        //any particular reason to do this vs. innerText?
    }
    updateDisplay();
    //check this; see if you need to reassign currentNumber to something at the end
    //appears to be assigning correctly as written
})

const negative = document.querySelector("#negative");
negative.addEventListener("click", () => {
    //in the spirit of just manipulating the displayString, just insert the negative
    //sign before the current number
    
    //if no num1, then at the beginning of the string
    if (!num1){
        //check beginning of displayString for negative
        if (displayString.charAt(0) === "-"){
            //if it has one, take it away
            displayString = displayString.slice(1, displayString.length);
        } else {
            //if it doesn't have one, put it in
            displayString = "-" + displayString;
        }
    } else {     //if num1, then after the last " "
        if (displayString.charAt(displayString.lastIndexOf(" ") + 1) === "-"){
            displayString = displayString.slice(0, displayString.lastIndexOf("-")) 
            + (displayString.slice(displayString.lastIndexOf("-") + 1));        
        } else { //this seems to work
            displayString = displayString.slice(0, displayString.lastIndexOf(" ") + 1) + "-" 
            + displayString.slice(displayString.lastIndexOf(" ")+1);
        }

    }
    updateDisplay();
});

function operate(a, oper, b){
    if (oper === "+") return add(a,b);
    if (oper ==="-") return subtract(a,b);
    if (oper ==="*") return multiply(a,b);
    if (oper ==="/") return divide(a,b);
    if (oper ==="^") return power(a,b);
    if (oper ==="%") return remainder(a,b);

}

//call this after every number push
function updateDisplay(){
    document.getElementById("viewport").innerText = displayString;
}

function calculate() {
    operate(num1, operator, num2);
}

calculate();
