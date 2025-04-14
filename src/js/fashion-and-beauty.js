const videoContainers = document.querySelectorAll('.fashion-beauty__video');

videoContainers.forEach(container => {
  const refs = {
    container,
    thumb: container.querySelector('.fashion-beauty__video-thumb'),
    button: container.querySelector('.fashion-beauty__video-play'),
    iframe: container.querySelector('.fashion-beauty__video-iframe'),
    // overlay: container.querySelector('.fashion-beauty__video-overlay'),
    baseSrc: container
      .querySelector('.fashion-beauty__video-iframe')
      .getAttribute('src'),
  };

  const playVideo = () => {
    let src = refs.baseSrc;
    if (!src.includes('autoplay=1')) {
      src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
    }

    refs.iframe.setAttribute('src', src);
    refs.thumb.style.display = 'none';
    refs.button.style.display = 'none';
    refs.iframe.style.display = 'block';
    // refs.overlay.hidden = false;

    refs.timeoutId = setTimeout(stopVideo, 35000);
  };

  const stopVideo = () => {
    refs.iframe.setAttribute('src', '');
    refs.iframe.setAttribute('src', refs.baseSrc);
    refs.iframe.style.display = 'none';
    refs.thumb.style.display = '';
    refs.button.style.display = '';
    // refs.overlay.hidden = true;
  };

  refs.thumb.addEventListener('click', playVideo);
  refs.button.addEventListener('click', playVideo);
  // refs.overlay.addEventListener('click', stopVideo);
});
