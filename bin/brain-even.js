#!/usr/bin/env node

import name, { userName } from '../src/cli.js';
import even, { message } from '../src/games/evenLogic.js';

name();
even();
const finalMessage = (message !== 1) ? `Let's try again, ${userName}!` : `Congratulations, ${userName}!`;
console.log(finalMessage);
