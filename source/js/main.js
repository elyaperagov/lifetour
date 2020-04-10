'use strict';
(function () {
  var offersSwiper = new Swiper('.offers__swiper-container', {
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: '.offers__button-next',
      prevEl: '.offers__button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        width: 1196,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        width: 785,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 38,
        width: 600,
      },
    }
  });

  offersSwiper.slideNext(2, false);
  offersSwiper.slidePrev(2, false);

  var instructorsSwiper = new Swiper('.instructors', {
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.instructors__button-next',
      prevEl: '.instructors__button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 'auto',
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
    }
  });

  instructorsSwiper.slideNext(3, false);
  instructorsSwiper.slidePrev(3, false);

  var reviewsSwiper = new Swiper('.reviews__inner', {
    slidesPerView: 3,
    spaceBetween: 17,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    breakpoints: {
      1024: {
        width: 1224,
        slidesPerView: 3,
        spaceBetween: 17,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 17,
        width: 1000,
      },
      320: {
        width: 610,
        slidesPerView: 2,
      },
    }
  });

  reviewsSwiper.slideNext(7, false);
  reviewsSwiper.slidePrev(7, false);

  var gallerySwiper = new Swiper('.gallery', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },
  });

  gallerySwiper.slideNext(10, false);
  gallerySwiper.slidePrev(10, false);


  $(function () {
    $('#feedback__phone-input').mask('+7(999) 999-9999');
  });

})();
