import readlineSync from 'readline-sync';

export let userName = '';

function name() {
  userName = readlineSync.question('Hello ');
  console.log('brain-games!');
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
}

export default name;
