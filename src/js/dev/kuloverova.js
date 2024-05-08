import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';

window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import burgerMenu from '../components/burger';
import { headerScroll, headerDropdown } from '../components/header';
import { scroll } from '../utils/scroll';
import { whereBuy } from '../components/where_buy';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    headerScroll();
  } catch {}
  try {
    headerDropdown();
  } catch {}
  try {
    burgerMenu();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    whereBuy();
  } catch {}
  try {
    if (window.innerWidth > 768) {
      wowAnim();
      animApplication();
    }
  } catch {}
});

function wowAnim() {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 100,
    mobile: true,
    live: true
  });
  wow.init();
}

function animApplication() {
  const section = document.querySelector('.application--anim'),
    inner = section.querySelector('.application__inner'),
    title = section.querySelector('.application__title span'),
    background = section.querySelector('.application__inner-wrapper'),
    img = section.querySelector('.application__form-img-box img'),
    formTitle = section.querySelector('.application__form-title span'),
    labelBox = section.querySelector('.application__form-input-box'),
    btnRow = section.querySelector('.application__btn-row');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 30%',
      // start: 'top 80%',
      // end: 'bottom 0%',
      // scrub: 1,
      pin: section,
      // once: true,
      id: 'application'
      // markers: {
      //   startColor: 'blue',
      //   endColor: 'blue'
      // }
    }
  });

  tl.from(background, {
    duration: 1,
    ease: 'power2.inOut',
    width: 0
  })
    .from(title, {
      duration: 1,
      ease: 'power2.inOut',
      y: '-100%'
    })
    .from(
      img,
      {
        duration: 1,
        ease: 'power2.inOut',
        width: 0
      },
      '-=1'
    )
    .from(
      formTitle,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '100%'
      },
      '-=1'
    )
    .from(
      labelBox,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '200%'
      },
      '-=1'
    )
    .from(
      btnRow,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '200%'
      },
      '-=1'
    );
}
