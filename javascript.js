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

//call this on = press
//later: if there's already values in a, oper, and b, run oper, assign the 
//results to num1, set num2 to 0, and add the new operator to oper

function operate(a, oper, b){
    if (oper === "+") return add(a,b);
    if (oper ==="-") return subtract(a,b);
    if (oper ==="*") return multiply(a,b);
    if (oper ==="/") return divide(a,b);
    if (oper ==="^") return power(a,b);
}

//attach this to your number buttons
function changeNumber(){
    displayString += this.innerText;
    updateDisplay();
}

//attach this to your function buttons
function changeOperator(){
    //this is probably the right place to test for a completed equation
    //assign visible value to num1
    num1 = + displayString;
    operator = this.innerText;

}

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



//write a number function, iterate over grid and add it to each number,
//like you did with the grid in the etch-a-sketch project
