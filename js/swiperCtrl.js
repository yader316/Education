var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // },
    
    slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        // 768: {
        //   slidesPerView: 2,
        //   spaceBetween: 40,
        // },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
});
