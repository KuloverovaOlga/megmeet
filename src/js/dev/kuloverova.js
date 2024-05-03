import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';


window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';


import popup from '../utils/popup';
import form from '../utils/form';
import burgerMenu from '../components/burger';
import header from '../components/header';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    header();
  } catch {}
  try {
    burgerMenu();
  } catch {}
});




