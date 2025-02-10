  //============== Carrousel ======================== //



  var swiper = new Swiper('.swiper-carousel', {
    slidesPerView: "auto", 
    centeredSlides: true, 
    spaceBetween: 20, 
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: { slidesPerView: 1 },  /* 1 card no mobile */
        768: { slidesPerView: 2 },  /* 2 cards no tablet */
        1024: { slidesPerView: 3 }  /* 3 cards no desktop */
    }
});


var swiper = new Swiper(".promo", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 4,
        }
      }
  });


