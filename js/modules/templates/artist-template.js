const getTemplate = (artist) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${artist.id}" name="answer" value="val-1" />
    <label class="main-answer" for="answer-${artist.id}">
      <img class="main-answer-preview" src="${artist.imgSrc}">
      ${artist.name}
    </label>
    </div>`;

export default getTemplate;
