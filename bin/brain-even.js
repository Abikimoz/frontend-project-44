#!/usr/bin/env node

import name from '../src/cli.js';
import even from '../src/games/evenLogic.js';

const userName = name();
const message = even();
const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
