import createTemplate from '../create-template';
import showScreen from '../show-screen';
import resultSuccess from './result-success';
import resultFalse from './result-false';

const levelGenre = createTemplate(`
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
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);

const doRandomResult = () => {
  let rand = Math.floor(Math.random() * 2);
  if (rand < 1) {
    showScreen(resultSuccess);
  } else {
    showScreen(resultFalse);
  }
};

const checkboxHandler = () => {
  for (let i of getGenre) {
    if (i.type === `checkbox`) {
      if (i.checked === true) {
        buttonElement.removeAttribute(`disabled`);
        break;
      } else {
        setButtonDisabled();
      }
    }
  }
};

const showScreenHandler = (evt) => {
  evt.preventDefault();
  doRandomResult();
};

// Не могу сообразить как сбрасывать всё по сабмиту.
// вот это не работает :(
// const clearAnswer = () => {
//   for (let i of getGenre) {
//     if (i.type === `checkbox`) {
//       i.checked === false;
//     }
//   }
// };

const buttonElement = levelGenre.querySelector(`.genre-answer-send`);
const getGenre = levelGenre.querySelector(`.genre`);
const setButtonDisabled = () => buttonElement.setAttribute(`disabled`, `disabled`);
setButtonDisabled();
// const replayGame = document.querySelector(`.main-replay`);

buttonElement.addEventListener(`click`, showScreenHandler);
buttonElement.addEventListener(`click`, doRandomResult);
getGenre.addEventListener(`change`, checkboxHandler);
// buttonElement.addEventListener(`submit`, clearAnswer);

showScreen(levelGenre);

export default levelGenre;
