import { questionEssence } from '../index.js';

export const questionText = 'Find the greatest common divisor of given numbers.';

let oneElement = '';
let twoElement = '';

function questionThree() {
  oneElement = Math.ceil(Math.random() * 100);
  twoElement = Math.ceil(Math.random() * 100);
  const questionEssence = `${oneElement} ${twoElement}`;
  return questionEssence;
}

function answerLogic() {
  function gcdTwoNumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  const answerTrue = String(gcdTwoNumbers(oneElement, twoElement));
  return answerTrue;
}

export { answerLogic };
export default questionThree;
