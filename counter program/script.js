const textValue = document.getElementById("text");

const plusBtn = document.getElementById("plus-btn");

const minusBtn = document.getElementById("minus-btn");

const inputValue = document.getElementById("input-value");

const resetBtn = document.getElementById("reset");

function add() {plusBtn.addEventListener("click", () => {
    const countNum = parseInt(textValue.innerHTML);
    const changeVal = parseInt(inputValue.value);
    textValue.innerHTML = countNum + changeVal; 
})
}

function subtract() {
    minusBtn.addEventListener("click", () => {
    const countNum = parseInt(textValue.innerHTML);
    const changeVal = parseInt(inputValue.value);
    textValue.innerHTML = countNum - changeVal;
})
}

 function reset() {resetBtn.addEventListener("click", () => {
    textValue.innerHTML = 0;
    inputValue.value = 1;
})
}


add();
subtract();
reset();




console.log("code is fine");