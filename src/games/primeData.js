// import { questionEssence } from '../index.js';

export const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let answerTrue = '';
let symbolRandom = '';

function getQuestion() {
  symbolRandom = Math.ceil(Math.random() * 10);
  return symbolRandom;
}

function answerLogic() {
  const arrPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];
  const symbolIndex = arrPrime.indexOf(symbolRandom);
  if (symbolIndex === -1) {
    answerTrue = 'no';
  } else {
    answerTrue = 'yes';
  }
  return answerTrue;
}

export { answerLogic };
export default getQuestion;
