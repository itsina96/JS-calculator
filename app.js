class Calculator {
    // Set previous & current text elements inside this class
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    }
    
    clear() {
        this.current= '';
        this.previous = '';
        this.operator = undefined;
    }
    
    delete() {
        this.current = this.current.toString().slice(0, -1); 
    }
    
    
    appendNumber(number) {
        if(number === '.' && this.current.includes('.')) return // 'return' simply makes it unable to execute any further and cancel the function.
        this.current = this.current.toString() + number.toString(); // why toString()? because when we press more than one number key, JS will try to add those actual numbers together instead of append it to the previous one.
    }
    
    chooseOperation(operation) {
        if (this.current === '') return 
        if (this.previous !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previous = this.current;
        this.current = '';
    }
    
    compute() {
        let computation;
        // now change the string to the actual numbers for computation.
        const prev = parseFloat(this.previous);
        const current = parseFloat(this.current);
        if (isNaN(prev) || isNaN(current)) return; 
        switch (this.operation) {
            case '+':
            computation = prev + current;
            break;
            
            case '-':
            computation = prev - current;
            break;
            
            case '*':
            computation = prev * current;
            break;
            
            case '÷':
            computation = prev / current;
            break;
            
            default:
            return;
        }
        this.current = computation;
        this.opearation = undefined;
        this.previous = '';
    }
    
    getDisplayNumber(number) {
        return number;
    }

    updateDisplay() {
        this.currentTextElement.innerText = 
        this.getDisplayNumber(this.current);
        if (this.operation != null) {
            this.previousTextElement.innerText = 
            `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else {
            this.previousTextElement.innerText = '';
        }
    }
}

const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const previousTextElement = document.querySelector('.previous');
const currentTextElement = document.querySelector('.current');

const calculator = new Calculator (previousTextElement, currentTextElement);


numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        // and then display values get updated.
        calculator.updateDisplay();
    })
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})