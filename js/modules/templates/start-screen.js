import createTemplate from '../create-template';
import showScreen from '../show-screen';
import levelArtist from '../templates/level-artist';
import data from '../data/level-artist';

export default ({time}) => {

  const template = `
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">Правила просты&nbsp;— за&nbsp;${time} минуты дать
        максимальное количество правильных ответов.
        <br>Удачи!</p>
    </section>
  `;

  const renderTemplate = createTemplate(template);

  const showScreenHandler = () => {
    showScreen(levelArtist(data));
  };

  const buttonElement = renderTemplate.querySelector(`.main-play`);
  buttonElement.addEventListener(`click`, showScreenHandler);

  return renderTemplate;

};
