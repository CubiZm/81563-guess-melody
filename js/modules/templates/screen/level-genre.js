import createTemplate from '../../utils/create-template';
import showScreen from '../../utils/show-screen';
import resultSuccess from '../screen/result-success';
import resultFalse from '../screen/result-false';
import initializePlayer from '../../../player';
import data from '../../data/level-genre';
import getTemplate from '../genre-template';
import state from '../../data/state';

export default ({genre}) => {
  const template = `
    <section class="main main--level main--level-genre">
    <div class="lives">${state.lives}</div>
      <h2 class="title">Выберите хиты лета</h2>
      <form class="genre">
        ${genre.map(getTemplate).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>`;

  const renderTemplate = createTemplate(template);

  const buttonElement = renderTemplate.querySelector(`.genre-answer-send`);
  const formElement = renderTemplate.querySelector(`.genre`);
  const checkboxElements = [...renderTemplate.querySelectorAll(`[type="checkbox"]`)];
  const playerWrappers = [...renderTemplate.querySelectorAll(`.player-wrapper`)];
  const lives = renderTemplate.querySelector(`.lives`);
  lives.innerHTML = new Array(state.lives + 1).join(`
      <span class="lives-heart">♥︎</span>
    `);

  const setButtonDisabled = () => {
    let isFormCorrect = checkboxElements.some((checkbox) => checkbox.checked);

    buttonElement.disabled = !isFormCorrect;
  };

  const formChangeHandler = () => {
    setButtonDisabled();
  };

  const doRandomResult = () => {
    let random = Math.floor(Math.random() * 2);
    const result = random < 1 ? resultSuccess : resultFalse;
    showScreen(result(data));
  };

  const showScreenHandler = () => {
    doRandomResult();
  };

  const clearUp = () => {
    checkboxElements.forEach((checkboxes) => {
      checkboxes.checked = false;
    });
    setButtonDisabled();
  };

  buttonElement.addEventListener(`click`, showScreenHandler);
  formElement.addEventListener(`change`, formChangeHandler);
  formElement.addEventListener(`submit`, clearUp);

  playerWrappers.forEach((element, id) => initializePlayer(element, genre[id].audioUrl, false));
  setButtonDisabled();

  return renderTemplate;
};
