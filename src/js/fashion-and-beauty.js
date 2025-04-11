// document.querySelectorAll('.fashion-beauty__video-play').forEach(button => {
//   button.addEventListener('click', () => {
//     const container = button.closest('.fashion-beauty__video');
//     const thumb = container.querySelector('.fashion-beauty__video-thumb');
//     const iframe = container.querySelector('.fashion-beauty__video-iframe');

//     let src = iframe.getAttribute('src');
//     if (!src.includes('autoplay=1')) {
//       src += '&autoplay=1';
//     }
//     iframe.setAttribute('src', src);

//     thumb.style.display = 'none';
//     button.style.display = 'none';

//     iframe.style.display = 'block';
//   });
// });
// 1. Inject the YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(tag);

// 2. Hold a reference to the player
let player;

// 3. This gets called by the API once it's loaded
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '100%',
    videoId: 'FLmCGn7LrSs',
    playerVars: {
      controls: 0,
      modestbranding: 1,
      rel: 0,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. When the video ends, swap back to placeholder
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    const container = document.getElementById('video-container');
    container.querySelector('.fashion-beauty__video-thumb').style.display = '';
    container.querySelector('.fashion-beauty__video-play').style.display = '';
    document.getElementById('player').style.display = 'none';
    player.seekTo(0); // reset to start
  }
}

// 5. On DOM ready, hook up the play button
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('video-container');
  const thumb = container.querySelector('.fashion-beauty__video-thumb');
  const button = container.querySelector('.fashion-beauty__video-play');
  const playerDiv = document.getElementById('player');

  button.addEventListener('click', () => {
    // hide placeholder
    thumb.style.display = 'none';
    button.style.display = 'none';

    // show the player and start playback
    playerDiv.style.display = 'block';
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  });
});
