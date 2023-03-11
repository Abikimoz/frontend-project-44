import readlineSync from 'readline-sync';

let messageLet;

function runLogic(questionText, questionThree, answerLogic) {
  console.log(questionText);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const questionEssenceLet = questionThree();
    console.log(`Question: ${questionEssenceLet}`);
    const answer = readlineSync.question('Your answer: ');
    const result = answerLogic();
    if (answer === result) {
      messageLet = 'right';
      console.log('Correct!');
    } else {
      messageLet = 'error';
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    }
  }
  return (messageLet);
}

export default runLogic;
