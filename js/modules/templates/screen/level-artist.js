import createTemplate from '../../utils/create-template';
import showScreen from '../../utils/show-screen';
import showLevelGenre from './level-genre';
import data from '../../data/level-genre';
import getTemplate from '../artist-template';
import getTimer from '../timer-templates';
import initializePlayer from '../../../player';

export default ({artists}) => {

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
          ${artists.map(getTemplate).join(``)}
        </form>
        </div>
      </div>
    </section>
  `;

  const renderTemplate = createTemplate(template);
  const playerWrapper = renderTemplate.querySelector(`.player-wrapper`);
  const buttonElement = renderTemplate.querySelector(`.main-list`);

  const showScreenHandler = ({target}) => {
    if (target.classList.contains(`main-answer-r`)) {
      showScreen(showLevelGenre(data));
    }
  };

  buttonElement.addEventListener(`click`, showScreenHandler);

  initializePlayer(playerWrapper, data.audioUrl);

  return renderTemplate;
};
