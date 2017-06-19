import rating from '../data/rating';

export default (item) => {
  const ratingList = rating.slice();
  ratingList.push(item);
  ratingList.sort((a, b) => a.time - b.time);
  ratingList.sort((a, b) => a.answer - b.answer);

  const position = ratingList.indexOf(item) + 1;

  return Math.round(((ratingList.length - position) / ratingList.length) * 100);
};
