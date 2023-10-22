document.addEventListener('DOMContentLoaded', function () {

    // links the display text box and buttons to this javascript function
    let display = document.getElementById('display');

    //converts the buttons into an array
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    //variable to store memory value
    let memory = 0;

    //function for when each button type/value is clicked
    function handleButtonClick(buttonValue) {
        //the all clear button function
        if (buttonValue === 'AC') {
            display.value = '';

            //switches the number to positive or negative by multiplying it by -1
        } else if (buttonValue === '±') {
            display.value = -1 * parseFloat(display.value);

            //divides the number by 100 to get the percentage
        } else if (buttonValue === '%') {
            display.value = parseFloat(display.value) / 100;

            //solves the buttons clicked using try and catch
        } else if (buttonValue === '=') {
            try {
                let result = eval(display.value);
                //ternary function to change the 'Infinity' display to 'Error'
                display.value = result === Infinity ? 'Error' : result;
            } catch {
                display.value = 'Error';
            }
        //memory buttons to add, subtract, memory recall, and memory clear
        } else if (buttonValue === 'm+') {
            memory += parseFloat(display.value);
        } else if (buttonValue === 'm-') {
            memory -= parseFloat(display.value);
        } else if (buttonValue === 'mr') {
            display.value = memory;
        } else if (buttonValue === 'mc') {
            memory = 0;
        } else {
            display.value += buttonValue;
        }
    }

    //a for each loop for each time a button is clicked
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.value);
        });
    });

    document.addEventListener('keydown', function (event) {
        //an array of valid key inputs
        const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '.', '=', 'Enter', 'Backspace'];

        //links the keys to respective loop
        if (allowedKeys.includes(event.key)) {
            if (event.key === 'Enter') {
                handleButtonClick('=');
            } else if (event.key === 'Backspace') {
                handleButtonClick('AC')
            } else {
                handleButtonClick(event.key);
            }
        }
    });
});
