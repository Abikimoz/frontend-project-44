import readlineSync from 'readline-sync';

let messageLet;
let questionEssenceLet;

export const message = messageLet;
export const questionEssence = questionEssenceLet;

function logic(questionText, questionThree, answerLogic) {
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    questionEssenceLet = questionThree();
    console.log(`Question: ${questionEssenceLet}`);
    const answer = readlineSync.question('Your answer: ');
    const result = answerLogic();
    if (answer === result) {
      messageLet = 1;
      console.log('Correct!');
    } else {
      messageLet = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      break;
    }
  }
}

export default logic;
