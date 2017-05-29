const START_SCREEN = `main--welcome`;
const appElement = document.querySelector(`.app`);
const template = document.querySelector(`#templates`).content;
const screenElements = [...template.querySelectorAll(`.main`)];
const startScreenIndex = screenElements.findIndex((screen) => screen.classList.contains(START_SCREEN));

const createTemplate = (index) => {
  const stepContent = screenElements[index];
  appElement.innerHTML = ``;
  appElement.appendChild(stepContent);
};

export default createTemplate;
