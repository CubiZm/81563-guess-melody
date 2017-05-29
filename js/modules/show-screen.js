const appElement = document.querySelector(`section.main`);
const showScreen = (stepContent) => {
  appElement.innerHTML = ``;
  appElement.appendChild(stepContent);
};
export default showScreen;
