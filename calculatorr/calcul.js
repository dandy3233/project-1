// define a function called calculator
function calculator() {
    // define the input fields for the numbers and the operation
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    // perform the operation based on the value of the operation variable
    if (operation === '+') {
        document.getElementById('result').value = num1 + num2;
    } else if (operation === '-') {
        document.getElementById('result').value = num1 - num2;
    } else if (operation === '*') {
        document.getElementById('result').value = num1 * num2;
    } else if (operation === '/') {
        document.getElementById('result').value = num1 / num2;
    }
}