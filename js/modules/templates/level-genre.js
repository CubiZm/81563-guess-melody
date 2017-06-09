import createTemplate from '../create-template';
import showScreen from '../show-screen';
import resultSuccess from './result-success';
import resultFalse from './result-false';
import data from '../data/data';

const template = createTemplate(`
  <section class="main main--level main--level-genre">
    <h2 class="title">>${data.pages.levelGenre.title}</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-2" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-3" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-4" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);

const buttonElement = template.querySelector(`.genre-answer-send`);
const formElement = template.querySelector(`.genre`);
const checkboxElements = [...template.querySelectorAll(`[type="checkbox"]`)];

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

export default template;
