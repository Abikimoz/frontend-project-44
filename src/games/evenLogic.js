import readlineSync from 'readline-sync';

let messageLet;

export const message = messageLet;

function even() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const answerTrue = randomNumber % 2 === 0 ? 'yes' : 'no';
    if ((randomNumber % 2 === 0 && answer === 'yes')
    || (randomNumber % 2 !== 0 && answer === 'no')) {
      messageLet = 1;
      console.log('Correct!');
    } else {
      messageLet = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.`);
      break;
    }
  }
  return messageLet;
}

export default even;
