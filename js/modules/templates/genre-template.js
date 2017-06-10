const getTemplate = (genre, id) =>`
  <div class="genre-answer">
    <div class="player-wrapper"></div>
    <input type="checkbox" name="answer" value="answer-${genre.id}" id="a-${genre.id}">
    <label class="genre-answer-check" for="a-${genre.id}"></label>
  </div>`;

export default getTemplate;
