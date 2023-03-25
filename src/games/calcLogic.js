export const questionText = 'What is the result of the expression?';

let answerTrueEval = '';

function getQuestion() {
  const oneElement = Math.ceil(Math.random() * 100);
  const twoElement = Math.ceil(Math.random() * 100);
  const allSigns = ['*', '+', '-'];
  const randomAllSigns = allSigns[Math.floor(Math.random() * 3)];
  const questionEssence = `${oneElement} ${randomAllSigns} ${twoElement}`;
  switch (randomAllSigns) {
    case '+':
      answerTrueEval = oneElement + twoElement;
      break;
    case '*':
      answerTrueEval = oneElement * twoElement;
      break;
    case '-':
      answerTrueEval = oneElement - twoElement;
      break;
    default:
      break;
  }
  return questionEssence;
}

function runRules() {
  const answerTrue = String(answerTrueEval);
  return answerTrue;
}

export { runRules };
export default getQuestion;
