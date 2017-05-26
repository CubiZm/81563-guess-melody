const KeyCode = {
  LEFT: 37,
  RIGHT: 39,
  ALT: 18
};

const app = document.querySelector(`.app`);
const template = document.querySelector(`#templates`).content;
const arrTemplates = [...template.querySelectorAll(`.main`)];

const startScreen = `main--welcome`;
const screenIndex = arrTemplates.findIndex((screen) => screen.classList.contains(startScreen));

let currentIndex = screenIndex;

const showScreen = () => {
  const stepContent = arrTemplates[currentIndex];
  app.innerHTML = ``;
  app.appendChild(stepContent);
};

const changeIndex = (evt, index) => {
  let step = arrTemplates.length;
  console.log(evt.altKey);
  if (evt.altKey) { // оно не сдаётся!!! :C
    switch (evt.keyCode) {
      case KeyCode.RIGHT:
        currentIndex = index === step - 1 ? 0 : index + 1;
        break;
      case KeyCode.LEFT:
        currentIndex = index ? index - 1 : step - 1;
    }
    showScreen(currentIndex);
  }
};

showScreen();

document.addEventListener(`keydown`, function (evt) {
  changeIndex(evt, currentIndex);
});
