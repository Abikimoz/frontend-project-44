import { questionEssence } from '../index.js';

export const questionText = 'What is the result of the expression?';

let answerTrueEval = '';

function questionThree() {
  const oneElement = Math.ceil(Math.random() * 100);
  const twoElement = Math.ceil(Math.random() * 100);
  const allSigns = '*+-*';
  const randomAllSigns = allSigns[Math.ceil(Math.random() * 3)];
  // console.log(typeof(oneElement));
  // console.log(typeof(randomAllSigns));
  // console.log(typeof(twoElement));
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

function answerLogic() {
  // console.log(questionEssence);
  // const answerTrueEval = eval(questionEssence);
  const answerTrue = String(answerTrueEval);
  return answerTrue;
}

export { answerLogic };
export default questionThree;
