import readlineSync from 'readline-sync';

function name() {
  console.log('brain-games!');
  console.log('Welcome to the Brain Games!');
  const pushName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${pushName}!`);
  return pushName;
}

export default name;
