const inputValue = document.querySelector('#value');
const inputFee = document.querySelector('#fee');
const inputTime = document.querySelector('#time');
const btnCalculate = document.querySelector('#calculate');
const total = document.querySelector('#total');

btnCalculate.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    let resultInputValue = inputValue.value;
    let resultInputFee = inputFee.value / 100;
    let resultInputTime = inputTime.value;

    let resultTotal = resultInputValue * (1 + resultInputFee) ** resultInputTime;

    total.innerHTML = ("R$ " + resultTotal.toFixed(2).replace('.', ','));
})