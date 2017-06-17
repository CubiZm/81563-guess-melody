const getTemplate = ({id}) =>`
  <div class="genre-answer">
    <div class="player-wrapper"></div>
    <input type="checkbox" name="answer" value="answer-${id}" id="a-${id}">
    <label class="genre-answer-check" for="a-${id}"></label>
  </div>`;

export default getTemplate;
