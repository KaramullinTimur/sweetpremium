const hamburger = document.querySelector('.header-hamburger');
const nav = document.querySelector('.header-nav-list');
const navCloseButton = document.querySelector('.header-nav-list-button')




hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.add('active')
})
nav.addEventListener('click', (e) => {
    e.stopPropagation();
})
navCloseButton.addEventListener('click', () => {
    nav.classList.remove('active')
})
document.body.addEventListener('click', () => {
    nav.classList.remove('active')
})


