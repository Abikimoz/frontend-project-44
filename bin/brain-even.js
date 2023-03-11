#!/usr/bin/env node

import getName from '../src/cli.js';
import even from '../src/games/evenLogic.js';

const userName = getName();
const message = even();
const finalMessage = (message !== 'right') ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
