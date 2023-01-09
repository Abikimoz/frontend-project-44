#!/usr/bin/env node

import name, { userName } from '../src/cli.js';
import logic, { message } from '../src/index.js';
import questionThree, { questionText, answerLogic } from '../src/games/gcdData.js';

name();
logic(questionText, questionThree, answerLogic);
const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
