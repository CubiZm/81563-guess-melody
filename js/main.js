(function () {
  const KeyCode = {
    LEFT: 37,
    RIGHT: 39,
    ALT: 18
  };

  const appElement = document.querySelector(`.app`);
  const template = document.querySelector(`#templates`).content;
  const arrTemplates = [...template.querySelectorAll(`.main`)];
  const startScreen = `main--welcome`;
  const startScreenIndex = arrTemplates.findIndex((screen) => screen.classList.contains(startScreen));
  let currentIndex = startScreenIndex;
  let step = arrTemplates.length;
  let codes = [];

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
    codes.push(evt.keyCode);
    let ALT = codes[0] === KeyCode.ALT;
    let LEFT_ARROW = codes[1] === KeyCode.LEFT;
    let RIGHT_ARROW = codes[1] === KeyCode.RIGHT;
    if (codes.length === 2) {
      if (ALT && LEFT_ARROW) {
        leftSwap();
      } else if (ALT && RIGHT_ARROW) {
        rightSwap();
      }
      codes = [];
    }
    showScreen();
  };

  const clearPressKeys = (evt) => {
    codes = [];
  };

  showScreen();

  document.addEventListener(`keydown`, changeScreen);
  document.addEventListener(`keyup`, clearPressKeys);

}());
