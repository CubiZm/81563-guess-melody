import createTemplate from '../create-template';
import showScreen from '../show-screen';
import startScreen from '../templates/start-screen';

const template = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам не повезет<br> в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const renderTemplate = createTemplate(template);

const showScreenHandler = () => {
  showScreen(startScreen);
};

const buttonElement = renderTemplate.querySelector(`.main-replay`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default renderTemplate;
