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
    let oneNumberAbsolute = Math.abs(oneNumber);
    let twoNumberAbsolute = Math.abs(twoNumber);
    while (twoNumberAbsolute) {
      const temporaryValue = twoNumberAbsolute;
      twoNumberAbsolute = oneNumberAbsolute % twoNumberAbsolute;
      oneNumberAbsolute = temporaryValue;
    }
    return oneNumberAbsolute;
  }
  const answerTrue = String(gcdTwoNumbers(oneElement, twoElement));
  return answerTrue;
}

export { runRules };
export default getQuestion;
