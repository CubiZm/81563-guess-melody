import createTemplate from '../create-template';
import showScreen from '../show-screen';
import levelGenre from '../templates/level-genre';
import data from '../data/level-artist';
import time from '../data/timer';

const template = createTemplate(`
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${time.stats.startMinutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${time.stats.startSeconds}</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${data.person1.id}" name="answer" value="val-1" />
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${data.person1.imgSrc}">
            ${data.person1.name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${data.person2.id}" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="${data.person2.imgSrc}">
            ${data.person2.name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${data.person3.id}" name="answer" value="val-1" />
          <label class="main-answer" for="answer-3">
            <img class="main-answer-preview" src="${data.person3.imgSrc}">
            ${data.person3.name}
          </label>
        </div>
      </form>
    </div>
  </section>
`);

const showScreenHandler = ({target}) => {
  if (target.classList.contains(`main-answer-r`)) {
    showScreen(levelGenre);
  }
};

const buttonElement = template.querySelector(`.main-list`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default template;
