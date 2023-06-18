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
    return a^b;
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
    //assign everything after the operator to num2
    //possibly slice from the second space and convert it to a number?
    //probably better to change the display function so that it's not fiddling
    //with a whole string
    num2 = + displayString.slice(displayString.lastIndexOf(" "));
    let result = operate(num1, operator, num2);
    displayString = result;
    updateDisplay();
    return result;
})

function operate(a, oper, b){
    if (oper === "+") return add(a,b);
    if (oper ==="-") return subtract(a,b);
    if (oper ==="*") return multiply(a,b);
    if (oper ==="/") return divide(a,b);
    if (oper ==="^") return power(a,b);
}

//attach this to your function buttons
/*function changeOperator(){
    //this is probably the right place to test for a completed equation
    //assign visible value to num1
    num1 = + displayString;
    operator = this.innerText;
    displayString = "";

}*/

//attach this to AC
function clear(){
    num1 = 0;
    num2 = 0;
    operator = "";
}
//call this after every number push
function updateDisplay(){
    document.getElementById("viewport").innerText = displayString;
}

function calculate() {
    operate(num1, operator, num2);
}

calculate();
