const getTemplate = ({id, imgSrc, name}) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${id}" name="answer" value="val-${id}" />
    <label class="main-answer" for="answer-${id}">
      <img class="main-answer-preview" src="${imgSrc}">
      ${name}
    </label>
    </div>`;

export default getTemplate;
