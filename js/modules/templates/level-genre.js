import createTemplate from '../create-template';
import showScreen from '../show-screen';
import resultSuccess from './result-success';
import resultFalse from './result-false';
// import initializePlayer from '../../player';
import data from '../data/level-genre';
import getTemplate from './genre-template';

const template = `
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите хиты лета</h2>
    <form class="genre">
      ${data.genre.map(getTemplate).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

const renderTemplate = createTemplate(template);

const buttonElement = renderTemplate.querySelector(`.genre-answer-send`);
const formElement = renderTemplate.querySelector(`.genre`);
const checkboxElements = [...renderTemplate.querySelectorAll(`[type="checkbox"]`)];

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
  showScreen(result);
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

setButtonDisabled();
// initializePlayer(renderTemplate.querySelector(`[id="a-1']`), data.genre.audioUrl, false);

export default renderTemplate;
