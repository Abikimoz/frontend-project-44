export const questionText = 'Find the greatest common divisor of given numbers.';

let oneElement = '';
let twoElement = '';

function getQuestion() {
  oneElement = Math.ceil(Math.random() * 100);
  twoElement = Math.ceil(Math.random() * 100);
  const questionEssence = `${oneElement} ${twoElement}`;
  return questionEssence;
}

function runRules() {
  function gcdTwoNumbers(oneNumber, twoNumber) {
    if ((typeof oneNumber !== 'number') || (typeof twoNumber !== 'number')) return false;
    let oneNumberAbs = Math.abs(oneNumber);
    let twoNumberAbs = Math.abs(twoNumber);
    while (twoNumberAbs) {
      const t = twoNumberAbs;
      twoNumberAbs = oneNumberAbs % twoNumberAbs;
      oneNumberAbs = t;
    }
    return oneNumberAbs;
  }
  const answerTrue = String(gcdTwoNumbers(oneElement, twoElement));
  return answerTrue;
}

export { runRules };
export default getQuestion;
