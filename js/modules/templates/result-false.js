import createTemplate from '../create-template';
import showScreen from '../show-screen';
import startScreen from '../templates/start-screen';
import data from '../data/title';

const template = createTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${data.pages.resultFalse.title}</h2>
    <div class="main-stat">${data.pages.resultFalse.text}</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const showScreenHandler = () => {
  showScreen(startScreen);
};

const buttonElement = template.querySelector(`.main-replay`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default template;
