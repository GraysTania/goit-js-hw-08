import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(currentTime));
player.on(
  'timeupdate',
  throttle(data => localStorage.setItem(currentTime, data.seconds), 1000)
);
