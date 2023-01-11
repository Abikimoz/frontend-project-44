import { questionEssence } from '../index.js';

export const questionText = 'What is the result of the expression?';

function questionThree() {
  const oneElement = Math.ceil(Math.random() * 100);
  const twoElement = Math.ceil(Math.random() * 100);
  const allSigns = '+-*+-*+-*+-';
  const randomAllSigns = allSigns[Math.ceil(Math.random() * 10)];
  const questionEssence = `${oneElement} ${randomAllSigns} ${twoElement}`;
  return questionEssence;
}

function answerLogic() {
  const answerTrueEval = eval(questionEssence);
  const answerTrue = String(answerTrueEval);
  return answerTrue;
}

export { answerLogic };
export default questionThree;
