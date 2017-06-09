import createTemplate from '../create-template';
import showScreen from '../show-screen';
import data from '../data/title';
import levelArtist from '../templates/level-artist';

const template = createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play"></button>
    <h2 class="title main-title">${data.pages.welcome.title}</h2>
    <p class="text main-text">${data.pages.welcome.text}</p>
  </section>
`);

const showScreenHandler = () => {
  showScreen(levelArtist);
};

const buttonElement = template.querySelector(`.main-play`);
buttonElement.addEventListener(`click`, showScreenHandler);

export default template;
