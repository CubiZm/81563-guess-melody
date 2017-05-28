(function () {
  const KeyCode = {
    LEFT: 37,
    RIGHT: 39,
    ALT: 18
  };
  const START_SCREEN = `main--welcome`;
  const appElement = document.querySelector(`.app`);
  const template = document.querySelector(`#templates`).content;
  const screenElements = [...template.querySelectorAll(`.main`)];
  const startScreenIndex = screenElements.findIndex((screen) => screen.classList.contains(START_SCREEN));
  const max = screenElements.length;
  let currentIndex = startScreenIndex;
  let codes = [];

  if (startScreenIndex < 0 || null) {
    return;
  }

  const showScreen = (index) => {
    const stepContent = screenElements[index];
    appElement.innerHTML = ``;
    appElement.appendChild(stepContent);
  };

  const turn = (isLeft = true) => {
    if (isLeft) {
      currentIndex = (max + currentIndex - 1) % max;
    } else {
      currentIndex = (currentIndex + 1) % max;
    }

    showScreen(currentIndex);
  };

  const onKeydown = (evt) => {
    codes.push(evt.keyCode);
    const isAltPressedFirst = codes[0] === KeyCode.ALT;

    if (!isAltPressedFirst || codes.length !== 2) {
      return;
    }

    const secondCode = codes[1];

    if (secondCode === KeyCode.LEFT) {
      turn(true);
    } else if (secondCode === KeyCode.RIGHT) {
      turn(false);
    }
  };

  const onKeyup = () => {
    codes.pop();
  };

  document.addEventListener(`keydown`, onKeydown);
  document.addEventListener(`keyup`, onKeyup);

  showScreen(startScreenIndex);
}());
