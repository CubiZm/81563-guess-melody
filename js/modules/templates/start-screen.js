import createTemplate from '../create-template';
import showScreen from '../show-screen';
import data from '../data/statistic';
import levelArtist from '../templates/level-artist';

const template = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">Правила просты&nbsp;— за&nbsp;${data.time} минуты дать
      максимальное количество правильных ответов.
      <br>Удачи!</p>
  </section>
`;

const renderTemplate = createTemplate(template);

const showScreenHandler = () => {
  showScreen(levelArtist);
};

const buttonElement = renderTemplate.querySelector(`.main-play`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default renderTemplate;
