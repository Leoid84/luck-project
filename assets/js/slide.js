  //============== Carrousel ======================== //




var swiper = new Swiper(".slide", {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
 // autoplay: {
  //  delay: 2500,
   // disableOnInteraction: false,
 // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
  breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      }
    }
});


var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonial-next',
      prevEl: '.testimonial-prev',
  },
    breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        }
      }
  });


