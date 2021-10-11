const input = document.querySelector('.product-card-input');
const regExp = /^[0-9]+$/;

input.addEventListener('keypress', (e) => {
    if(!(e.charCode >= 48 && e.charCode <= 57)) e.preventDefault();
})

const arrow_up = document.querySelector('.product-card-input-up');
const arrow_down = document.querySelector('.product-card-input-down');

arrow_up.addEventListener('click', () => {
    input.value++;
})
arrow_down.addEventListener('click', () => {
    if(input.value > 0) input.value--;
})