import readlineSync from 'readline-sync';

export let message = '';
export let questionEssence = '';

function logic(questionText, questionThree, answerLogic) {
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    questionEssence = questionThree();
    console.log(`Question: ${questionEssence}`);
    const answer = readlineSync.question('Your answer: ');
    const result = answerLogic();
    if (answer === result) {
      message = 1;
      console.log('Correct!');
    } else {
      message = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      break;
    }
  }
}

export default logic;
