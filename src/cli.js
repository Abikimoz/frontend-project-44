import readlineSync from 'readline-sync';

let pushName; // проблема при последующем экспорте, не определяется переменная назначенная в функции

export const userName = pushName; // замена експорта изменяемой переменной

function name() {
  console.log('brain-games!');
  console.log('Welcome to the Brain Games!');
  pushName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${pushName}!`);
  return pushName;
}

export default name;
