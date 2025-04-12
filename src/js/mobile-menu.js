const openBtn = document.querySelector('.header__mobile-menu');
const backdrop = document.querySelector('.mobile-menu__backdrop');
const closeBtn = backdrop.querySelector('.mobile-menu__close');
const menuItems = backdrop.querySelectorAll('li a');
const openClass = 'mobile-menu__backdrop--open';
const closeClass = 'mobile-menu--close';

let handleMenuItemClick;
let handleEscapeKey;
let handleBackdropClick;
let handleCloseBtnClick;

function openMenu() {
  document.body.classList.add('no-scroll');
  backdrop.classList.add(openClass);
  backdrop.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');

  // Menu item click
  handleMenuItemClick = function () {
    setTimeout(() => closeMenu(), 50); // let anchor scroll first
  };
  menuItems.forEach(item =>
    item.addEventListener('click', handleMenuItemClick)
  );

  // ESC key
  handleEscapeKey = function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };
  document.addEventListener('keydown', handleEscapeKey);

  // Backdrop click
  handleBackdropClick = function (e) {
    if (e.target === backdrop) {
      closeMenu();
    }
  };
  backdrop.addEventListener('click', handleBackdropClick);

  // Close button click
  handleCloseBtnClick = function () {
    closeMenu();
  };
  closeBtn.addEventListener('click', handleCloseBtnClick);
}

function closeMenu() {
  backdrop.classList.add(closeClass);

  setTimeout(() => {
    backdrop.classList.remove(openClass);
    backdrop.classList.remove(closeClass);
  }, 600);

  document.body.classList.remove('no-scroll');
  backdrop.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');

  // Cleanup menu item listeners
  if (handleMenuItemClick) {
    menuItems.forEach(item =>
      item.removeEventListener('click', handleMenuItemClick)
    );
    handleMenuItemClick = null;
  }

  // Cleanup ESC
  if (handleEscapeKey) {
    document.removeEventListener('keydown', handleEscapeKey);
    handleEscapeKey = null;
  }

  // Cleanup backdrop
  if (handleBackdropClick) {
    backdrop.removeEventListener('click', handleBackdropClick);
    handleBackdropClick = null;
  }

  // Cleanup close icon
  if (handleCloseBtnClick) {
    closeBtn.removeEventListener('click', handleCloseBtnClick);
    handleCloseBtnClick = null;
  }
}

// Open on burger click
openBtn.addEventListener('click', e => {
  e.preventDefault();
  openMenu();
});
