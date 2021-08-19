// javascript
// TODO Add in functionality to have a string of numbers calculating
// TODO Add in functionality to press buttons for numbers 
// TODO Make sure there is no overflow of numbers 
// TODO find an improved way of calling on the onclick btn with a value passed in
// TODO how to handle large numbers (use .toExponential)

let n1
let n2
let operand
let operandClear

function numberPressed(value) {
    let displayValue = document.getElementById("displayNum").textContent
    let newValue
    // console.log(value)
    // console.log(n1)
    if (displayValue == 0 && value == 0) {
        return
    }
    if (displayValue == '0' && value > 0) {
        displayValue = ''
    }
    if (operandClear !== undefined) {
        displayValue = ''
        operandClear = undefined
    }
    newValue = displayValue.concat(value)
    document.getElementById("displayNum").textContent = newValue
}

function clearPressed() {
    document.getElementById("displayNum").textContent = 0
    num1 = undefined
    num2 = undefined
}

function deletePressed() {
    let displayValue = document.getElementById("displayNum").textContent
    if (document.getElementById("displayNum").textContent.length == 1) {
        document.getElementById("displayNum").textContent = 0
        return
    } 
    document.getElementById("displayNum").textContent = displayValue.slice(0, displayValue.length - 1)
}

function decimalPressed() {
    let displayValue = document.getElementById("displayNum").textContent
    if (operandClear !== undefined) {
        displayValue = ''
        operandClear = undefined
    }
    if (displayValue.includes('.')) {
        return
    } else {
        let newValue = displayValue.concat('.')
        document.getElementById("displayNum").textContent = newValue
    }
}

function add() {
    n1 = document.getElementById("displayNum").textContent
    operand = '+'
    console.log(operand)
    operandClear = 'Addition'
}
function subtract() {
    n1 = document.getElementById("displayNum").textContent
    operand = '-'
    console.log(operand)
    operandClear = 'Subtract'
}
function multiply() {
    n1 = document.getElementById("displayNum").textContent
    operand = '*'
    console.log(operand)
    operandClear = 'Multiply'
}
function divide() {
    n1 = document.getElementById("displayNum").textContent
    operand = '/'
    console.log(operand)
    operandClear = 'Divide'
}

function operate() {
    n2 = document.getElementById("displayNum").textContent
    n1Num = Number(n1)
    n2Num = Number(n2)
    if (operand == '+') {
        n1 = n1Num + n2Num
        n2 = undefined
        return  document.getElementById("displayNum").textContent = n1Num + n2Num
    }
    if (operand == '-') {
        n1 = n1Num - n2Num
        return  document.getElementById("displayNum").textContent = n1Num - n2Num
    }
    if (operand == '*') {
        n1 = n1Num * n2Num
        return  document.getElementById("displayNum").textContent = (n1Num * n2Num)
    }
    if (operand == '/') {
        n1 = n1Num / n2Num
        return  document.getElementById("displayNum").textContent = n1Num / n2Num
    }
}

function operateFromOperand() {

    if (n1 == undefined || n2 == undefined) {
        return
    }

    n2 = document.getElementById("displayNum").textContent
    n1Num = Number(n1)
    n2Num = Number(n2)
    if (operand == '+') {
        n1 = n1Num + n2Num
        n2 = undefined
        return  document.getElementById("displayNum").textContent = n1Num + n2Num
    }
    if (operand == '-') {
        n1 = n1Num - n2Num
        return  document.getElementById("displayNum").textContent = n1Num - n2Num
    }
    if (operand == '*') {
        n1 = n1Num * n2Num
        return  document.getElementById("displayNum").textContent = (n1Num * n2Num)
    }
    if (operand == '/') {
        n1 = n1Num / n2Num
        return  document.getElementById("displayNum").textContent = n1Num / n2Num
    }
}