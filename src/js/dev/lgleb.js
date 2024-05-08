import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  gsap.registerPlugin(ScrollTrigger);

  if (window.screen.width > 768 && document.querySelector('.automatic')) {
    automaticsScrollAnimation();
  }
});

const automaticsScrollAnimation = () => {
  const block = document.querySelector('.automatic'),
    cards = block.querySelectorAll('.automatic__row-item.desktop'),
    duration = 1.5;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'middle 500px',
      end: 'bottom bottom',
      scrub: duration
    }
  });

  timeline
    .from(cards[0], {
      x: '57.2rem',
      duration
    })
    .from(cards[1], {
      x: '-57.2rem',
      duration
    })
    .from(cards[2], {
      x: '57.2rem',
      duration
    });
};

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
