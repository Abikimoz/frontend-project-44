import { questionEssence } from '../index.js';

export const questionText = 'What number is missing in the progression?';

let change = '';

function questionThree() {
  const startElement = Math.ceil(Math.random() * 10);
  let numberElement = Math.ceil(Math.random() * 10);
  if (numberElement < 5) {
    numberElement += Math.ceil(Math.random() * 10);
  }
  if (numberElement < 5) {
    numberElement += Math.ceil(Math.random() * 10);
  }
  if (numberElement > 10) {
    numberElement -= 5;
  }
  const step = Math.ceil(Math.random() * 100);
  let x = startElement;
  let testResult = '';
  for (let i = 0; i <= numberElement - 1; i++) {
    x += step;
    testResult = `${testResult} ${x}`;
  }
  const result = testResult.slice(1);
  const arrQuestion = result.split(' ');
  const stringQuestion = arrQuestion.toString();
  const changeNumber = Math.ceil(Math.random() * arrQuestion.length - 1);
  change = arrQuestion[changeNumber];
  const changeIndex = stringQuestion.indexOf(change);
  const oneElement = result.slice(0, changeIndex);
  const twoElement = result.slice(changeIndex + change.length);
  const resultEnd = `${oneElement}..${twoElement}`;
  return resultEnd;
}

function answerLogic() {
  const answerTrue = change;
  return answerTrue;
}

export { answerLogic };
export default questionThree;
