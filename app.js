let numbers = document.getElementsByTagName("button");
let display = document.getElementById("display");

for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let buttonValue = this.textContent;
    if (buttonValue === "clear") {
      display.innerHTML = "0";
    }
    else {
      display.innerHTML = buttonValue;
    }
  })
}