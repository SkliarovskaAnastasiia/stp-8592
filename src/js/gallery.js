import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
});
