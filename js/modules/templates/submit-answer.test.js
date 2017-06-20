import assert from 'assert';
import submitAnswer from './submit-answer.js';
import {getArtistScreenState, getGenreScreenState} from './utils.js';

describe(`Проверяем данные при отправке ответа`, () => {

  it(`Должна проверять количество вопросов`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 0);

    assert.equal(nextState.questionsLeft, initialState.questionsLeft - 1);
  });

  it(`Должна вычесть одну жизнь при неправиьном ответе`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 1);

    assert.equal(nextState.lives, initialState.lives - 1);
  });

  it(`Не должна отнимать жизни при правильном ответе`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 0);

    assert.equal(nextState.lives, initialState.lives);
  });

  it(`Должна отмечать полуверный ответ как неверный`, () => {
    const initialState = getGenreScreenState();
    const nextState = submitAnswer(initialState, [1, 3]);

    assert.equal(nextState.lives, initialState.lives - 1);
  });

  it(`Должна отметить полностью верный ответ как верный`, () => {
    const initialState = getGenreScreenState();
    const nextState = submitAnswer(initialState, [0, 1, 3]);

    assert.equal(nextState.lives, initialState.lives);
  });

  it(`Должна отправить на страницу результата если закончились жизни`, () => {
    const initialState = getArtistScreenState({
      lives: 1
    });
    const nextState = submitAnswer(initialState, [1]);

    assert.equal(nextState.screen, `results`);
  });

  it(`Должна отправить на страницу результата если закончились вопросы`, () => {
    const initialState = getArtistScreenState({
      questionsLeft: 1
    });
    const nextState = submitAnswer(initialState, [1]);

    assert.equal(nextState.screen, `results`);
  });
});
