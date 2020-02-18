const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = document.querySelector('.display')

keys.addEventListener('click', e => {
    // Instead of using foreach or for loop, we can use an event delegation pattern to listen (what's the best practice though?).
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType; 
        
        if(!action) {
            // Replace the displayed/default number '0' with the clicked key (also, after operator is applied).
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                // basically, if the first clicked key isn't '0' && user clicks another key(s), we want to append it to the displayed number.
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number'
        }
        
        // Concatenate/append '.' to the displayed number when clicked.
        if (action === 'decimal') {
            // Do nothing if string has a dot already 
            if(!displayedNum.includes('.')) { //why ! in front of displayedNum? 
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = "0."; //if user hits decimal key after operator key, it should start with 0. 
                )
            }
            calculator.dataset.previousKeyType = 'decimal'
        }
        
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
 
            // A custom attribute to check if the previous key is an operator before update the display to the clicked key.
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }
        
        if(action === 'clear') {
            display.textContent = 0; //or '0' as a string??
            calculator.dataset.previousKey = 'clear'
        }
        
        const calculate = (n1, operator, n2) => {
            let result = '';
            
            // why parseFloat()? because firstValue & secondValue are strings at this point. (1+1 = 11) parseFloat converts a string into a float (number with decimal places).
            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }
            return result;
        }
        
        if(action === 'calculate') {
            const firstValue = calculator.dataset.firstValue; //Q: declare const and find it at the same time..?!?
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            
            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKey = 'calculate'
        }
    }
    
});
