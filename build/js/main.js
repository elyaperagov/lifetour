/*eslint-disable*/
'use strict';
var swiper = new Swiper('.offers__swiper-container', {
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

var swiper = new Swiper('.instructors', {
  // slidesPerView: 5,
  // loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.instructors__button-next',
    prevEl: '.instructors__button-prev',
  },
  breakpoints: {
    1024: {
      // width: 1196,
      slidesPerView: 5,
      spaceBetween: 8,
    },
    768: {
      // slidesPerView: 2,
      spaceBetween: 8,
      slidesPerView: 'auto',
    },
    320: {
      // loop: true,
      slidesPerView: 'auto',
      spaceBetween: 6,
    },
  }
});

var swiper = new Swiper('.reviews__inner', {
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
      // loop: true,
      width: 610,
      slidesPerView: 2,
    },
  }
});

var swiper = new Swiper('.gallery', {
  slidesPerView: 'auto',
  spaceBetween: 5,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  // 320: {
  //   // loop: true,
  //   width: 610,
  //   slidesPerView: 2,
  // },
});


window.addEventListener('DOMContentLoaded', function () {
  var keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = '+7 (___) ___ ____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, ''),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf('_');
    if (i !== -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === 'blur' && this.value.length < 5) {
      this.value = '';
    }
  }

  var inputForm = document.querySelector('#feedback__phone-input');
  inputForm.addEventListener('input', mask, false);
  inputForm.addEventListener('focus', mask, false);
  inputForm.addEventListener('blur', mask, false);
  inputForm.addEventListener('keydown', mask, false);
});
