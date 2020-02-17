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
        
        // Replace the displayed number '0' with the clicked key.
        if(!action) {
            if(displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                // basically, if the first clicked key isn't 0 and user clicks another key(s), we want to append it to the displayed number.
                display.textContent = displayedNum + keyContent;
            }
        }
        
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log('operator key!')
        }
        
        if (action === 'decimal') {
            console.log('decimal key!')
        }
        
        if(action === 'clear') {
            console.log('clear key!')
        }
        
        if(action === 'calculate') {
            console.log('equal key!')
        }
    }
    
});
