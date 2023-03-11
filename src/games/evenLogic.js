export const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

let randomNumber = '';

function getQuestion() {
  randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}

function runRules() {
  if (randomNumber % 2 === 0) {
    return 'yes';
  } return 'no';
}

export { runRules };
export default getQuestion;
