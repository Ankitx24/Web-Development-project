let screenValue = ''; // Stores the current value to be displayed on the calculator screen

// Function to append numbers to the screen
function appendNumber(number) {
    screenValue += number;
    updateScreen();
}

// Function to append operators (+, -, *, /) to the screen
function appendOperator(operator) {
    if (screenValue !== '' && !isNaN(screenValue.slice(-1))) {
        screenValue += operator;
    }
    updateScreen();
}

// Function to append a decimal point
function appendDot() {
    // Check if the last portion of the screen value already contains a decimal
    const parts = screenValue.split(/[+\-*/]/); // Split based on operators
    if (!parts[parts.length - 1].includes('.')) {
        screenValue += '.';
        updateScreen();
    }
}

// Function to clear the screen
function clearScreen() {
    screenValue = '';
    updateScreen();
}

// Function to delete the last digit
function deleteDigit() {
    screenValue = screenValue.slice(0, -1);
    updateScreen();
}

// Function to calculate the result
function calculate() {
    try {
        screenValue = eval(screenValue).toString(); // Evaluates the expression
    } catch (error) {
        screenValue = 'Error';
    }
    updateScreen();
}

// Function to update the calculator display
function updateScreen() {
    document.getElementById('result').value = screenValue;
}
