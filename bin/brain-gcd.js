#!/usr/bin/env node

import getName from '../src/cli.js';
import runLogic from '../src/index.js';
import questionThree, { questionText, answerLogic } from '../src/games/gcdData.js';

const userName = getName();
const message = runLogic(questionText, questionThree, answerLogic);
const finalMessage = (message !== 'right') ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
