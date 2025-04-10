const popUp = document.querySelector('.overlay');
const cookiesBtns = document.querySelectorAll('.js-cookies-btn');

const onLoadPage = () => {
  if (localStorage.getItem('cookies')) return;

  setTimeout(() => {
    popUp.classList.add('shown');
  }, 500);

  cookiesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popUp.classList.remove('shown');
      localStorage.setItem('cookies', 'closed');
    });
  });
};

window.addEventListener('load', onLoadPage);
