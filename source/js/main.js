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
  // spaceBetween: 6,
  freeMode: true,
  navigation: {
    nextEl: '.instructors__button-next',
    prevEl: '.instructors__button-prev',
  },
  breakpoints: {
    1024: {
      width: 1196,
      slidesPerView: 5,
      spaceBetween: 7,
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
  freeMode: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    1024: {
      width: 1225,
      slidesPerView: 3,
      spaceBetween: 18,
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
  spaceBetween: 3,
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


window.addEventListener("DOMContentLoaded", function() {
    var u;

    function e(e) {
        e.keyCode && (u = e.keyCode), this.selectionStart < 3 && e.preventDefault();
        var t = "+7 (___) ___ ____",
            n = 0,
            r = t.replace(/\D/g, ""),
            a = this.value.replace(/\D/g, ""),
            i = t.replace(/[_\d]/g, function(e) {
                return n < a.length ? a.charAt(n++) || r.charAt(n) : e
            }); - 1 !== (n = i.indexOf("_")) && (n < 5 && (n = 3), i = i.slice(0, n));
        var l = t.substr(0, this.value.length).replace(/_+/g, function(e) {
            return "\\d{1," + e.length + "}"
        }).replace(/[+()]/g, "\\$&");
        (!(l = new RegExp("^" + l + "$")).test(this.value) || this.value.length < 5 || 47 < u && u < 58) && (this.value = i), "blur" === e.type && this.value.length < 5 && (this.value = "")
    }
    var t = document.querySelector("#feedback__phone-input");
    t.addEventListener("input", e, !1), t.addEventListener("focus", e, !1), t.addEventListener("blur", e, !1), t.addEventListener("keydown", e, !1)
});
