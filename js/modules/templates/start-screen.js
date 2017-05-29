import createTemplate from '../create-templates';
import showScreen from '../show-screen';
// const START_SCREEN = `main--welcome`;
// const startScreenIndex = screenElements.findIndex((screen) => screen.classList.contains(START_SCREEN));

const startScreen = createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`);
export default startScreen;
