import assert from 'assert';
import getRating from './user-rating';

describe(`correct statistic`, () => {
  it(`should return correct statistic data`, () => {
    assert.equal(getRating({time: 0, answers: 10}), 83);
    assert.equal(getRating({time: 45, answers: 10}), 33);
    assert.equal(getRating({time: 33, answers: 8}), 17);
    assert.equal(getRating({time: 77, answers: 7}), 0);
    assert.equal(getRating({time: 120, answers: 0}), 0);
  });
});
