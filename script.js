
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const output = document.querySelector('#result')
const selected = document.querySelector('.selected')
const equal = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const extra = document.querySelectorAll('.extra')

let firstNumber = ''
let operator = ''
let secondNumber = ''

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (!operator) {
            firstNumber += digit.dataset.value
            selected.textContent = firstNumber
        } else {
            secondNumber += digit.dataset.value
            selected.textContent += digit.dataset.value
        }
    });
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.dataset.value
        if (operator === 'sqrt') {
            output.textContent = "Nämen snälla, att lägga till addition var knepigt nog!"
        } else if (operator === 'square') {
            output.textContent = "Nämen snälla, att lägga till addition var knepigt nog!"
        } else {
            selected.textContent += operator
            if (firstNumber && secondNumber) {
                let result = performCalculation()
                output.textContent = result
            }
        }
    })
})
equal.addEventListener('click', () => {
    if (firstNumber && operator && secondNumber) { 
        let result = performCalculation()
        output.textContent = result
    }
})
clearButton.addEventListener('click', () => {
    clearCalculator()})

function performCalculation() {
    switch (operator) {
        case '+':
            return +firstNumber + +secondNumber
		case '-':
				return +firstNumber - +secondNumber
		case '*':
				return +firstNumber * +secondNumber
		case '/':
			    return +firstNumber / +secondNumber	

			if (secondNumber === '0') {
				return "Error"}
        default:
            return "Error"
			
    }
}


function clearCalculator() {
    firstNumber = ''
    operator = ''
    secondNumber = ''
    selected.textContent = ''
    output.textContent = ''}

output.addEventListener('click', () => {
    let result = performCalculation()
    output.textContent = result;
})
