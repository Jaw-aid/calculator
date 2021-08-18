// javascript
// TODO Add in logic for summing up numbers 
// TODO Implement other logic (sub, mult, div) 
// TODO Add in functionality to press buttons for numbers 
// TODO Make sure there is no overflow of numbers 
// TODO find an improved way of calling on the onclick btn with a value passed in
// TODO how to handle large numbers (use .toExponential)

function numberPressed(value) {
    let displayValue = document.getElementById("displayNum").textContent
    let newValue
    console.log(value)
    if (displayValue == 0 && value == 0) {
        return
    }
    if (displayValue == 0 && value > 0) {
        displayValue = ''
    }
    newValue = displayValue.concat(value)
    document.getElementById("displayNum").textContent = newValue
}

function clearPressed() {
    document.getElementById("displayNum").textContent = 0
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
    if (displayValue.includes('.')) {
        return
    } else {
        let newValue = displayValue.concat('.')
        document.getElementById("displayNum").textContent = newValue
    }
}

function add(n1, n2) { return n1 + n2}
function subtrack(n1, n2) { return n1 - n2}
function multiply(n1, n2) { return n1 * n2}
function divide(n1, n2) { return n1 / n2}

function operate() {

}