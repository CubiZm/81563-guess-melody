const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const app = document.querySelector(`.app`);
const template = document.querySelector(`#templates`).content;
const arrTemplates = [...template.querySelectorAll(`.main`)];

const startScreen = arrTemplates.findIndex((screen) => screen.classList.contains(`main--welcome`));

let currentIndex = startScreen;

const showScreen = () => {
  const stepContent = arrTemplates[currentIndex];
  app.innerHTML = ``;
  app.appendChild(stepContent);
};

showScreen(startScreen);

const changeIndex = (evt, index) => {
  let step = arrTemplates.length;
  if (evt.altKey) {
    switch (evt.keyCode) {
      case RIGHT_ARROW:
        currentIndex = index === step - 1 ? 0 : index + 1;
        break;
      case LEFT_ARROW:
        currentIndex = index ? index - 1 : step - 1;
    }
    showScreen(currentIndex);
  }
};

document.addEventListener(`keydown`, function (evt) {
  changeIndex(evt, currentIndex);
});
