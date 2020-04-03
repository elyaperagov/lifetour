/*eslint-disable*/
'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

var swiper = new Swiper('.offers__swiper-container', {
  freeMode: true,
  navigation: {
    nextEl: '.offers__button-next',
    prevEl: '.offers__button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      width: 785,
    },
    1024: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  }
});

var swiper = new Swiper('.instructors', {
  slidesPerView: 5,
  spaceBetween: 6,
  freeMode: true,
  navigation: {
    nextEl: '.instructors__button-next',
    prevEl: '.instructors__button-prev',
  },
  breakpoints: {
    768: {
      // slidesPerView: 2,
      spaceBetween: 6,
      slidesPerView: 'auto',
    },
    1024: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 6,
    },
  }
});

var swiper = new Swiper('.reviews__inner', {
  slidesPerView: 3,
  spaceBetween: 17,
  freeMode: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 17,
    },
    // 1024: {
    //   loop: true,
    //   slidesPerView: 'auto',
    //   spaceBetween: 6,
    // },
  }
});

var swiper = new Swiper('.gallery', {
  slidesPerView: 'auto',
  spaceBetween: 3,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});
