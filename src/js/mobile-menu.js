document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.header__mobile-menu');
  const backdrop = document.querySelector('.mobile-menu__backdrop');
  const closeBtn = backdrop.querySelector('.mobile-menu__close');
  const menuItems = backdrop.querySelectorAll('li a');
  const openClass = 'mobile-menu__backdrop--open';
  const closeClass = 'mobile-menu--close';
  const OFFSET = 63;

  let handleMenuItemClick;
  let handleEscapeKey;
  let handleBackdropClick;

  function openMenu() {
    document.body.classList.add('no-scroll');
    backdrop.classList.add(openClass);
    backdrop.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');

    // Handle menu item click (scroll and close)
    handleMenuItemClick = function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const offsetTop =
            targetEl.getBoundingClientRect().top + window.pageYOffset - OFFSET;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
      closeMenu();
    };
    menuItems.forEach(item =>
      item.addEventListener('click', handleMenuItemClick)
    );

    // Handle ESC key
    handleEscapeKey = function (e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    // Handle backdrop click
    handleBackdropClick = function (e) {
      if (e.target === backdrop) {
        closeMenu();
      }
    };
    backdrop.addEventListener('click', handleBackdropClick);
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

    // Clean up menu item click listeners
    if (handleMenuItemClick) {
      menuItems.forEach(item =>
        item.removeEventListener('click', handleMenuItemClick)
      );
      handleMenuItemClick = null;
    }

    // Clean up ESC key listener
    if (handleEscapeKey) {
      document.removeEventListener('keydown', handleEscapeKey);
      handleEscapeKey = null;
    }

    // Clean up backdrop click listener
    if (handleBackdropClick) {
      backdrop.removeEventListener('click', handleBackdropClick);
      handleBackdropClick = null;
    }
  }

  // Open menu on burger click
  openBtn.addEventListener('click', e => {
    e.preventDefault();
    openMenu();
  });

  // Close on close icon (always attached)
  closeBtn.addEventListener('click', closeMenu);
});
