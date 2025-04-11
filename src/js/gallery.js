import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.gallery-swiper', {
  centeredSlides: true,
  speed: 600,
  breakpoints: {
    320: {
      slidesOffsetBefore: 70,
      spaceBetween: 12,
      slidesPerView: 'auto',
    },
    1200: {
      slidesOffsetBefore: 24,
      spaceBetween: 24,
      slidesPerView: 3,
    },
  },
  initialSlide: 1,
  touchEventsTarget: 'swiper-wrapper',
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
  on: {
    slideChange() {
      updateActiveSlide(this);
    },
    init() {
      updateActiveSlide(this);
      updateteButtons(this);
    },
  },
});

function updateActiveSlide(swiper) {
  document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.classList.toggle('active', index === swiper.realIndex);
  });
}

function updateteButtons(swiper) {
  const btnNext = document.querySelector('.swiper-btn-next');
  const btnPrev = document.querySelector('.swiper-btn-prev');

  btnNext.addEventListener('click', () => {
    console.log('next');
    swiper.slideNext();
  });
  btnPrev.addEventListener('click', () => {
    console.log('prev');
    swiper.slidePrev();
  });
}
