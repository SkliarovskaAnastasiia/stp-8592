import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});
