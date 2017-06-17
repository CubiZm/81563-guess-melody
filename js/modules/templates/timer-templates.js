import time from '../data/timer';

const getTemplate = `
  <span class="timer-value-mins">${time.stats.startMinutes}</span><!--
  --><span class="timer-value-dots">:</span><!--
  --><span class="timer-value-secs">${time.stats.startSeconds}</span>`;

export default getTemplate;
