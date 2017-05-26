(function () {
  const KeyCode = {
    LEFT: 37,
    RIGHT: 39
  };

  const appElement = document.querySelector(`.app`);
  const template = document.querySelector(`#templates`).content;
  const arrTemplates = [...template.querySelectorAll(`.main`)];
  const startScreen = `main--welcome`;
  const startScreenIndex = arrTemplates.findIndex((screen) => screen.classList.contains(startScreen));
  let currentIndex = startScreenIndex;
  let step = arrTemplates.length;

  const showScreen = () => {
    const stepContent = arrTemplates[currentIndex];
    appElement.innerHTML = ``;
    appElement.appendChild(stepContent);
  };

  const rightSwap = () => {
    currentIndex = currentIndex === step - 1 ? 0 : currentIndex + 1;
  };

  const leftSwap = () => {
    currentIndex = currentIndex ? currentIndex - 1 : step - 1;
  };

  const changeScreen = (evt) => {
    if (evt.altKey) {
      switch (evt.keyCode) {
        case KeyCode.RIGHT:
          rightSwap();
          break;
        case KeyCode.LEFT:
          leftSwap();
      }
      showScreen();
    }
  };

  showScreen();

  document.addEventListener(`keydown`, changeScreen);

}());
