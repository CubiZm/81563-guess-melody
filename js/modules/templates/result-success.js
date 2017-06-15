import createTemplate from '../create-template';
import showScreen from '../show-screen';
import startScreen from '../templates/start-screen';
import data from '../data/statistic';

export default ({time, melodyCount, rating}) => {

  const template = `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${data.time}&nbsp;минуты<br>вы&nbsp;отгадали ${data.melodyCount}&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.rating}%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

  const renderTemplate = createTemplate(template);

  const showScreenHandler = () => {
    showScreen(startScreen(data));
  };

  const buttonElement = renderTemplate.querySelector(`.main-replay`);
  buttonElement.addEventListener(`click`, showScreenHandler);

  return renderTemplate;
};
