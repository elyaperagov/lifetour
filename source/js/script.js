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
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.offers__button-next',
    prevEl: '.offers__button-prev',
  },
});

var swiper = new Swiper('.instructors__swiper-container', {
  slidesPerView: 5,
  spaceBetween: 6,
  freeMode: true,
  navigation: {
    nextEl: '.instructors__button-next',
    prevEl: '.instructors__button-prev',
  },
});
