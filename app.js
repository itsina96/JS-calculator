const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');

keys.addEventListener('click', e => {
const key = e.target
const action = key.dataset.action

if(!action) {
  console.log('numer key!')
}
});