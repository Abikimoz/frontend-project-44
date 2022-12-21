import readlineSync from 'readline-sync';

// export function askAboutName() {
//     const name = readlineSync.question('May I have your name? ');
//     return `Hello, ${name}!`;
// }

export function name() {
    return readlineSync.question('May I have your name? ');    
};

// console.log(name());
// export { name };

// export default name;