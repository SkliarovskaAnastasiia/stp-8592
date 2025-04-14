import Swiper from 'swiper';

const swiper = new Swiper('.gallery-swiper', {
  centeredSlides: true,
  speed: 800,
  breakpoints: {
    320: {
      spaceBetween: 12,
      slidesPerView: 2.14,
      slidesOffsetBefore: -12,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  initialSlide: 1,

  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  on: {
    slideChange() {
      HandleBtnClick(this, false);
    },
    init() {
      HandleBtnClick(this, true);
    },
  },
});

function HandleBtnClick(swiper, isInit) {
  const btnNext = document.querySelector('.swiper-btn-next');
  const btnPrev = document.querySelector('.swiper-btn-prev');

  if (isInit) {
    btnNext.addEventListener('click', () => {
      swiper.slideNext();
    });
    btnPrev.addEventListener('click', () => {
      swiper.slidePrev();
    });
  }

  btnPrev.disabled = swiper.isBeginning;
  btnNext.disabled = swiper.isEnd;
}
