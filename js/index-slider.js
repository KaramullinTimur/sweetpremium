document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        gap: '90px',
        breakpoints: {
            1024: {
                perPage: 2,
            },
            425: {
                perPage: 1,
                height: '200px',
                gap: '20px',
            },
        },
    }).mount();
} );