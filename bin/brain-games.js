#!/usr/bin/env node

// import readlineSync from 'readline-sync';

// const name = readlineSync.question('May I have your name? ');

import { name } from '../src/cli.js';

// console.log('node bin/brain-games.js');
console.log('brain-games!');
console.log('Welcome to the Brain Games!');
// name();
console.log(`Hello ${name()} !`);
