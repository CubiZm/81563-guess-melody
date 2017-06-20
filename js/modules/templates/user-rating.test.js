import assert from 'assert';
import getRating from './user-rating';

describe(`Проверяем результаты игры`, () => {

  it(`Должна возвращать верный рейтинг`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 32,
      answers: 10
    };

    assert.equal(getRating(newResult, previousResults), 60);
  });

  it(`Должна вернуть 0% если нет никакого результата`, () => {
    const previousResults = [];
    const newResult = {
      time: 32,
      answers: 10
    };

    assert.equal(getRating(newResult, previousResults), 0);
  });

  it(`Должна правильно вернуть тот же самый результат`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 20, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 20,
      answers: 10
    };

    assert.equal(getRating(newResult, previousResults), 40);
  });

  it(`Должна верно работать с лучшим результатом`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 9,
      answers: 25
    };

    assert.equal(getRating(newResult, previousResults), 80);
  });

  it(`Должна верно работать с худшим результатом`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 70,
      answers: 1
    };

    assert.equal(getRating(newResult, previousResults), 0);
  });

  it(`Должна округлить нецельные числа в результатах до целых`, () => {
    const previousResults = [
      {time: 99, answers: 8},
      {time: 110, answers: 7}
    ];
    const newResult = {
      time: 70,
      answers: 20
    };

    assert.equal(getRating(newResult, previousResults), 66);
  });
});
