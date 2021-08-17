// javascript
// TODO Give values to each button
// TODO Update screen with numbers when button is clicked 
// TODO Update screen when Clear btn is pressed
// TODO Update screen when Delete btn is pressed 
// TODO Add in logic for summing up numbers 
// TODO Implement other logic (sub, mult, div) 
// TODO Add in functionality to press buttons for numbers 

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