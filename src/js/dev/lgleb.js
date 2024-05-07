import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();
});

const Swipers = () => {
  const numbersSwiper = new Swiper('.numbers__swiper', {
    slidesPerView: 1.15,
    slidesPerGroup: 1,
    spaceBetween: 21,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

    navigation: {
      prevEl: '.numbers__swiper-navigation--left',
      nextEl: '.numbers__swiper-navigation--right'
    }
  });

  const spheresSwiper = new Swiper('.spheres__swiper', {
    slidesPerView: 1.15,
    slidesPerGroup: 1,
    spaceBetween: 21,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

    navigation: {
      prevEl: '.spheres__swiper-navigation--left',
      nextEl: '.spheres__swiper-navigation--right'
    }
  });
};
