#!/usr/bin/env node

import getName from '../src/cli.js';
import runLogic from '../src/index.js';
import getQuestion, { questionText, runRules } from '../src/games/calcData.js';

const userName = getName();
const message = runLogic(questionText, getQuestion, runRules);
const finalMessage = (message !== 'right') ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(message);
console.log(finalMessage);
