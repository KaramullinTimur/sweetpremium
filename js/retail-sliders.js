// All sliders initialization
document.addEventListener( 'DOMContentLoaded', () => {
    bannerSlider();
    productsSlider('#splide_products-novelty');
    productsSlider('#splide_products-popular');
    productsSlider('#splide_products-discount');
    reviewsSlider();
});

// Banner slider initialization
function bannerSlider() {
    const paginationItems = document.querySelectorAll('.banner-slider-item');
    const section = 'banner';
    const slider = new Splide('#splide_banner', {
        type: 'loop',
        autoplay: true,
        perPage: 2,
        perMove: 1,
        gap: '23px',
        pagination : false,
        autoWidth: true,
        focus: 'center',
        trimSpace: false,
    }).mount();

    createPagination('.banner-slider-pagination', paginationItems, 'banner');
    firstPageActive('.banner-slider-pagination-button');
    autoChangePage(slider, '.banner-slider-pagination-button');
    changePage(slider, '.banner-slider-pagination-button');
}

// Products sliders initialization
function productsSlider(selector) {
    const slider = new Splide(selector, {
        perPage: 4,
	    perMove: 1,
        gap: '29px',
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            425: {
                perPage: 1,
            }
        }
    }).mount();
}

// Reviews sliders initialization
function reviewsSlider() {
    const slider = new Splide( '#splide_reviews', {
        autoplay: true,
        rewind: true,
        perPage: 1,
	    perMove: 1,
        gap: '140px',
        pagination : false,
        breakpoints: {
            1024: {
                gap: '70px',
            }
        },
    }).mount();
    const paginationItems = document.querySelectorAll('.reviews-item');

    createPagination('.reviews-slider-pagination', paginationItems, 'reviews');
    firstPageActive('.reviews-slider-pagination-button');
    autoChangePage(slider, '.reviews-slider-pagination-button');
    changePage(slider, '.reviews-slider-pagination-button');
}



// -------------------------------------FUNCTIONS----------------------------------------

// Creating pagination buttons
function createPagination(selector, paginationItems, section) {
    const pagination = document.querySelector(selector);
    for(let i = 0; i < Math.ceil(paginationItems.length); i++) {
        let li = document.createElement('li');
        li.innerHTML = "<button class='" + section +"-slider-pagination-button'></button>";
        pagination.appendChild(li);
    }
}

// Make the first page button active
function firstPageActive(selector) {
    
    const paginationButtons = document.querySelectorAll(selector);
    
    paginationButtons[0].classList.add('active');
}

// Change page indicator when autoplay
function autoChangePage(slider, selector) {
    const paginationButtons = document.querySelectorAll(selector);
    
    slider.on('move', () => {
        paginationButtons.forEach(button => button.classList.remove('active'));
        paginationButtons[slider.index].classList.add('active');
    });
}

// Change page when clicked
function changePage(slider, selector) {
    const paginationButtons = document.querySelectorAll(selector);

    paginationButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // Go to the clicked page using Splide API function
            slider.go( '>' + i );

            // Add active class to current page button
            paginationButtons.forEach(button => button.classList.remove('active'));
            button.classList.add('active');
        })
    })
}