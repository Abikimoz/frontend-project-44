#!/usr/bin/env node

import name from '../src/cli.js';
import logic from '../src/index.js';
import questionThree, { questionText, answerLogic } from '../src/games/progressionData.js';

const userName = name();
const message = logic(questionText, questionThree, answerLogic);
const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
