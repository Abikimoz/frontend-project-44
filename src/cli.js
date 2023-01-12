import readlineSync from 'readline-sync';

let pushName;

export const userName = pushName;

function name() {
  console.log('brain-games!');
  console.log('Welcome to the Brain Games!');
  const pushName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${pushName}!`);
}

export default name;
