const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {

    if (display.value === "") {
        return;
    }

    try {

        let result = eval(display.value);

        display.value = result;

    } catch (error) {

        display.value = "Error";

        setTimeout(function () {
            display.value = "";
        }, 1000);

    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    // Decimal
    if (key === ".") {
        appendValue(".");
    }

    // Enter = Calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = Clear
    if (key === "Escape") {
        clearDisplay();
    }

});