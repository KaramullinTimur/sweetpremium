const catalog = document.querySelector('.header-catalog');
const catalogButton = document.querySelector('.header-catalog-button');
const catalogList = document.querySelector('.header-catalog-list');

catalogButton.addEventListener('click', () => {
    catalogList.classList.toggle('active');
})

catalog.addEventListener('mouseleave', () => {
    catalogList.classList.remove('active');
})