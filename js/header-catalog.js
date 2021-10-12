const catalog = document.querySelector('.header-catalog');
const catalogButton = document.querySelector('.header-catalog-button');
const catalogList = document.querySelector('.header-catalog-list');
const catalogItems = document.querySelectorAll('.header-catalog-item');

catalogButton.addEventListener('click', () => {
    catalogList.classList.toggle('active');
})

catalog.addEventListener('mouseleave', () => {
    catalogList.classList.remove('active');
})

catalogItems.forEach(item => {
    let catalogDropdown = item.querySelector('.header-catalog-dropdown');
    item.addEventListener('click', () => {
        catalogDropdown.classList.toggle('active');
        
        // catalogDropdown.classList.add('animation-in');
        // catalogDropdown.classList.remove('animation-out');

        // item.addEventListener('animationend', () => {
        //     catalogDropdown.classList.remove('animation-in');
        //     item.addEventListener('click', () => {
        //         catalogDropdown.classList.add('animation-out');
        //     })
        // });
    })
})

