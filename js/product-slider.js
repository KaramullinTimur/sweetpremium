// Product sliders initialization
document.addEventListener( 'DOMContentLoaded', () => {
    const slider = new Splide( '#splide_product', {
        rewind: true,
        perPage: 1,
	    perMove: 1,
        pagination : false,
    }).mount();

    // Calculate slider counter values
    const all = document.querySelectorAll('.product-card-item').length;
    const slidesNumber = document.querySelector('.product-card-slider-number');
    const slideCurrent = document.querySelector('.product-card-slider-current');

    slidesNumber.innerHTML = all;
    slider.on('move', () => {
        slideCurrent.innerHTML = slider.index + 1;
    });
});

