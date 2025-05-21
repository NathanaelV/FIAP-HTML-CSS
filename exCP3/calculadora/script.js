document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculator-display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateDisplay() {
        display.value = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (button.classList.contains('number') || button.classList.contains('zero')) {
                if (waitingForSecondOperand === true) {
                    currentInput = value;
                    waitingForSecondOperand = false;
                } else {
                    currentInput = currentInput === '0' ? value : currentInput + value;
                }
            } else if (button.classList.contains('operator')) {
                if (value === 'C') {
                    currentInput = '0';
                    firstOperand = null;
                    operator = null;
                    waitingForSecondOperand = false;
                } else {
                    if (firstOperand === null) {
                        firstOperand = parseFloat(currentInput);
                    } else if (operator) {
                        const result = performCalculation[operator](firstOperand, parseFloat(currentInput));
                        currentInput = String(result);
                        firstOperand = result;
                    }
                    operator = value;
                    waitingForSecondOperand = true;
                }
            } else if (button.classList.contains('equal')) {
                if (firstOperand === null || operator === null) {
                    return; // Nada para calcular
                }
                const result = performCalculation[operator](firstOperand, parseFloat(currentInput));
                currentInput = String(result);
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = false;
            }
            updateDisplay();
        });
    });

    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    };

    updateDisplay(); // Inicializa o display
});
