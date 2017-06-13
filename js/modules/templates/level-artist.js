import createTemplate from '../create-template';
import showScreen from '../show-screen';
import levelGenre from '../templates/level-genre';
import data from '../data/level-artist';
import getTemplate from './artist-template';
import getTimer from './timer-templates';

const template = `
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          ${getTimer}
        </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${data.artist.map(getTemplate).join(``)}
      </form>
      </div>
    </div>
  </section>
`;

const renderTemplate = createTemplate(template);

const showScreenHandler = ({target}) => {
  if (target.classList.contains(`main-answer-r`)) {
    showScreen(levelGenre);
  }
};

const buttonElement = renderTemplate.querySelector(`.main-list`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default renderTemplate;
