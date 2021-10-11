const select = document.querySelector('.header-select');
const lastOption = Array.from(document.querySelectorAll('.header-select-option-link')).pop();

select.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('active');
});
select.addEventListener('keypress', () => {
    select.classList.toggle('active');
});
lastOption.addEventListener('blur', () => {
    select.classList.remove('active');
});
document.body.addEventListener('click', () => {
    select.classList.remove('active');
});

