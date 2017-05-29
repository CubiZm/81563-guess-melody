import createTemplate from '../create-templates';
import showScreen from '../show-screen';
import startScreen from '../templates/start-screen';

const winResult = createTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const showScreenHandler = () => {
  showScreen(startScreen);
};

const button = winResult.querySelector(`.main-replay`);
button.addEventListener(`click`, showScreenHandler);

export default winResult;
