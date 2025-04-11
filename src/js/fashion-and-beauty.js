document.querySelectorAll('.fashion-beauty__video-play').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('.fashion-beauty__video');
    const thumb = container.querySelector('.fashion-beauty__video-thumb');
    const iframe = container.querySelector('.fashion-beauty__video-iframe');

    let src = iframe.getAttribute('src');
    if (!src.includes('autoplay=1')) {
      src += '&autoplay=1';
    }
    iframe.setAttribute('src', src);

    thumb.style.display = 'none';
    button.style.display = 'none';

    iframe.style.display = 'block';
  });
});
