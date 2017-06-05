import createTemplate from '../create-template';
import showScreen from '../show-screen';
import resultSuccess from './result-success';
import resultFalse from './result-false';

const template = createTemplate(`
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
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

const setButtonDisabled = (isChecked) => {
  if (!isChecked) {
    buttonElement.setAttribute(`disabled`, `disabled`);
  } else {
    buttonElement.removeAttribute(`disabled`, `disabled`);
  }
};

const doRandomResult = () => {
  let random = Math.floor(Math.random() * 2);
  const result = random < 1 ? resultSuccess : resultFalse;
  showScreen(result);
};

const showScreenHandler = (evt) => {
  doRandomResult();
};

const clearUp = () => {
  checkboxElements.forEach(function (i) {
    i.checked = false;
  });
  setButtonDisabled();
};

buttonElement.addEventListener(`click`, showScreenHandler);
formElement.addEventListener(`change`, setButtonDisabled);
formElement.addEventListener(`submit`, clearUp);

setButtonDisabled();
showScreen(template);

export default template;
