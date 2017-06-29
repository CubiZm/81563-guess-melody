const checkAnswer = (submited, correct) => {
  if (typeof submited === `number`) {
    return submited === correct;
  }

  if (submited.length === correct.length) {
    return submited.every((elem, i) => elem === correct[i]);
  }

  return false;
};

export default function submitAnswer(gameState, answer) {
  const newLives = checkAnswer(answer, gameState.question.rightAnswer)
    ? gameState.lives
    : gameState.lives - 1;

  return Object.assign({}, gameState, {
    questionsLeft: gameState.questionsLeft - 1,
    lives: newLives,
    screen: newLives === 0 || gameState.questionsLeft === 1 ? `results` : gameState.screen
  });
}
