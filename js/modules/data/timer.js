import formatTime from '../../time-format';

export default {
  stats: {
    startMinutes: formatTime(120000, 0).minutes,
    startSeconds: formatTime(120000, 0).seconds
  }
};
